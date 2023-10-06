import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Lab extends Document {

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop([String])
  image:string[]

  @Prop()
  address:string

  
}
export const LabSchema =
  SchemaFactory.createForClass(Lab);
