import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { documentType } from "../enums/documentType.enum";

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid')
    userid: string;

    @Column('text', {
        unique: true,
    })
    username: string;
    
    @Column('text', {
        unique: true,
    })
    email: string;
    
    @Column('text')
    password: string;
    
    @Column('text')
    firstName: string;
    
    @Column('text')
    lastName: string;
    
    @Column('text')
    address: string;
    
    @Column('numeric')
    phoneNumber: number;
    
    @Column('text')
    profilePicture: string;
    
    @Column('text')
    registerDate: string;
    
    @Column({
        type: 'enum',
        enum: documentType,
        default: documentType.CC, 
    })
    documentType: documentType;
    
    @Column('numeric')
    documentId: number;
    
}
