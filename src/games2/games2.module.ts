import { Module } from '@nestjs/common';
import { Games2Controller } from './games2.controller';
import { Games2Service } from './games2.service';
import { PrismaService } from '../prisma/prisma.service'; // Importando o PrismaService

@Module({
  controllers: [Games2Controller],
  providers: [Games2Service, PrismaService], // Adicionando PrismaService aos provedores
})
export class Games2Module {}
