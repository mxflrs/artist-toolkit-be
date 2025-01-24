import { IsNotEmpty, IsOptional } from 'class-validator';

export class TopicDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  imageUrl?: string;
}
