import { TopicDto } from 'src/presentation/dtos/topic.dto';

export class CreateTopicCommand {
  constructor(public readonly topic: TopicDto) {}
}
