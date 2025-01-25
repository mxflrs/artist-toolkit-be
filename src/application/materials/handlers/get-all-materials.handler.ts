import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllMaterialsQuery } from 'src/application/materials/queries/get-all-materials.query';
import { IMaterial } from 'src/domain/interfaces/material.interface';
import { MaterialRepository } from 'src/infrastructure/repositories/material.repository';

@QueryHandler(GetAllMaterialsQuery)
export class GetAllMaterialsHandler
  implements IQueryHandler<GetAllMaterialsQuery>
{
  constructor(private readonly repository: MaterialRepository) {}

  async execute(): Promise<IMaterial[] | null> {
    return await this.repository.getAll();
  }
}
