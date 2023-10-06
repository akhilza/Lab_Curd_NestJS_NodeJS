import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lab } from './schema/lab';
import { Model } from 'mongoose';

@Injectable()
export class LabService {
  constructor(
    @InjectModel(Lab.name)
    private lab: Model<Lab>,
  ) {}

  async createLab(data: any) {
    return await new this.lab(data).save();
  }

  async getLabByUsername(username: string): Promise<Lab> {
    const existingLab = await this.lab.findOne({ username }).exec();
    if (!existingLab) {
      throw new NotFoundException(`Lab By Username #${existingLab} not found`);
    }
    return existingLab;
  }


  
}
