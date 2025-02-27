import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { FAQsService } from './faqs.service';
import { CreateFaqDto } from './DTO/create-faq.dto';
import { UpdateFaqDto } from './DTO/update-faq.dto';

@Controller('faqs')
export class FAQsController {
  constructor(private readonly faqsService: FAQsService) {}

  @Post()
  async create(@Body() data: CreateFaqDto) {
    return await this.faqsService.create(data);
  }

  @Get()
  async findAll() {
    return await this.faqsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const faq = await this.faqsService.findOne(id);
    if (!faq) throw new NotFoundException(`FAQ с id ${id} не найден`);
    return faq;
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateFaqDto) {
    const updated = await this.faqsService.update(id, data);
    if (!updated) throw new NotFoundException(`FAQ с id ${id} не найден`);
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.faqsService.remove(id);
    if (!deleted) throw new NotFoundException(`FAQ с id ${id} не найден`);
    return deleted;
  }
}
