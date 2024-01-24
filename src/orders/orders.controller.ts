import { Controller, Get, Req, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

interface AuthenticatedRequest extends Request {
    user: any;
  }

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('/')
    //@UseGuards(JwtAuthGuard)
    getAllByUserId(@Req() req: AuthenticatedRequest) {
    const userId = req.user.id;
    return this.ordersService.getAllByUserId(userId);
    }

    @Get('/:id')
    //@UseGuards(JwtAuthGuard)
    getById(@Param('id') id: string) {
      return this.ordersService.getById(id);
    }
}
