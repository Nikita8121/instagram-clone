import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LikeDocument = Like & Document;
export type ReplyDocument = Reply & Document;
export type CommentDocument = Comment & Document;

@Schema({ timestamps: false, _id: false })
export class Like {
  @Prop({ required: true, ref: 'Account' })
  account: Types.ObjectId;
}

export const LikeSchema = SchemaFactory.createForClass(Like);

@Schema({ timestamps: true, _id: true })
export class Reply {
  @Prop({ required: true, ref: 'Account' })
  to: Types.ObjectId;
  @Prop({ required: true, ref: 'Account' })
  from: Types.ObjectId;
  @Prop({ required: true })
  text: string;
  @Prop({
    type: [LikeSchema],
    required: false,
    default: [],
    ref: 'Account',
  })
  likes?: Like[];
}

export const ReplySchema = SchemaFactory.createForClass(Reply);

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true, ref: 'Post' })
  post: Types.ObjectId;
  @Prop({ required: true, ref: 'Account' })
  account: Types.ObjectId;
  @Prop({ required: true })
  text: string;
  @Prop({
    type: [LikeSchema],
    required: false,
    default: [],
  })
  likes?: Like[];
  @Prop({
    type: [ReplySchema],
    required: false,
    default: [],
    ref: 'Account',
  })
  replies?: Reply[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
