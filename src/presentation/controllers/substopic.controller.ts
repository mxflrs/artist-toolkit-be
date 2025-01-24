import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSubtopicCommand } from 'src/application/subtopics/commands/create-subtopic.command';
import { DeleteSubtopicCommand } from 'src/application/subtopics/commands/delete-subtopic.command';
import { UpdateSubtopicCommand } from 'src/application/subtopics/commands/update-subtopic.command';
import { GetAllSubtopicsQuery } from 'src/application/subtopics/queries/get-all-subtopics.query';
import { GetSubtopicByIdQuery } from 'src/application/subtopics/queries/get-subtopic-by-id.query';
import { SubtopicDto } from 'src/presentation/dtos/subtopic.dto';

@Controller('subtopic')
export class SubtopicController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async save(@Body() subtopic: SubtopicDto) {
    return await this.commandBus.execute(new CreateSubtopicCommand(subtopic));
  }

  @Put()
  async update(@Body() subtopic: SubtopicDto) {
    return await this.commandBus.execute(new UpdateSubtopicCommand(subtopic));
  }

  @Get()
  async getAllSubtopics() {
    return await this.queryBus.execute(new GetAllSubtopicsQuery());
  }

  @Get(':id')
  async GetSubtopicById(@Param('id') subtopicId: number) {
    return await this.queryBus.execute(new GetSubtopicByIdQuery(subtopicId));
  }

  @Delete(':id')
  async DeleteSubtopic(@Param('id') subtopicId: number) {
    return await this.commandBus.execute(new DeleteSubtopicCommand(subtopicId));
  }
}
