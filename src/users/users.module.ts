import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserrsService } from './userrs.service';

@Module({
  controllers: [UsersController],
  providers: [UserrsService]
})
export class UsersModule {}
