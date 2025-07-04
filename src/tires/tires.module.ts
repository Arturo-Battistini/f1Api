import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiresController } from './tires.controller';
import { TiresService } from './tires.service';
import { Tire, TireSchema } from './schemas/tire.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tire.name, schema: TireSchema }]),
  ],
  controllers: [TiresController],
  providers: [TiresService],
  exports: [TiresService],
})
export class TiresModule {}
