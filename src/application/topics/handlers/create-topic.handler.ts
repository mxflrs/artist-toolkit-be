import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTopicCommand } from 'src/application/topics/commands/create-topic.command';
import { ITopic } from 'src/domain/interfaces/topic.interface';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';

@CommandHandler(CreateTopicCommand)
export class CreateTopicHandler implements ICommandHandler<CreateTopicCommand> {
  constructor(private readonly topicRepository: TopicRepository) {}

  async execute(command: CreateTopicCommand): Promise<ITopic | null> {
    return this.topicRepository.save(command.topic);
  }
}
