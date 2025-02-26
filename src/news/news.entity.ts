import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })  
  title_ru: string;

  @Column({ nullable: true })  
  title_ky: string;

  @Column({ nullable: true })  
  text_ru: string;

  @Column({ nullable: true })  
  text_ky: string;

  @Column({ nullable: true })  
  url_youtube_ru: string;

  @Column({ nullable: true })  
  url_youtube_kg: string;

  @Column({ nullable: true })  
  published_date: string;

  @Column('simple-array', { nullable: true })  
  tags: string[];

  @Column({ nullable: true })  
  imageUrl: string;

  @Column('json', { nullable: true })  
  images: { id: number; image: string }[];

  @Column({ nullable: true })  
  viewed: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
