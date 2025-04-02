import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty() // Garante que o campo email não está vazio
  email: string;

  @IsString()
  @IsNotEmpty() // Garante que o campo password não está vazio
  password: string;
}
