import { IsNotEmpty, IsOptional } from "class-validator";

export class SpaceDto {
    @IsOptional()
    id?: number;
    
    @IsNotEmpty()
    title: string;

    @IsOptional()
    images: string[];

    @IsOptional()
    description: number;
}