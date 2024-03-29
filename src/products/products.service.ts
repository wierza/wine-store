import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(private prismaService: PrismaService) {}
    
    public getAll(): Promise<Product[]> {
      return this.prismaService.product.findMany();
    }
    
    public getById(id: Product['id']): Promise<Product | null> {
      return this.prismaService.product.findUnique({
        where: { id },
      });
    }

    public create(productData: CreateProductDTO): Promise<Product> {
        const transformedProduct = {
          ...productData,
          price: productData.price.toString(),
          alcohol: productData.alcohol.toString(),
        };
        return this.prismaService.product.create({
          data: transformedProduct,
        });
      }
}
