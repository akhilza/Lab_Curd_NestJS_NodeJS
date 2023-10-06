import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LabModule } from './lab/lab.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/Lab"),
    LabModule
  ],
  controllers: [AppController],  
  providers: [AppService],
})
export class AppModule {}
