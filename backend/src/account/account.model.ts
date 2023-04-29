import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Link {
  @Prop({ required: false })
  name: string;
  @Prop({ required: true })
  url: string;
}

@Schema()
export class Account {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  description?: string;

  @Prop({ type: [String], default: [] })
  links?: Link[];

  @Prop({ type: [String], default: [] })
  following?: string[];

  @Prop({ type: [String], default: [] })
  followers?: string[];

  @Prop({ type: [String], default: [] })
  posts?: string[];

  @Prop({ type: [String], default: [] })
  stories?: string[];

  @Prop({ type: [String], default: [] })
  reels?: string[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);
