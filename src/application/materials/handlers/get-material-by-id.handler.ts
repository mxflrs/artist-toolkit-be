import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMaterialByIdQuery } from 'src/application/materials/queries/get-material-by-id.query';
import { IMaterial } from 'src/domain/interfaces/material.interface';
import { MaterialRepository } from 'src/infrastructure/repositories/material.repository';

@QueryHandler(GetMaterialByIdQuery)
export class GetMaterialHandler implements IQueryHandler<GetMaterialByIdQuery> {
  constructor(private readonly repository: MaterialRepository) {}

  async execute(query: GetMaterialByIdQuery): Promise<IMaterial | null> {
    return await this.repository.getById(query.materialId);
  }
}
