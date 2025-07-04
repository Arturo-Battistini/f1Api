import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tire, TireDocument } from './schemas/tire.schema';

@Injectable()
export class TiresService {
  constructor(@InjectModel(Tire.name) private tireModel: Model<TireDocument>) {}

  async findAll(): Promise<Tire[]> {
    return this.tireModel.find().exec();
  }

  async findOne(id: string): Promise<Tire | null> {
    return this.tireModel.findById(id).exec();
  }

  async findActive(): Promise<Tire[]> {
    return this.tireModel.find({ isActive: true }).exec();
  }

  async findByType(type: string): Promise<Tire[]> {
    return this.tireModel.find({ type: new RegExp(type, 'i') }).exec();
  }

  async findBySeason(season: number): Promise<Tire[]> {
    return this.tireModel.find({ season }).exec();
  }

  async findByConditions(conditions: string): Promise<Tire[]> {
    return this.tireModel
      .find({ usageConditions: new RegExp(conditions, 'i') })
      .exec();
  }

  async findHighGripTires(limit: number = 10): Promise<Tire[]> {
    return this.tireModel.find().sort({ grip: -1 }).limit(limit).exec();
  }

  async findHighDurabilityTires(limit: number = 10): Promise<Tire[]> {
    return this.tireModel.find().sort({ durability: -1 }).limit(limit).exec();
  }
}
