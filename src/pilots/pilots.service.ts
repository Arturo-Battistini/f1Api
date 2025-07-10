import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pilot, PilotDocument } from './schemas/pilot.schema';
import { Team, TeamDocument } from '../teams/schemas/team.schema';

@Injectable()
export class PilotsService {
  constructor(
    @InjectModel(Pilot.name) private pilotModel: Model<PilotDocument>,
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
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

  async findByTeamName(teamName: string): Promise<Pilot[]> {
    const team = await this.teamModel.findOne({
      name: { $regex: `^${teamName.trim()}$`, $options: 'i' }, // expresion regular case-insensitive
    });

    if (!team) {
      console.log('❌ No se encontró el equipo con nombre:', teamName);
      return [];
    }

    const pilotos = await this.pilotModel
      .find({ currentTeam: team._id })
      .populate('currentTeam', 'name nationality')
      .limit(25)
      .exec();

    return pilotos;
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

  async findBySlug(slug: string): Promise<Pilot | null> {
    // Convertir el slug a formato normal (reemplazar guiones por espacios)
    const nameParts = slug.split('-');
    if (nameParts.length < 2) {
      return null;
    }

    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return this.pilotModel
      .findOne({
        $and: [
          { name: { $regex: `^${firstName}$`, $options: 'i' } },
          { surname: { $regex: `^${lastName}$`, $options: 'i' } },
        ],
      })
      .populate('currentTeam', 'name nationality')
      .exec();
  }
}
