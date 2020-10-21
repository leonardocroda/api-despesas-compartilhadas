import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsController {
  constructor(private readonly expensesService: PaymentsService) {}

  @Get('payments')
  getHello(): string {
    return this.expensesService.getHello();
  }
}
