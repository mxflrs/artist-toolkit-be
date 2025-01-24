import { UserDto } from 'src/presentation/dtos/user.dto';

export class CreateUserCommand {
  constructor(public readonly user: UserDto) {}
}
