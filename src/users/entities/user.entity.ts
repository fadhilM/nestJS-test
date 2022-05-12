import { 
    Table,
     Column, 
     Model, 
     DataType, 
     UpdatedAt, 
     CreatedAt 
} from "sequelize-typescript";

@Table({ tableName: "User" })
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
    })
    Id: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true,
    })
    Email: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    Password: string;

    @UpdatedAt
	private UpdatedAt: Date;

    @CreatedAt
    private CreatedAt: Date;
}