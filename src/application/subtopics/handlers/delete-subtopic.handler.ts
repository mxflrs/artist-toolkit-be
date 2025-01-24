import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteSubtopicCommand } from 'src/application/subtopics/commands/delete-subtopic.command';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';

@CommandHandler(DeleteSubtopicCommand)
export class DeleteSubtopicHandler
  implements ICommandHandler<DeleteSubtopicCommand>
{
  constructor(private readonly subtopicRepository: SubtopicRepository) {}

  async execute(command: DeleteSubtopicCommand): Promise<number | null> {
    return this.subtopicRepository.delete(command.subtopicId);
  }
}
