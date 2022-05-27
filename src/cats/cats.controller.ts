import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  HttpCode,
  Header,
  Redirect,
  Body,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';

import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get() // GET /cats で findAll が動作
  @Header('Foo', 'Bar') // Response Headerを設定できる
  // @HttpCode(204) // HTTP Status Codeを変更できる
  findAll(@Req() request: FastifyRequest): string {
    console.log({ request });
    return 'All cats';
  }

  @Get('redirect')
  @Redirect('/cats') //Redirectを設定できる
  redirect() {
    console.log('redirect');
    return { url: '/', statusCode: 301 }; // Redirect先を上書きできる
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log({ createCatDto });
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

  @Get('async') // async function
  async findAllAsync(): Promise<string> {
    return 'All cats(async)';
  }
}
