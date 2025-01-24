import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTopicCommand } from 'src/application/topics/commands/update-topic.command';
import { ITopic } from 'src/domain/interfaces/topic.interface';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';

@CommandHandler(UpdateTopicCommand)
export class UpdateTopicHandler implements ICommandHandler<UpdateTopicCommand> {
  constructor(private readonly topicRepository: TopicRepository) {}

  async execute(command: UpdateTopicCommand): Promise<ITopic | null> {
    const topicData = command.topic;
    return await this.topicRepository.update(topicData);
  }
}
