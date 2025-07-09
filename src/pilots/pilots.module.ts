import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PilotsController } from './pilots.controller';
import { PilotsService } from './pilots.service';
import { Pilot, PilotSchema } from './schemas/pilot.schema';
import { Team, TeamSchema } from '../teams/schemas/team.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pilot.name, schema: PilotSchema },
      { name: Team.name, schema: TeamSchema },
    ]),
  ],
  controllers: [PilotsController],
  providers: [PilotsService],
  exports: [PilotsService],
})
export class PilotsModule {}
