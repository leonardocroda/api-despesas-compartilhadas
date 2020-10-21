import { Controller, Get } from '@nestjs/common';
import { ExpensesService } from './balances.service';

@Controller()
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get('balances')
  getHello(): string {
    return this.expensesService.getHello();
  }
}
