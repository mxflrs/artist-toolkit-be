import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from 'src/application/user/commands/update-user.command';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: UpdateUserCommand): Promise<User | null> {
    const userData = command.user;
    return await this.userRepository.update(userData);
  }
}
