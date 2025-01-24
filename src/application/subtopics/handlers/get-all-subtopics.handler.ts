import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllSubtopicsQuery } from 'src/application/subtopics/queries/get-all-subtopics.query';
import { ISubtopic } from 'src/domain/interfaces/subtopic.interface';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';

@QueryHandler(GetAllSubtopicsQuery)
export class GetAllSubtopicsHandler
  implements IQueryHandler<GetAllSubtopicsQuery>
{
  constructor(private readonly subtopicRepository: SubtopicRepository) {}

  async execute(): Promise<ISubtopic[] | null> {
    return this.subtopicRepository.getAll();
  }
}
