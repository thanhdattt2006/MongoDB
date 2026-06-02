import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SinhvienModule } from './sinhvien/sinhvien.module';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('connection_string')
      })
    }),
    CategoryModule,
    SinhvienModule,
    AccountModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
