import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { lowercase } from './ValueTransformers';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Index({ unique: true })
  @Column({
    unique: true,
    nullable: false,
    transformer: [lowercase],
  })
  email: string;

  @Column({
    select: false,
    nullable: false,
  })
  password: string;

  @Column({
    select: false,
    nullable: false,
  })
  salt: String;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
