import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/application/user/commands/create-user.command';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand): Promise<User | null> {
    const userData = command.user;
    return await this.userRepository.save(userData);
  }
}
