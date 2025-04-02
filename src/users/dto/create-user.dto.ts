import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty() // Verifica se o campo não está vazio
  name: string;

  @IsEmail()
  @IsNotEmpty() // Verifica se o campo não está vazio
  email: string;

  @IsString()
  @MinLength(6) // Define um mínimo de 6 caracteres para a senha
  @IsNotEmpty() // Verifica se o campo não está vazio
  password: string;
}
