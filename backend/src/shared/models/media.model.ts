import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IMedia } from '../interfaces/media.interface';

export type MediaDocument = Media & Document;

@Schema({ _id: false })
export class Media implements IMedia {
  @Prop({ required: true })
  url: string;
  @Prop({ required: false })
  alt: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
