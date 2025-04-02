import { Controller, Get, Post, Body, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { Games2Service } from './games2.service';
import { games2 } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Controller('games2')
export class Games2Controller {
  constructor(private readonly games2Service: Games2Service) {}

  @Post() // Rota para criação genérica
  create(@Body() createGames2Dto: { nome: string; imagem: string; descricao: string; dowLink: string }): Promise<games2> {
    return this.games2Service.create(createGames2Dto);
  }
  
  @Get()
  findAll(): Promise<games2[]> {
    return this.games2Service.findAll();
  }  

  @Get(':id')
  findOne(@Param('id') id: string): Promise<games2> {
    return this.games2Service.findOne(Number(id));
  }  

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGames2Dto: Partial<{ id: number; nome: string; imagem: string; descricao: string; createdAt: Date; }>): Promise<games2> {
    return this.games2Service.update(Number(id), updateGames2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<games2> {
    return this.games2Service.remove(Number(id));
  }
}
