import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PilotDocument = Pilot & Document;

@Schema({ timestamps: true })
export class Pilot {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true, unique: true })
  number: number;

  @Prop({ type: Types.ObjectId, ref: 'Team' })
  currentTeam: Types.ObjectId;

  @Prop({ default: 0 })
  championshipPoints: number;

  @Prop({ default: 0 })
  raceWins: number;

  @Prop({ default: 0 })
  podiums: number;

  @Prop({ default: 0 })
  polePositions: number;

  @Prop({ default: 0 })
  fastestLaps: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  imageUrl?: string;

  @Prop()
  helmetColor?: string;
}

export const PilotSchema = SchemaFactory.createForClass(Pilot);
