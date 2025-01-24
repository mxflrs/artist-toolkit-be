import { UserDto } from 'src/presentation/dtos/user.dto';

export class UpdateUserCommand {
  constructor(public readonly user: UserDto) {}
}
