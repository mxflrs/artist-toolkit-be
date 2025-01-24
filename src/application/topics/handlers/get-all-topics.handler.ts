import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllTopicsQuery } from 'src/application/topics/queries/get-all-topics.query';
import { ITopic } from 'src/domain/interfaces/topic.interface';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';

@QueryHandler(GetAllTopicsQuery)
export class GetAllTopicsHandler implements IQueryHandler<GetAllTopicsQuery> {
  constructor(private readonly topicRepository: TopicRepository) {}

  async execute(): Promise<ITopic[] | null> {
    return this.topicRepository.getAll();
  }
}
