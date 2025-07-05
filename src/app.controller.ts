import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getApiDocumentation(): object {
    return {
      message: '🏎️ F1 Fan API - Documentación',
      version: '1.0.0',
      baseUrl: 'https://f1api-4pft.onrender.com/api',
      description:
        'API REST para datos de Fórmula 1 con información de pilotos, equipos, circuitos y neumáticos.',
      endpoints: {
        pilots: {
          description: 'Información de pilotos de F1',
          routes: [
            'GET /api/pilots - Todos los pilotos',
            'GET /api/pilots/active - Solo pilotos activos',
            'GET /api/pilots/top?limit=10 - Top pilotos por puntos',
            'GET /api/pilots/team/:teamId - Pilotos por equipo',
            'GET /api/pilots/nationality/:nationality - Pilotos por nacionalidad',
            'GET /api/pilots/:id - Piloto específico',
          ],
          examples: [
            'https://f1api-4pft.onrender.com/api/pilots',
            'https://f1api-4pft.onrender.com/api/pilots/active',
            'https://f1api-4pft.onrender.com/api/pilots/top?limit=5',
            'https://f1api-4pft.onrender.com/api/pilots/nationality/España',
          ],
        },
        teams: {
          description: 'Información de escuderías de F1',
          routes: [
            'GET /api/teams - Todos los equipos',
            'GET /api/teams/active - Solo equipos activos',
            'GET /api/teams/top?limit=10 - Top equipos por campeonatos',
            'GET /api/teams/nationality/:nationality - Equipos por nacionalidad',
            'GET /api/teams/engine/:engine - Equipos por motor',
            'GET /api/teams/:id - Equipo específico',
          ],
          examples: [
            'https://f1api-4pft.onrender.com/api/teams',
            'https://f1api-4pft.onrender.com/api/teams/active',
            'https://f1api-4pft.onrender.com/api/teams/top?limit=5',
            'https://f1api-4pft.onrender.com/api/teams/nationality/Reino%20Unido',
          ],
        },
        circuits: {
          description: 'Información de circuitos de F1',
          routes: [
            'GET /api/circuits - Todos los circuitos',
            'GET /api/circuits/active - Solo circuitos activos',
            'GET /api/circuits/longest?limit=10 - Circuitos más largos',
            'GET /api/circuits/shortest?limit=10 - Circuitos más cortos',
            'GET /api/circuits/country/:country - Circuitos por país',
            'GET /api/circuits/type/:type - Circuitos por tipo',
            'GET /api/circuits/:id - Circuito específico',
          ],
          examples: [
            'https://f1api-4pft.onrender.com/api/circuits',
            'https://f1api-4pft.onrender.com/api/circuits/active',
            'https://f1api-4pft.onrender.com/api/circuits/longest?limit=5',
            'https://f1api-4pft.onrender.com/api/circuits/country/España',
          ],
        },
        tires: {
          description: 'Información de neumáticos Pirelli',
          routes: [
            'GET /api/tires - Todos los neumáticos',
            'GET /api/tires/active - Solo neumáticos activos',
            'GET /api/tires/high-grip?limit=10 - Neumáticos con más agarre',
            'GET /api/tires/high-durability?limit=10 - Neumáticos más duraderos',
            'GET /api/tires/type/:type - Neumáticos por tipo',
            'GET /api/tires/season/:season - Neumáticos por temporada',
            'GET /api/tires/conditions/:conditions - Neumáticos por condiciones',
            'GET /api/tires/:id - Neumático específico',
          ],
          examples: [
            'https://f1api-4pft.onrender.com/api/tires',
            'https://f1api-4pft.onrender.com/api/tires/active',
            'https://f1api-4pft.onrender.com/api/tires/type/soft',
            'https://f1api-4pft.onrender.com/api/tires/season/2024',
          ],
        },
      },
      features: [
        '✅ Solo lectura (GET requests)',
        '✅ Datos reales de F1 2024',
        '✅ Relaciones entre entidades',
        '✅ Filtros y ordenamiento',
        '✅ CORS habilitado',
        '✅ Respuestas en JSON',
      ],
      dataSources: [
        'Pilotos actuales de F1',
        'Escuderías 2024',
        'Circuitos icónicos',
        'Neumáticos Pirelli',
      ],
      usage: {
        note: 'Todos los endpoints devuelven JSON. Usa los ejemplos de arriba para probar la API.',
        cors: 'La API acepta peticiones desde cualquier origen.',
        rateLimit: 'Sin límites de uso para desarrollo.',
      },
      contact: {
        developer: 'F1 Fan API',
        version: '1.0.0',
        status: 'Activo',
      },
    };
  }
}
