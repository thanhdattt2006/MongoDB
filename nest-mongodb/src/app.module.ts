import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

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
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
