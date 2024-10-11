import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { query } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(
    @Body() user: { name: string; role: 'INTERN' | 'ADMIN' | 'ENGINEER' },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: { name?: string; role?: 'INTERN' | 'ADMIN' | 'ENGINEER' },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(
    @Param('id') id:string
  ){
    return this.usersService.delete(+id)
  }
}
