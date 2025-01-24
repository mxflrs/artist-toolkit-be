import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTopicQuery } from 'src/application/topics/queries/get-topic.query';
import { ITopic } from 'src/domain/interfaces/topic.interface';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';

@QueryHandler(GetTopicQuery)
export class GetTopicHandler implements IQueryHandler<GetTopicQuery> {
  constructor(private readonly topicRepository: TopicRepository) {}

  async execute(query: GetTopicQuery): Promise<ITopic | null> {
    return this.topicRepository.getById(query.topicId);
  }
}
