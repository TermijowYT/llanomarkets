import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class reviews {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
}
