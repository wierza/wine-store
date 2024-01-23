import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [PrismaModule]
})
export class CartModule {}
