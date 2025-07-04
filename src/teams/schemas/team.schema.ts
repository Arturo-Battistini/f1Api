import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema({ timestamps: true })
export class Team {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  nationality: string;

  @Prop()
  teamPrincipal: string;

  @Prop()
  engine: string;

  @Prop()
  headquarters: string;

  @Prop()
  foundedYear: number;

  @Prop({ default: 0 })
  constructorsChampionships: number;

  @Prop({ default: 0 })
  driversChampionships: number;

  @Prop({ default: 0 })
  raceWins: number;

  @Prop({ default: 0 })
  polePositions: number;

  @Prop({ default: 0 })
  fastestLaps: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  logoUrl?: string;

  @Prop()
  carImageUrl?: string;

  @Prop()
  primaryColor?: string;

  @Prop()
  secondaryColor?: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
