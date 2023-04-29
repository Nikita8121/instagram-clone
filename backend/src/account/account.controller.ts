import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() account: Account): Promise<Account> {
    return this.accountService.create(account);
  }

  @Get()
  async findAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Account> {
    return this.accountService.findById(id);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<Account> {
    return this.accountService.findByEmail(email);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.accountService.delete(id);
  }
}
