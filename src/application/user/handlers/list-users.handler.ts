import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListUsersQuery } from 'src/application/user/queries/list-users.query';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersHandler> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[] | null> {
    return this.userRepository.getAllUsers();
  }
}
