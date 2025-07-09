import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { PilotsService } from './pilots.service';
import { Pilot } from './schemas/pilot.schema';

@Controller('pilots')
export class PilotsController {
  constructor(private readonly pilotsService: PilotsService) {}

  @Get()
  async findAll(): Promise<Pilot[]> {
    return this.pilotsService.findAll();
  }

  @Get('active')
  async findActive(): Promise<Pilot[]> {
    return this.pilotsService.findActive();
  }

  @Get('top')
  async findTopDrivers(@Query('limit') limit?: string): Promise<Pilot[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.pilotsService.findTopDrivers(limitNumber);
  }

  @Get('team/id/:teamId')
  async findByTeam(@Param('teamId') teamId: string): Promise<Pilot[]> {
    return this.pilotsService.findByTeam(teamId);
  }

  @Get('team/:teamName')
  async findByTeamName(@Param('teamName') teamName: string): Promise<Pilot[]> {
    console.log('🎯 Controller: Buscando equipo:', teamName);
    return this.pilotsService.findByTeamName(teamName);
  }

  @Get('nationality/:nationality')
  async findByNationality(
    @Param('nationality') nationality: string,
  ): Promise<Pilot[]> {
    return this.pilotsService.findByNationality(nationality);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pilot> {
    console.log('🔍 Controller: Buscando piloto por ID:', id);
    const pilot = await this.pilotsService.findOne(id);
    if (!pilot) {
      throw new NotFoundException(`Piloto con ID ${id} no encontrado`);
    }
    return pilot;
  }
}
