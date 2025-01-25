import { MaterialDto } from 'src/presentation/dtos/material.dto';

export class UpdateMaterialCommand {
  constructor(public readonly material: MaterialDto) {}
}
