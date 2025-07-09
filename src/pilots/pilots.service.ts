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
    console.log('🔍 Buscando pilotos del equipo:', teamName);

    // Primero, veamos qué hay en la colección de pilotos
    const allPilots = await this.pilotModel.find().limit(2).exec();
    console.log('📋 Muestra de pilotos:', JSON.stringify(allPilots, null, 2));

    // Buscar pilotos usando aggregate para hacer join con teams
    const pilots = await this.pilotModel.aggregate([
      {
        $lookup: {
          from: 'teams', // Nombre de la colección en MongoDB
          localField: 'currentTeam',
          foreignField: '_id',
          as: 'teamInfo',
        },
      },
      {
        $unwind: '$teamInfo',
      },
      {
        $match: {
          'teamInfo.name': new RegExp(teamName, 'i'),
        },
      },
      {
        $addFields: {
          currentTeam: {
            _id: '$teamInfo._id',
            name: '$teamInfo.name',
            nationality: '$teamInfo.nationality',
          },
        },
      },
      {
        $project: {
          teamInfo: 0,
        },
      },
    ]);

    console.log('✅ Pilotos encontrados:', pilots.length);

    // Si no encuentra nada, probemos un aggregate más simple
    if (pilots.length === 0) {
      console.log('🔍 Probando aggregate simple...');
      const testAggregate = await this.pilotModel.aggregate([
        {
          $lookup: {
            from: 'teams',
            localField: 'currentTeam',
            foreignField: '_id',
            as: 'teamInfo',
          },
        },
        { $limit: 2 },
      ]);
      console.log('🧪 Test aggregate:', JSON.stringify(testAggregate, null, 2));
    }

    return pilots as Pilot[];
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
