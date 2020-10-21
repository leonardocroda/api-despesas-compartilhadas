import { Balance } from 'src/balances/balances.entity';
import { Expense } from 'src/expenses/expenses.entity';
import { Group } from 'src/groups/groups.entity';
import { Payment } from 'src/payments/payments.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(
    type => Group,
    group => group.users,
  )
  groups: Group[];

  @OneToMany(
    () => Expense,
    expense => expense.user,
  )
  expenses: Expense[];

  @OneToMany(
    () => Payment,
    payment => payment.user,
  )
  payments: Payment[];

  @OneToMany(
    type => Balance,
    balance => balance.user,
  )
  balances: Balance[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
