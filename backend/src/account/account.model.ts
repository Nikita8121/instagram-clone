import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FollowDocument = Follow & Document;
export type LinkDocument = Link & Document;
export type AccountDocument = Account & Document;

@Schema({ _id: false })
export class Follow {
  @Prop({ type: Boolean, required: false, default: false })
  isFollowBack: string;
  @Prop({ type: Types.ObjectId, ref: 'Account', required: true })
  account: Types.ObjectId;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);

@Schema({ _id: false })
export class Link {
  @Prop({ required: false })
  name: string;
  @Prop({ required: true })
  url: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: '', type: String })
  avatar?: string;

  @Prop()
  description?: string;

  @Prop({ type: [LinkSchema], default: [] })
  links?: Link[];

  @Prop({ type: [FollowSchema], default: [] })
  following?: Follow[];

  @Prop({ type: [FollowSchema], default: [] })
  followers?: Follow[];

  @Prop({ type: [String], default: [] })
  posts?: string[];

  @Prop({ type: [String], default: [] })
  stories?: string[];

  @Prop({ type: [String], default: [] })
  reels?: string[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);
