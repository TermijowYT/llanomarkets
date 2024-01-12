import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class transactions {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
