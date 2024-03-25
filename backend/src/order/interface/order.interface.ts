export enum OrderStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}
export class Order {
    id: string;
    name: string;
    contact: string;
    estimatedHouseSize: number;
    scheduledDate: string;
    pickupLocation: string;
    dropLocation: string;
    status:OrderStatus;
}