import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get() // GET /cats で findAll が動作
  findAll(): string {
    return 'All cats';
  }

  @Post() // POST /cats で create が動作
  create(): string {
    return 'New cat';
  }

  @Get('mine') // GET /cats/mine で myCat が動作
  myCat(): string {
    return 'My cat';
  }

  @Get(':id') // GET /cats/:id で cat が動作
  cat(@Param() params): string {
    return `cat ${params.id}`;
  }
}