import { TopicDto } from 'src/presentation/dtos/topic.dto';

export class UpdateTopicCommand {
  constructor(public readonly topic: TopicDto) {}
}
