import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Order, OrderItem } from '@prisma/client';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) {}

    async getAllByUserId(userId: string): Promise<Order[]> {
        return this.prismaService.order.findMany({
          where: {
            userId: userId,
          },
          include: {
            orderItems: true,
          },
        });
    }

    async getById(id: string): Promise<Order | null> {
        return this.prismaService.order.findUnique({
          where: { id },
          include: {
            orderItems: true
          }
        });
    }
}
