import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTopicCommand } from 'src/application/topics/commands/delete-topic.command';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';

@CommandHandler(DeleteTopicCommand)
export class DeleteTopicHandler implements ICommandHandler<DeleteTopicCommand> {
  constructor(private topicRepository: TopicRepository) {}

  async execute(command: DeleteTopicCommand): Promise<string | null> {
    return await this.topicRepository.delete(command.topicId);
  }
}
