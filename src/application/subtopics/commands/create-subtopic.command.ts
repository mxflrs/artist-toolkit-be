import { SubtopicDto } from 'src/presentation/dtos/subtopic.dto';

export class CreateSubtopicCommand {
  constructor(public readonly subtopic: SubtopicDto) {}
}
