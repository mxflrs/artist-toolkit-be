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
import { CreateMaterialCommand } from 'src/application/materials/commands/create-material.command';
import { DeleteMaterialCommand } from 'src/application/materials/commands/delete-material.command';
import { UpdateMaterialCommand } from 'src/application/materials/commands/update-material.command';
import { GetAllMaterialsQuery } from 'src/application/materials/queries/get-all-materials.query';
import { GetMaterialByIdQuery } from 'src/application/materials/queries/get-material-by-id.query';
import { MaterialDto } from 'src/presentation/dtos/material.dto';

@Controller('material')
export class MatericalController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async save(@Body() material: MaterialDto) {
    return await this.commandBus.execute(new CreateMaterialCommand(material));
  }

  @Put()
  async update(@Body() material: MaterialDto) {
    return await this.commandBus.execute(new UpdateMaterialCommand(material));
  }

  @Get()
  async getAllMaterials() {
    return await this.queryBus.execute(new GetAllMaterialsQuery());
  }

  @Get(':id')
  async GetSpaceById(@Param('id') materialId: number) {
    return await this.queryBus.execute(new GetMaterialByIdQuery(materialId));
  }

  @Delete(':id')
  async DeleteSpace(@Param('id') subtopicId: number) {
    return await this.commandBus.execute(new DeleteMaterialCommand(subtopicId));
  }
}
