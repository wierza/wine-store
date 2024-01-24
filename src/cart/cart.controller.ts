import { Controller, Get, UseGuards, Request, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartItemDto } from './dtos/create-cart-item.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {}

    @Get('/')
    //@UseGuards(JwtAuthGuard)
    getCartByUser(@Request() req) {
    const userId = req.user.id;
        return this.cartService.getCartByUser(userId);
    }

    @Post('/')
    //@UseGuards(JwtAuthGuard)
    async createCartItem(
      @Request() req,
      @Body() createCartItemDto: CreateCartItemDto,
    ) {
      const userId = req.user.id;
      return this.cartService.createCartItem(userId, createCartItemDto);
    }

    @Put('/:cartItemId')
    //@UseGuards(JwtAuthGuard)
    async updateCartItem(
      @Param('cartItemId') cartItemId: string,
      @Body() updateData: CreateCartItemDto,
    ) {
      return this.cartService.updateCartItem(cartItemId, updateData);
    }

    @Delete('/:cartItemId')
    //@UseGuards(JwtAuthGuard)
    async deleteCartItem(@Param('cartItemId') cartItemId: string) {
      return this.cartService.deleteCartItem(cartItemId);
    }
}
