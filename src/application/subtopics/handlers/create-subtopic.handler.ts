import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateSubtopicCommand } from 'src/application/subtopics/commands/create-subtopic.command';
import { ISubtopic } from 'src/domain/interfaces/subtopic.interface';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';

@CommandHandler(CreateSubtopicCommand)
export class CreateSubtopicHandler
  implements ICommandHandler<CreateSubtopicCommand>
{
  constructor(private readonly subtopicRepository: SubtopicRepository) {}

  async execute(command: CreateSubtopicCommand): Promise<ISubtopic | null> {
    return this.subtopicRepository.save(command.subtopic);
  }
}
