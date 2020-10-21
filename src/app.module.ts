import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PaymentsModule } from './payments/payments.module';
import { BalancesModule } from './balances/balances.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, GroupsModule, ExpensesModule, PaymentsModule, BalancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
