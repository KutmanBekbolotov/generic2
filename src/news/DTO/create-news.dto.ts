import { IsString, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class CreateNewsDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  title?: string;  

  @IsOptional()
  @IsString()
  description?: string;  

  @IsOptional()
  @IsUrl()
  imageUrl?: string;  
}
