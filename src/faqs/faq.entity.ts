import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('faqs')
export class FAQ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  question_ru?: string;

  @Column({ type: 'text', nullable: true })
  question_kg?: string;

  @Column({ type: 'text', nullable: true })
  answer_ru?: string;

  @Column({ type: 'text', nullable: true })
  answer_kg?: string;
}
