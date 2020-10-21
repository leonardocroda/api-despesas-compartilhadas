import { Balance } from 'src/balances/balances.entity';
import { Expense } from 'src/expenses/expenses.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => User,
    user => user.groups,
  )
  @JoinTable()
  users: User[];

  @OneToMany(
    () => Expense,
    expense => expense.group,
  )
  expenses: Expense[];

  @OneToMany(
    type => Balance,
    balance => balance.group,
  )
  balances: Balance[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
