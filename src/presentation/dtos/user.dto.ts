import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
