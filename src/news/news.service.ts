import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { CreateNewsDto } from './DTO/create-news.dto';
import { UpdateNewsDto } from './DTO/update-news.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const news = this.newsRepository.create({
      ...createNewsDto,
      createdAt: new Date(),
    });

    try {
      return await this.newsRepository.save(news);
    } catch (error) {
      throw new HttpException('Failed to create news', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    const news = await this.newsRepository.findOne({ where: { id } });
    
    if (!news) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }

    return this.newsRepository.save({
      ...news,
      ...updateNewsDto,
      updatedAt: new Date(),
    });
  }

  async remove(id: number): Promise<void> {
    const result = await this.newsRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
  }

  async findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async findOne(id: number): Promise<News> {
    const news = await this.newsRepository.findOne({ where: { id } });
    if (!news) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
    return news;
  }
}
