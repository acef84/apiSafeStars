import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Método para criar um novo usuário com senha hash
  async create(data: { name: string; email: string; password: string }): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  // Método para buscar todos os usuários
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Método para buscar um usuário por ID
  async findOne(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Método para buscar um usuário por e-mail
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Método para atualizar um usuário com senha hash, se necessário
  async update(id: number, data: Partial<{ name: string; email: string; password: string }>): Promise<User> {
    if (data.password) {
      const saltRounds = 10;
      data.password = await bcrypt.hash(data.password, saltRounds);
    }
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Método para excluir um usuário
  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
