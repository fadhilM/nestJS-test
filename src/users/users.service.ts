import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { User } from "./entities/user.entity";
import * as cuid from 'cuid';

type UserInput = {
    Id: string;
    Email: string;
    Password: string;
}

@Injectable({})
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private sequelize: Sequelize
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }

    async createMany() {
        try {
            await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t };

                await this.userModel.create(
                    { Id: cuid(), Email: 'Abraham', Password: 'Lincoln' },
                    transactionHost,
                );
                await this.userModel.create(
                    { Id: cuid(), Email: 'John', Password: 'Boothe' },
                    transactionHost,
                );
            });
        } catch (err) {
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
            console.log(err);
        }
    }

    async create(user: UserInput): Promise<User> {
        return this.userModel.create(user);
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}