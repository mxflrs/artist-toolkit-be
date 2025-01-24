import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateSpaceCommand } from 'src/application/spaces/commands/update-space.command';
import { ISpace } from 'src/domain/interfaces/space.interface';
import { SpaceRepository } from 'src/infrastructure/repositories/space.repository';

@CommandHandler(UpdateSpaceCommand)
export class UpdateSpaceHandler implements ICommandHandler<UpdateSpaceCommand> {
  constructor(private readonly repository: SpaceRepository) {}

  async execute(command: UpdateSpaceCommand): Promise<ISpace | null> {
    return await this.repository.update(command.space);
  }
}
