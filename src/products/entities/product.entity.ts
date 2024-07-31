import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { categories } from "../enums/categories.enum";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Users, (user) => user.username) // Relación con la tabla de usuarios
    @JoinColumn({ name: 'sellerName' })
    sellerName: Users;

    @Column('text')
    category: string;

    @Column({
        type: 'enum',
        enum: categories,
        default: categories.others, 
    })
    categories: categories;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column({
        type: 'numeric',
        default: 0,
    })
    price: number;

    @Column('numeric')
    stock: number;

    @Column('text')
    image: string[];

    @Column('text')
    creationDate: string;
}
