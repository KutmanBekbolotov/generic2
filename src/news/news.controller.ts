import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './DTO/create-news.dto';
import { UpdateNewsDto } from './DTO/update-news.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Body() createNewsDto: CreateNewsDto) {
    try {
      const createdNews = await this.newsService.create(createNewsDto);
      return createdNews;
    } catch (error) {
      throw new HttpException('Failed to create news', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    try {
      return await this.newsService.update(id, updateNewsDto);
    } catch (error) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.newsService.remove(id);
      return { message: 'News successfully deleted' };
    } catch (error) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
  }

  @Get()
  async findAll() {
    return await this.newsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.newsService.findOne(id);
    } catch (error) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
  }
}
