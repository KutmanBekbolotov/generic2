import { IsString, IsOptional, IsUrl, MaxLength, isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty() 
  description: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}