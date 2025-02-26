import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })  
  title: string;

  @Column({ nullable: true })  
  description: string;

  @Column({ nullable: true })  
  content: string;

  @Column({ nullable: true })  
  imageUrl: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })  // Делаем поле с дефолтным значением
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
