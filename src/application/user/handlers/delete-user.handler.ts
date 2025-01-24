import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from 'src/application/user/commands/delete-user.command';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(private userRepository: UserRepository) {}

  async execute(command: DeleteUserCommand): Promise<string> {
    return await this.userRepository.delete(command.userId);
  }
}
