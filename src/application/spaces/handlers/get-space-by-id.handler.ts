import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSpaceByIdQuery } from 'src/application/spaces/queries/get-space-by-id.query';
import { ISpace } from 'src/domain/interfaces/space.interface';
import { SpaceRepository } from 'src/infrastructure/repositories/space.repository';

@QueryHandler(GetSpaceByIdQuery)
export class GetSpaceByIdHandler implements IQueryHandler<GetSpaceByIdQuery> {
  constructor(private readonly repository: SpaceRepository) {}

  async execute(query: GetSpaceByIdQuery): Promise<ISpace | null> {
    return this.repository.getById(query.spaceId);
  }
}
