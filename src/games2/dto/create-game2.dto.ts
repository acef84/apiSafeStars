import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateGame2Dto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  imagem: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsUrl()
  @IsNotEmpty()
  dowLink: string;
}
