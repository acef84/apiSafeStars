import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt'; 
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register') // Rota para registro de usuário
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.usersService.create(createUserDto);
      
      // Gera o token para o novo usuário
      const payload = { email: user.email, sub: user.id };
      const token = this.jwtService.sign(payload);

      // Retorna uma resposta sem a senha
      const { password, ...userWithoutPassword } = user;
      return { message: 'Usuário registrado com sucesso!', user: userWithoutPassword, token };
    } catch (error) {
      throw new BadRequestException('Erro ao cadastrar usuário');
    }
  }

  @Post('login') 
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Credenciais inválidas. Tente novamente.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Credenciais inválidas. Tente novamente.');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { message: 'Login bem-sucedido!', token };
  }
}
