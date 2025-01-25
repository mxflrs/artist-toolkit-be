import { IsNotEmpty, IsOptional } from "class-validator";

export class MaterialDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    name?: number;

    @IsOptional()
    unitCost?: number;

    @IsOptional()
    unitType?: string;
}