import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FAQ } from './faq.entity';
import { CreateFaqDto } from './DTO/create-faq.dto';
import { UpdateFaqDto } from './DTO/update-faq.dto';

@Injectable()
export class FAQsService {
  constructor(
    @InjectRepository(FAQ)
    private faqsRepository: Repository<FAQ>,
  ) {}

  async create(data: CreateFaqDto) {
    const faq = this.faqsRepository.create(data);
    return await this.faqsRepository.save(faq);
  }

  async findAll() {
    return await this.faqsRepository.find();
  }

  async findOne(id: number) {
    return await this.faqsRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateFaqDto) {
    const faq = await this.findOne(id);
    if (!faq) return null;
    
    await this.faqsRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const faq = await this.findOne(id);
    if (!faq) return null;
    
    await this.faqsRepository.delete(id);
    return faq;
  }
}
