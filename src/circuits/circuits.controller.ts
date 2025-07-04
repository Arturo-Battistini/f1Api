import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CircuitsService } from './circuits.service';
import { Circuit } from './schemas/circuit.schema';

@Controller('circuits')
export class CircuitsController {
  constructor(private readonly circuitsService: CircuitsService) {}

  @Get()
  async findAll(): Promise<Circuit[]> {
    return this.circuitsService.findAll();
  }

  @Get('active')
  async findActive(): Promise<Circuit[]> {
    return this.circuitsService.findActive();
  }

  @Get('longest')
  async findLongestCircuits(
    @Query('limit') limit?: string,
  ): Promise<Circuit[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.circuitsService.findLongestCircuits(limitNumber);
  }

  @Get('shortest')
  async findShortestCircuits(
    @Query('limit') limit?: string,
  ): Promise<Circuit[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.circuitsService.findShortestCircuits(limitNumber);
  }

  @Get('country/:country')
  async findByCountry(@Param('country') country: string): Promise<Circuit[]> {
    return this.circuitsService.findByCountry(country);
  }

  @Get('type/:type')
  async findByType(@Param('type') type: string): Promise<Circuit[]> {
    return this.circuitsService.findByType(type);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Circuit> {
    const circuit = await this.circuitsService.findOne(id);
    if (!circuit) {
      throw new NotFoundException(`Circuito con ID ${id} no encontrado`);
    }
    return circuit;
  }
}
