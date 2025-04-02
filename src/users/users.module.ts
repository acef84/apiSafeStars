import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';  // Se você estiver usando Prisma

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey',  // Substitua por uma chave secreta segura, por exemplo, em um arquivo .env
      signOptions: { expiresIn: '1h' },  // Tempo de expiração do token
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],  // Se você estiver usando Prisma ou outros serviços
})
export class UsersModule {}
