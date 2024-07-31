import { Product } from "src/products/entities/product.entity";
import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { orderStatus } from "../enum/orderStatus.enum";

@Entity()
export class Order {

    @PrimaryGeneratedColumn('uuid')
    orderId: string;

    @ManyToOne(() => Users, (user) => user.username) // Relación con la tabla de usuarios
    @JoinColumn({ name: 'buyerName' })
    buyerId: Users;

    @ManyToOne(() => Product, (product) => product.sellerName)
    @JoinColumn({ name: 'sellerName' })
    sellerName: Product;

    @ManyToOne(() => Product, (product) => product.price)
    @JoinColumn({ name: 'totalPrice' })
    totalPrice: Product;

    @Column({
        type: 'enum',
        enum: orderStatus,
        default: orderStatus.cart, 
    })
    orderStatus: orderStatus;

    orderItems


}
