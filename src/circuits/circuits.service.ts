import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Circuit, CircuitDocument } from './schemas/circuit.schema';

@Injectable()
export class CircuitsService {
  constructor(
    @InjectModel(Circuit.name) private circuitModel: Model<CircuitDocument>,
  ) {}

  async findAll(): Promise<Circuit[]> {
    return this.circuitModel.find().exec();
  }

  async findOne(id: string): Promise<Circuit | null> {
    return this.circuitModel.findById(id).exec();
  }

  async findActive(): Promise<Circuit[]> {
    return this.circuitModel.find({ isActive: true }).exec();
  }

  async findByCountry(country: string): Promise<Circuit[]> {
    return this.circuitModel.find({ country: new RegExp(country, 'i') }).exec();
  }

  async findByType(type: string): Promise<Circuit[]> {
    return this.circuitModel
      .find({ circuitType: new RegExp(type, 'i') })
      .exec();
  }

  async findLongestCircuits(limit: number = 10): Promise<Circuit[]> {
    return this.circuitModel.find().sort({ length: -1 }).limit(limit).exec();
  }

  async findShortestCircuits(limit: number = 10): Promise<Circuit[]> {
    return this.circuitModel.find().sort({ length: 1 }).limit(limit).exec();
  }
}
