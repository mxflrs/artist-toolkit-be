import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from 'src/application/user/queries/get-user.query';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUserQuery): Promise<User | null> {
    return this.userRepository.findByName(query.name);
  }
}
