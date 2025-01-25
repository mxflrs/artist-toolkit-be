import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteMaterialCommand } from 'src/application/materials/commands/delete-material.command';
import { MaterialRepository } from 'src/infrastructure/repositories/material.repository';

@CommandHandler(DeleteMaterialCommand)
export class DeleteMaterialHandler
  implements ICommandHandler<DeleteMaterialCommand>
{
  constructor(private readonly repository: MaterialRepository) {}

  async execute(command: DeleteMaterialCommand): Promise<any> {
    return await this.repository.delete(command.materialId);
  }
}
