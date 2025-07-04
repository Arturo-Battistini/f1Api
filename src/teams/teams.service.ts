import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from './schemas/team.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async findOne(id: string): Promise<Team | null> {
    return this.teamModel.findById(id).exec();
  }

  async findActive(): Promise<Team[]> {
    return this.teamModel.find({ isActive: true }).exec();
  }

  async findByNationality(nationality: string): Promise<Team[]> {
    return this.teamModel
      .find({ nationality: new RegExp(nationality, 'i') })
      .exec();
  }

  async findTopTeams(limit: number = 10): Promise<Team[]> {
    return this.teamModel
      .find()
      .sort({ constructorsChampionships: -1, raceWins: -1 })
      .limit(limit)
      .exec();
  }

  async findByEngine(engine: string): Promise<Team[]> {
    return this.teamModel.find({ engine: new RegExp(engine, 'i') }).exec();
  }
}
