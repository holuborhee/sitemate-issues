import { Module } from '@nestjs/common';
import { IssuesModule } from './issues/issues.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from './issues/entities/issue.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Issue],
      synchronize: true,
    }), 
    IssuesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
