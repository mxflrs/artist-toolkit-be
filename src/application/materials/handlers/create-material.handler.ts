import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateMaterialCommand } from 'src/application/materials/commands/create-material.command';
import { IMaterial } from 'src/domain/interfaces/material.interface';
import { MaterialRepository } from 'src/infrastructure/repositories/material.repository';

@CommandHandler(CreateMaterialCommand)
export class CreateMaterialHandler
  implements ICommandHandler<CreateMaterialCommand>
{
  constructor(private readonly repository: MaterialRepository) {}

  async execute(command: CreateMaterialCommand): Promise<IMaterial | null> {
    return await this.repository.save(command.material);
  }
}
