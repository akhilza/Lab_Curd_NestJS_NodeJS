import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LabSchema } from './schema/lab';
import { LabService } from './lab.service';
import { LabController } from './lab.controller';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Lab', schema: LabSchema },
    ]),
  ],
  controllers: [LabController],
  providers: [LabService],
})
export class LabModule {}
