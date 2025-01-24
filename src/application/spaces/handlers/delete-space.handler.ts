import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteSpaceCommand } from 'src/application/spaces/commands/delete-space.command';
import { SpaceRepository } from 'src/infrastructure/repositories/space.repository';

@CommandHandler(DeleteSpaceCommand)
export class DeleteSpaceHandler implements ICommandHandler<DeleteSpaceCommand> {
  constructor(private readonly repository: SpaceRepository) {}

  async execute(command: DeleteSpaceCommand): Promise<number | null> {
    return await this.repository.delete(command.spaceId);
  }
}
