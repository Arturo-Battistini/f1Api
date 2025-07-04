import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './schemas/team.schema';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get('active')
  async findActive(): Promise<Team[]> {
    return this.teamsService.findActive();
  }

  @Get('top')
  async findTopTeams(@Query('limit') limit?: string): Promise<Team[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.teamsService.findTopTeams(limitNumber);
  }

  @Get('nationality/:nationality')
  async findByNationality(
    @Param('nationality') nationality: string,
  ): Promise<Team[]> {
    return this.teamsService.findByNationality(nationality);
  }

  @Get('engine/:engine')
  async findByEngine(@Param('engine') engine: string): Promise<Team[]> {
    return this.teamsService.findByEngine(engine);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Team> {
    const team = await this.teamsService.findOne(id);
    if (!team) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }
    return team;
  }
}
