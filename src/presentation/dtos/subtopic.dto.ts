import { IsNotEmpty, IsOptional } from 'class-validator';

export class SubtopicDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  topicId: number;

  @IsOptional()
  imageUrl: string;

  @IsOptional()
  artStyles: number[];
}
