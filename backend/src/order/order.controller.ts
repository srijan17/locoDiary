import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';
import { Order, OrderStatus } from './interface/order.interface';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService) {}

    @Get()
    findAll(): Order[] {
        return this.orderService.findAll();
    }

    @Post()
    post(@Body() orderInfo: OrderDTO ): OrderDTO {
        console.log(orderInfo);
        return this.orderService.create(orderInfo);;
    }

    @Post('confirm')
    confirmOrder(@Param() id: string ): OrderDTO {
        console.log(id);
        return this.orderService.update({id , status:OrderStatus.CONFIRMED});;
    }
}
