import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateSubtopicCommand } from 'src/application/subtopics/commands/update-subtopic.command';
import { ISubtopic } from 'src/domain/interfaces/subtopic.interface';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';

@CommandHandler(UpdateSubtopicCommand)
export class UpdateSubtopicHandler
  implements ICommandHandler<UpdateSubtopicCommand>
{
  constructor(private readonly subtopicRepository: SubtopicRepository) {}

  async execute(command: UpdateSubtopicCommand): Promise<ISubtopic | null> {
    const subtopicData = command.subtopic;
    return await this.subtopicRepository.update(subtopicData);
  }
}
