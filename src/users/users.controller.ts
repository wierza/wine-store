import { Controller, Get, Param, ParseUUIDPipe, NotFoundException, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/')
    getAll(): any {
      return this.usersService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
      if (!(await this.usersService.getById(id))) {
        throw new NotFoundException('User not found');
      }
      return this.usersService.getById(id);
    }

    @Delete('/:id')
    @UseGuards(AdminAuthGuard)
    @UseGuards(JwtAuthGuard)
    public async delete(@Param('id', new ParseUUIDPipe()) id: string) {
      if (!(await this.usersService.getById(id)))
        throw new NotFoundException('User not found');
      await this.usersService.deleteById(id);
      return { success: true };
    }
}
