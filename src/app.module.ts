import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateMaterialHandler } from 'src/application/materials/handlers/create-material.handler';
import { DeleteMaterialHandler } from 'src/application/materials/handlers/delete-material.hanndler';
import { GetAllMaterialsHandler } from 'src/application/materials/handlers/get-all-materials.handler';
import { GetMaterialHandler } from 'src/application/materials/handlers/get-material-by-id.handler';
import { UpdateMaterialHandler } from 'src/application/materials/handlers/update-material.handler';
import { CreateSpaceHandler } from 'src/application/spaces/handlers/create-space.handler';
import { DeleteSpaceHandler } from 'src/application/spaces/handlers/delete-space.handler';
import { GetAllSpacesHandler } from 'src/application/spaces/handlers/get-all-spaces.handler';
import { GetSpaceByIdHandler } from 'src/application/spaces/handlers/get-space-by-id.handler';
import { UpdateSpaceHandler } from 'src/application/spaces/handlers/update-space.handler';
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
import { MaterialRepository } from 'src/infrastructure/repositories/material.repository';
import { SpaceRepository } from 'src/infrastructure/repositories/space.repository';
import { SubtopicRepository } from 'src/infrastructure/repositories/substopic.repository';
import { TopicRepository } from 'src/infrastructure/repositories/topic.repository';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { MatericalController } from 'src/presentation/controllers/material.controller';
import { SpaceController } from 'src/presentation/controllers/space.controller';
import { SubtopicController } from 'src/presentation/controllers/substopic.controller';
import { TopicController } from 'src/presentation/controllers/topic.controller';
import { UserController } from 'src/presentation/controllers/user.controller';

@Module({
  imports: [CqrsModule],
  controllers: [
    UserController,
    TopicController,
    SubtopicController,
    SpaceController,
    MatericalController,
  ],
  providers: [
    // REPOSITORIES
    UserRepository,
    TopicRepository,
    SubtopicRepository,
    SpaceRepository,
    MaterialRepository,

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

    CreateSpaceHandler,
    GetAllSpacesHandler,
    UpdateSpaceHandler,
    GetSpaceByIdHandler,
    DeleteSpaceHandler,

    CreateMaterialHandler,
    UpdateMaterialHandler,
    DeleteMaterialHandler,
    GetAllMaterialsHandler,
    GetMaterialHandler,
  ],
})
export class AppModule {}
