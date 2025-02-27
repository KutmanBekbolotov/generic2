import { IsOptional, IsString } from 'class-validator';

export class CreateFaqDto {
  @IsOptional()
  @IsString()
  question_ru?: string;

  @IsOptional()
  @IsString()
  question_kg?: string;

  @IsOptional()
  @IsString()
  answer_ru?: string;

  @IsOptional()
  @IsString()
  answer_kg?: string;
}
