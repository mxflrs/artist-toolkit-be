import { SpaceDto } from 'src/presentation/dtos/space.dto';

export class CreateSpaceCommand {
  constructor(public readonly space: SpaceDto) {}
}
