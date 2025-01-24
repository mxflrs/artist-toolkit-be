import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSpaceCommand } from 'src/application/spaces/commands/create-space.command';
import { DeleteSpaceCommand } from 'src/application/spaces/commands/delete-space.command';
import { UpdateSpaceCommand } from 'src/application/spaces/commands/update-space.command';
import { GetAllSpacesQuery } from 'src/application/spaces/queries/get-all-spaces.query';
import { GetSpaceByIdQuery } from 'src/application/spaces/queries/get-space-by-id.query';
import { SpaceDto } from 'src/presentation/dtos/space.dto';

@Controller('space')
export class SpaceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async save(@Body() space: SpaceDto) {
    return await this.commandBus.execute(new CreateSpaceCommand(space));
  }

  @Put()
  async update(@Body() space: SpaceDto) {
    return await this.commandBus.execute(new UpdateSpaceCommand(space));
  }

  @Get()
  async getAllSpaces() {
    return await this.queryBus.execute(new GetAllSpacesQuery());
  }

  @Get(':id')
  async GetSpaceById(@Param('id') spaceId: number) {
    return await this.queryBus.execute(new GetSpaceByIdQuery(spaceId));
  }

    @Delete(':id')
    async DeleteSpace(@Param('id') subtopicId: number) {
      return await this.commandBus.execute(new DeleteSpaceCommand(subtopicId));
    }
}
