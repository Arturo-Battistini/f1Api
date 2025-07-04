import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CircuitsController } from './circuits.controller';
import { CircuitsService } from './circuits.service';
import { Circuit, CircuitSchema } from './schemas/circuit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Circuit.name, schema: CircuitSchema }]),
  ],
  controllers: [CircuitsController],
  providers: [CircuitsService],
  exports: [CircuitsService],
})
export class CircuitsModule {}
