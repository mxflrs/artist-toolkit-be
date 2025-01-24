import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllSpacesQuery } from 'src/application/spaces/queries/get-all-spaces.query';
import { ISpace } from 'src/domain/interfaces/space.interface';
import { SpaceRepository } from 'src/infrastructure/repositories/space.repository';

@QueryHandler(GetAllSpacesQuery)
export class GetAllSpacesHandler implements IQueryHandler<GetAllSpacesQuery> {
  constructor(private readonly repository: SpaceRepository) {}

  async execute(): Promise<ISpace[] | null> {
    return await this.repository.getAll();
  }
}
