<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# F1 Fan API

API REST para datos de Fórmula 1 construida con NestJS y MongoDB.

## 🏎️ Características

- **Pilotos**: Información completa de pilotos de F1
- **Equipos**: Datos de escuderías y constructores
- **Circuitos**: Información de pistas y trazados
- **Neumáticos**: Especificaciones de neumáticos Pirelli

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install @nestjs/mongoose mongoose @nestjs/config
npm install --save-dev @types/mongoose
```

2. **Configurar variables de entorno:**
Crear archivo `.env` en la raíz del proyecto:
```env
MONGODB_URI=mongodb://localhost:27017/f1fan-db
PORT=3000
NODE_ENV=development
```

3. **Ejecutar la aplicación:**
```bash
npm run start:dev
```

## 📡 Endpoints Disponibles

### Pilotos (`/api/pilots`)
- `GET /api/pilots` - Listar todos los pilotos
- `GET /api/pilots/active` - Solo pilotos activos
- `GET /api/pilots/top?limit=10` - Top pilotos por puntos
- `GET /api/pilots/team/:teamId` - Pilotos por equipo
- `GET /api/pilots/nationality/:nationality` - Pilotos por nacionalidad
- `GET /api/pilots/:id` - Obtener piloto específico

### Equipos (`/api/teams`)
- `GET /api/teams` - Listar todos los equipos
- `GET /api/teams/active` - Solo equipos activos
- `GET /api/teams/top?limit=10` - Top equipos por campeonatos
- `GET /api/teams/nationality/:nationality` - Equipos por nacionalidad
- `GET /api/teams/engine/:engine` - Equipos por motor
- `GET /api/teams/:id` - Obtener equipo específico

### Circuitos (`/api/circuits`)
- `GET /api/circuits` - Listar todos los circuitos
- `GET /api/circuits/active` - Solo circuitos activos
- `GET /api/circuits/longest?limit=10` - Circuitos más largos
- `GET /api/circuits/shortest?limit=10` - Circuitos más cortos
- `GET /api/circuits/country/:country` - Circuitos por país
- `GET /api/circuits/type/:type` - Circuitos por tipo
- `GET /api/circuits/:id` - Obtener circuito específico

### Neumáticos (`/api/tires`)
- `GET /api/tires` - Listar todos los neumáticos
- `GET /api/tires/active` - Solo neumáticos activos
- `GET /api/tires/high-grip?limit=10` - Neumáticos con más agarre
- `GET /api/tires/high-durability?limit=10` - Neumáticos más duraderos
- `GET /api/tires/type/:type` - Neumáticos por tipo
- `GET /api/tires/season/:season` - Neumáticos por temporada
- `GET /api/tires/conditions/:conditions` - Neumáticos por condiciones
- `GET /api/tires/:id` - Obtener neumático específico

## 🗄️ Estructura de Base de Datos

### Colecciones MongoDB:
- `pilots` - Información de pilotos
- `teams` - Información de escuderías
- `circuits` - Información de circuitos
- `tires` - Información de neumáticos

## 🛠️ Tecnologías

- **Backend**: NestJS
- **Base de Datos**: MongoDB
- **ODM**: Mongoose
- **Configuración**: @nestjs/config
- **CORS**: Habilitado para desarrollo

## 📝 Notas

- Esta API es de **solo lectura** (GET requests únicamente)
- Los datos deben ser insertados manualmente en MongoDB
- CORS está configurado para permitir peticiones desde cualquier origen en desarrollo
- La API incluye relaciones entre entidades (ej: pilotos con sus equipos)

## 🔧 Desarrollo

```bash
# Ejecutar en modo desarrollo
npm run start:dev

# Ejecutar tests
npm run test

# Ejecutar tests e2e
npm run test:e2e
```
