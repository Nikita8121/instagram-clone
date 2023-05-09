import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LinkDocument = Link & Document;
/* export type AccountDocument = Account & Document;
 */
@Schema()
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

  @Prop()
  avatar?: string;

  @Prop()
  description?: string;

  @Prop({ type: [LinkSchema], default: [] })
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
