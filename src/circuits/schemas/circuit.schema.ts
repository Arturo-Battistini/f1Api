import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CircuitDocument = Circuit & Document;

@Schema({ timestamps: true })
export class Circuit {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  city: string;

  @Prop({ required: true })
  length: number; // en metros

  @Prop()
  corners: number;

  @Prop()
  recordLapTime?: string;

  @Prop()
  recordHolder?: string;

  @Prop()
  recordYear?: number;

  @Prop()
  builtYear: number;

  @Prop()
  capacity?: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  imageUrl?: string;

  @Prop()
  layoutUrl?: string;

  @Prop()
  description?: string;

  @Prop()
  firstGrandPrix?: number;

  @Prop()
  lapRecord?: string;

  @Prop()
  circuitType?: string; // permanent, street, hybrid
}

export const CircuitSchema = SchemaFactory.createForClass(Circuit);
