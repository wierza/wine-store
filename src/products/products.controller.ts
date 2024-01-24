import { Controller, Get, Param, ParseUUIDPipe, NotFoundException, Post, UseGuards, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';


@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
      if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Post('/')
  //@UseGuards(JwtAuthGuard)
  create(@Body() productData: CreateProductDTO) {
    return this.productsService.create(productData);
  }
}


