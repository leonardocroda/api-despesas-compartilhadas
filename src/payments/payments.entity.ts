import { Expense } from 'src/expenses/expenses.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Expense,
    expense => expense.payments,
  )
  expense: Expense;

  @ManyToOne(
    () => User,
    user => user.payments,
  )
  user: User;

  @Column()
  amountDue: number;

  @Column()
  amountPaid: number;

  @Column()
  isSettled: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
