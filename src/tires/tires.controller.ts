import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { TiresService } from './tires.service';
import { Tire } from './schemas/tire.schema';

@Controller('tires')
export class TiresController {
  constructor(private readonly tiresService: TiresService) {}

  @Get()
  async findAll(): Promise<Tire[]> {
    return this.tiresService.findAll();
  }

  @Get('active')
  async findActive(): Promise<Tire[]> {
    return this.tiresService.findActive();
  }

  @Get('high-grip')
  async findHighGripTires(@Query('limit') limit?: string): Promise<Tire[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.tiresService.findHighGripTires(limitNumber);
  }

  @Get('high-durability')
  async findHighDurabilityTires(
    @Query('limit') limit?: string,
  ): Promise<Tire[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.tiresService.findHighDurabilityTires(limitNumber);
  }

  @Get('type/:type')
  async findByType(@Param('type') type: string): Promise<Tire[]> {
    return this.tiresService.findByType(type);
  }

  @Get('season/:season')
  async findBySeason(@Param('season') season: string): Promise<Tire[]> {
    const seasonNumber = parseInt(season, 10);
    return this.tiresService.findBySeason(seasonNumber);
  }

  @Get('conditions/:conditions')
  async findByConditions(
    @Param('conditions') conditions: string,
  ): Promise<Tire[]> {
    return this.tiresService.findByConditions(conditions);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tire> {
    const tire = await this.tiresService.findOne(id);
    if (!tire) {
      throw new NotFoundException(`Neumático con ID ${id} no encontrado`);
    }
    return tire;
  }
}
