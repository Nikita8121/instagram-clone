import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MediaSchema, Media } from 'src/shared/models/media.model';

export type CommentDocument = Comment & Document;
export type PostDocument = Post & Document;

@Schema({ timestamps: true, _id: false })
export class Comment {
  @Prop({ required: false })
  userId: string;
  @Prop({ required: false })
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  userId: string;
  @Prop({ required: true })
  description: string;
  @Prop({ type: [MediaSchema], required: true })
  content: Media[];
  @Prop({ type: [CommentSchema], required: false, default: [] })
  comments?: Types.Array<Comment>;
}

export const PostSchema = SchemaFactory.createForClass(Post);
