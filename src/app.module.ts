import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';  // Importe o JwtModule
import { UsersModule } from './users/users.module';
import { Games2Module } from './games2/games2.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    UsersModule,  // Importa o UsersModule
    Games2Module,  // Importa o Games2Module
    JwtModule.register({
      secret: 'secretKey',  // Use uma chave secreta segura em um arquivo .env
      signOptions: { expiresIn: '1h' },  // Tempo de expiração do token
    }),
  ],
  providers: [PrismaService],  // PrismaService continua como está
})
export class AppModule {}
