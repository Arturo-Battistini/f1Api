import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TireDocument = Tire & Document;

@Schema({ timestamps: true })
export class Tire {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  type: string; // soft, medium, hard, intermediate, wet

  @Prop()
  compound: string;

  @Prop()
  durability: number; // 1-10 scale

  @Prop()
  grip: number; // 1-10 scale

  @Prop()
  optimalTemperature: number; // in Celsius

  @Prop()
  temperatureRange: {
    min: number;
    max: number;
  };

  @Prop()
  color: string;

  @Prop()
  description?: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  imageUrl?: string;

  @Prop()
  manufacturer: string; // Pirelli

  @Prop()
  season: number; // 2024, 2025, etc.

  @Prop()
  usageConditions?: string; // dry, wet, mixed
}

export const TireSchema = SchemaFactory.createForClass(Tire);
