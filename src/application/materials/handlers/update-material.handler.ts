import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateMaterialCommand } from 'src/application/materials/commands/update-material.command';
import { IMaterial } from 'src/domain/interfaces/material.interface';
import { MaterialRepository } from 'src/infrastructure/repositories/material.repository';

@CommandHandler(UpdateMaterialCommand)
export class UpdateMaterialHandler
  implements ICommandHandler<UpdateMaterialCommand>
{
  constructor(private readonly repository: MaterialRepository) {}

  async execute(command: UpdateMaterialCommand): Promise<IMaterial | null> {
    return await this.repository.update(command.material);
  }
}
