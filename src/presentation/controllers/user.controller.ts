import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/application/user/commands/create-user.command';
import { DeleteUserCommand } from 'src/application/user/commands/delete-user.command';
import { UpdateUserCommand } from 'src/application/user/commands/update-user.command';
import { GetUserQuery } from 'src/application/user/queries/get-user.query';
import { ListUsersQuery } from 'src/application/user/queries/list-users.query';
import { UserDto } from 'src/presentation/dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async saveUser(@Body() user: UserDto) {
    return await this.commandBus.execute(new CreateUserCommand(user));
  }

  @Put()
  async updateUser(@Body() user: UserDto) {
    return await this.commandBus.execute(new UpdateUserCommand(user));
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.commandBus.execute(new DeleteUserCommand(id));
  }

  @Get()
  async getUser(@Query('name') name: string) {
    return await this.queryBus.execute(new GetUserQuery(name));
  }

  @Get('all')
  async getAllUsers() {
    return await this.queryBus.execute(new ListUsersQuery());
  }
}
