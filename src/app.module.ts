import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './news/news.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [News],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,  
      },
    }),
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
