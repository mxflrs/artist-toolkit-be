import { SubtopicDto } from 'src/presentation/dtos/subtopic.dto';

export class UpdateSubtopicCommand {
  constructor(public readonly subtopic: SubtopicDto) {}
}
