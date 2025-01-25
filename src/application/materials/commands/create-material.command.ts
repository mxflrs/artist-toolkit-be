import { MaterialDto } from 'src/presentation/dtos/material.dto';

export class CreateMaterialCommand {
  constructor(public readonly material: MaterialDto) {}
}
