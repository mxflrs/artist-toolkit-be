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
import { CreateTopicCommand } from 'src/application/topics/commands/create-topic.command';
import { DeleteTopicCommand } from 'src/application/topics/commands/delete-topic.command';
import { UpdateTopicCommand } from 'src/application/topics/commands/update-topic.command';
import { GetAllTopicsQuery } from 'src/application/topics/queries/get-all-topics.query';
import { GetTopicQuery } from 'src/application/topics/queries/get-topic.query';
import { TopicDto } from 'src/presentation/dtos/topic.dto';

@Controller('topic')
export class TopicController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getAllTopics() {
    return await this.queryBus.execute(new GetAllTopicsQuery());
  }

  @Get(':id')
  async getTopicById(@Param('id') topicId: number) {
    return await this.queryBus.execute(new GetTopicQuery(topicId));
  }

  @Post()
  async save(@Body() topic: TopicDto) {
    return await this.commandBus.execute(new CreateTopicCommand(topic));
  }

  @Put()
  async updateTopic(@Body() topic: TopicDto) {
    return await this.commandBus.execute(new UpdateTopicCommand(topic));
  }

  @Delete(':id')
  async deleteTopic(@Param('id') topicId: string) {
    return await this.commandBus.execute(new DeleteTopicCommand(topicId));
  }
}
