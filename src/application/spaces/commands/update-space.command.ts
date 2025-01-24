import { SpaceDto } from 'src/presentation/dtos/space.dto';

export class UpdateSpaceCommand {
  constructor(public readonly space: SpaceDto) {}
}
