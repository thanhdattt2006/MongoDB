import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],//thay the doan contrucors de import service
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('connection_string'),
      }),
    }),
    CategoryModule,
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
