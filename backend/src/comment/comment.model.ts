import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MediaSchema, Media } from 'src/shared/models/media.model';

export type CommentDocument = Comment & Document;
export type LikeDocument = Like & Document;
export type PostDocument = Post & Document;

@Schema({ timestamps: true, _id: false })
export class Comment {
  @Prop({ required: true, ref: 'Account' })
  account: Types.ObjectId;
  @Prop({ required: true })
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

@Schema({ timestamps: true, _id: false })
export class Like {
  @Prop({ required: true, ref: 'Account' })
  account: Types.ObjectId;
}

export const LikeSchema = SchemaFactory.createForClass(Like);

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, ref: 'Account', type: Types.ObjectId })
  account: Types.ObjectId;
  @Prop({ required: true })
  description: string;
  @Prop({ type: [MediaSchema], required: true })
  content: Media[];
  @Prop({ type: [CommentSchema], required: false, default: [] })
  comments?: Comment;
  @Prop({
    type: [LikeSchema],
    required: false,
    default: [],
    ref: 'Account',
  })
  likes?: Like[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
