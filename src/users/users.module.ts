import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { User } from './entities/user.entity';

@Module({
    imports:[SequelizeModule.forFeature([User])],
    exports:[SequelizeModule],
    controllers:[UsersController],
    providers:[UserService]
})
export class UsersModule {}
