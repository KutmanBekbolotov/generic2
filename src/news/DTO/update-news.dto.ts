import { IsString, IsOptional, IsUrl, MaxLength, IsNotEmpty } from 'class-validator';

export class UpdateNewsDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  title?: string; 

  @IsString()
  description: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}