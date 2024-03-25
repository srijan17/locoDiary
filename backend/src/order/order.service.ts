import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from './interface/order.interface';
import { OrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {
    
    private readonly orders: Order[] = [];
    create(orderDTO: OrderDTO): Order {
        const order:Order = {...orderDTO, status: OrderStatus.PENDING , id: Math.floor(Math.random()*1000).toString()}; // this is a hack, we should use a proper id generator
        console.log("saving",order);
        this.orders.push(order);
        return order;
    }
    
    findAll(): Order[] {
        console.log("fetching all ");
        return this.orders;
    }
    update(orderInfo: Partial<Order>): Order {
        const orderIndex = this.orders.findIndex(order => order.id === orderInfo.id)
        this.orders[orderIndex] = {...this.orders[orderIndex], ...orderInfo};
        console.log("updating",this.orders[orderIndex] , orderInfo.id);
        return this.orders[orderIndex];
    }
}
