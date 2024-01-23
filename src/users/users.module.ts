import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserrsService } from './userrs.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UserrsService],
  imports: [PrismaModule]
})
export class UsersModule {}
