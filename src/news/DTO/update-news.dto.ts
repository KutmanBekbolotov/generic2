import { IsString, IsOptional, IsUrl, MaxLength, IsArray, IsNumber } from 'class-validator';

export class UpdateNewsDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title_ru?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  title_ky?: string;

  @IsOptional()
  @IsString()
  text_ru?: string;

  @IsOptional()
  @IsString()
  text_ky?: string;

  @IsOptional()
  @IsUrl()
  url_youtube_ru?: string;

  @IsOptional()
  @IsUrl()
  url_youtube_kg?: string;

  @IsOptional()
  @IsString()
  published_date?: string;

  @IsOptional()
  @IsArray()
  images?: { id: number; image: string }[];

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsString()
  @MaxLength(255)
  imageUrl?: string;

  @IsOptional()
  @IsNumber()
  viewed?: number;
}
