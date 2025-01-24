import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateSpaceCommand } from "src/application/spaces/commands/create-space.command";
import { ISpace } from "src/domain/interfaces/space.interface";
import { SpaceRepository } from "src/infrastructure/repositories/space.repository";

@CommandHandler(CreateSpaceCommand)
export class CreateSpaceHandler implements ICommandHandler<CreateSpaceCommand> {
    constructor(private readonly repository: SpaceRepository){}

    async execute(command: CreateSpaceCommand): Promise<ISpace | null> {
        return await this.repository.save(command.space);
    }
}