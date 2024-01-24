import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartItemDto } from './dtos/create-cart-item.dto';

@Injectable()
export class CartService {
    constructor(private prismaService: PrismaService) {}

    public async getCartByUser(userId: string) {
        return this.prismaService.cart.findUnique({
          where: { userId },
          include: { cartItems: true }
        });
      }
    
      public async createCartItem(userId: string, createCartItemDto: CreateCartItemDto) {
        const userCart = await this.prismaService.cart.findUnique({
          where: { userId }
        });
    
        if (!userCart) {
          throw new Error("No user cart");
        }
    
        return this.prismaService.cartItem.create({
          data: {
            cartId: userCart.id,
            productId: createCartItemDto.productId,
            quantity: createCartItemDto.quantity,
            comment: createCartItemDto.comment
          }
        });
      }
    
      public async deleteCartItem(cartItemId: string) {
        return this.prismaService.cartItem.delete({
          where: { id: cartItemId },
        });
      }
    
      public async updateCartItem(cartItemId: string, updateData: CreateCartItemDto) {
        return this.prismaService.cartItem.update({
          where: {
            id: cartItemId
          },
          data: updateData
        });
      }
}
