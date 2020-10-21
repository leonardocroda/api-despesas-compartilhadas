import { Group } from 'src/groups/groups.entity';
import { Payment } from 'src/payments/payments.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  name: string;

  @ManyToOne(
    () => User,
    user => user.expenses,
  )
  user: User;

  @ManyToOne(
    () => Group,
    group => group.expenses,
  )
  group: Group;

  @OneToMany(
    () => Payment,
    payment => payment.expense,
  )
  payments: Payment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
