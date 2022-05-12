import { Body, Controller, Delete, Get, Param, Post, Req } from "@nestjs/common";
import { UserService } from "./users.service";
import * as cuid from 'cuid';

type UserInput = {
    Id?: string;
    Email: string;
    Password: string;
}

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }

    @Post('createMany')
    async createMany() {
        return this.userService.createMany();
    }

    @Post()
    async create(@Body() userInput) {
        const { email: Email, password: Password } = userInput;
        return this.userService.create({
            Email, Password, Id: cuid()
        });
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Delete('remove/:id')
    async remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }

}