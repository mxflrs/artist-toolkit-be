import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSubtopicByIdQuery } from 'src/application/subtopics/queries/get-subtopic-by-id.query';
import { ISubtopic } from 'src/domain/interfaces/subtopic.interface';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';

@QueryHandler(GetSubtopicByIdQuery)
export class GetSubtopicByIdHandler
  implements IQueryHandler<GetSubtopicByIdQuery>
{
  constructor(private readonly subtopicRepository: SubtopicRepository) {}

  async execute(query: GetSubtopicByIdQuery): Promise<ISubtopic | null> {
    console.log(query.subtopicId);
    return await this.subtopicRepository.getById(query.subtopicId);
  }
}
