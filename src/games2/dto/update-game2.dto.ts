import { IsString, IsOptional, IsUrl } from 'class-validator';

export class UpdateGame2Dto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  imagem?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsUrl()
  @IsOptional()
  dowLink?: string;
}
