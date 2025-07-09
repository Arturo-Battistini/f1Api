import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PilotsModule } from './pilots/pilots.module';
import { TeamsModule } from './teams/teams.module';
import { CircuitsModule } from './circuits/circuits.module';
import { TiresModule } from './tires/tires.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'assets'),
      serveRoot: '/assets',
    }),
    PilotsModule,
    TeamsModule,
    CircuitsModule,
    TiresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
