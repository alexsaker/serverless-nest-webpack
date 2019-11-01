import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMain(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello/:name')
  getHelloWithName(@Param() params): string {
    const { name } = params;
    return this.appService.getHello(name);
  }
}
