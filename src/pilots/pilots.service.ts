import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pilot, PilotDocument } from './schemas/pilot.schema';

@Injectable()
export class PilotsService {
  constructor(
    @InjectModel(Pilot.name) private pilotModel: Model<PilotDocument>,
  ) {}

  async findAll(): Promise<Pilot[]> {
    return this.pilotModel
      .find()
      .populate('currentTeam', 'name nationality')
      .exec();
  }

  async findOne(id: string): Promise<Pilot | null> {
    return this.pilotModel
      .findById(id)
      .populate('currentTeam', 'name nationality')
      .exec();
  }

  async findByTeam(teamId: string): Promise<Pilot[]> {
    return this.pilotModel
      .find({ currentTeam: teamId })
      .populate('currentTeam', 'name nationality')
      .exec();
  }

  async findByNationality(nationality: string): Promise<Pilot[]> {
    return this.pilotModel
      .find({ nationality: new RegExp(nationality, 'i') })
      .populate('currentTeam', 'name nationality')
      .exec();
  }

  async findActive(): Promise<Pilot[]> {
    return this.pilotModel
      .find({ isActive: true })
      .populate('currentTeam', 'name nationality')
      .exec();
  }

  async findTopDrivers(limit: number = 10): Promise<Pilot[]> {
    return this.pilotModel
      .find()
      .sort({ championshipPoints: -1 })
      .limit(limit)
      .populate('currentTeam', 'name nationality')
      .exec();
  }
}
