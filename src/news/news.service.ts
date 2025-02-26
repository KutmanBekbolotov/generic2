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
    console.log('Creating news with data:', createNewsDto); 

    const news = this.newsRepository.create({
      title: createNewsDto.title || '',          
      description: createNewsDto.description || '',
      imageUrl: createNewsDto.imageUrl || '',    
      createdAt: new Date(),                    
    });

    try {
      console.log('Saving news:', news); 
      return await this.newsRepository.save(news);
    } catch (error) {
      console.error('Error during saving news:', error); 
      throw new HttpException('Failed to create news', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    console.log(`Updating news with ID: ${id}`); 

    const news = await this.newsRepository.findOne({ where: { id } });
    
    if (!news) {
      console.log('Error: News not found'); 
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }

    console.log('Updating news with data:', updateNewsDto); 
    return this.newsRepository.save({
      ...news,
      ...updateNewsDto,
      updatedAt: new Date(),
    });
  }

  async remove(id: number): Promise<void> {
    console.log(`Removing news with ID: ${id}`); 

    const result = await this.newsRepository.delete(id);
    if (result.affected === 0) {
      console.log('Error: News not found'); 
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
    console.log(`News with ID: ${id} has been deleted successfully`);
  }

  async findAll(): Promise<News[]> {
    console.log('Fetching all news'); 
    return this.newsRepository.find();
  }

  async findOne(id: number): Promise<News> {
    console.log(`Fetching news with ID: ${id}`);

    const news = await this.newsRepository.findOne({ where: { id } });
    if (!news) {
      console.log('Error: News not found'); 
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
    return news;
  }
}
