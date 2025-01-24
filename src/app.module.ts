import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateSubtopicHandler } from 'src/application/subtopics/handlers/create-subtopic.handler';
import { DeleteSubtopicHandler } from 'src/application/subtopics/handlers/delete-subtopic.handler';
import { GetAllSubtopicsHandler } from 'src/application/subtopics/handlers/get-all-subtopics.handler';
import { GetSubtopicByIdHandler } from 'src/application/subtopics/handlers/get-subtopic-by-id.handler';
import { UpdateSubtopicHandler } from 'src/application/subtopics/handlers/update-subtopic.handler';
import { CreateTopicHandler } from 'src/application/topics/handlers/create-topic.handler';
import { DeleteTopicHandler } from 'src/application/topics/handlers/delete-topic.handler';
import { GetAllTopicsHandler } from 'src/application/topics/handlers/get-all-topics.handler';
import { GetTopicHandler } from 'src/application/topics/handlers/get-topic.handler';
import { UpdateTopicHandler } from 'src/application/topics/handlers/update-topic.handler';
import { CreateUserHandler } from 'src/application/user/handlers/create-user.handler';
import { DeleteUserHandler } from 'src/application/user/handlers/delete-user.handler';
import { GetUserHandler } from 'src/application/user/handlers/get-query.handler';
import { ListUsersHandler } from 'src/application/user/handlers/list-users.handler';
import { UpdateUserHandler } from 'src/application/user/handlers/update-user.handler';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { SubtopicController } from 'src/presentation/controllers/substopic.controller';
import { TopicController } from 'src/presentation/controllers/topic.controller';
import { UserController } from 'src/presentation/controllers/user.controller';

@Module({
  imports: [CqrsModule],
  controllers: [UserController, TopicController, SubtopicController],
  providers: [
    // REPOSITORIES
    UserRepository,
    TopicRepository,
    SubtopicRepository,

    // HANDLERS
    GetUserHandler,
    ListUsersHandler,
    CreateUserHandler,
    UpdateUserHandler,
    DeleteUserHandler,

    GetTopicHandler,
    GetAllTopicsHandler,
    CreateTopicHandler,
    UpdateTopicHandler,
    DeleteTopicHandler,

    CreateSubtopicHandler,
    GetAllSubtopicsHandler,
    UpdateSubtopicHandler,
    GetSubtopicByIdHandler,
    DeleteSubtopicHandler,
  ],
})
export class AppModule {}
