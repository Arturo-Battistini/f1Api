# Script de Datos de F1

Este script inserta datos reales de Fórmula 1 en la base de datos MongoDB.

## 🚀 Uso

```bash
npm run seed
```

## 📊 Datos Incluidos

### Equipos (10)
- Red Bull Racing
- Mercedes-AMG Petronas
- Scuderia Ferrari
- McLaren Racing
- Aston Martin F1 Team
- Alpine F1 Team
- Williams Racing
- Visa Cash App RB
- Stake F1 Team Kick Sauber
- MoneyGram Haas F1 Team

### Pilotos (20)
- Max Verstappen (Red Bull)
- Sergio Pérez (Red Bull)
- Lewis Hamilton (Mercedes)
- George Russell (Mercedes)
- Charles Leclerc (Ferrari)
- Carlos Sainz (Ferrari)
- Lando Norris (McLaren)
- Oscar Piastri (McLaren)
- Fernando Alonso (Aston Martin)
- Lance Stroll (Aston Martin)
- Esteban Ocon (Alpine)
- Pierre Gasly (Alpine)
- Alexander Albon (Williams)
- Logan Sargeant (Williams)
- Daniel Ricciardo (RB)
- Yuki Tsunoda (RB)
- Valtteri Bottas (Sauber)
- Zhou Guanyu (Sauber)
- Nico Hülkenberg (Haas)
- Kevin Magnussen (Haas)

### Circuitos (15)
- Albert Park (Australia)
- Baréin (Baréin)
- Jeddah (Arabia Saudita)
- Suzuka (Japón)
- Shanghái (China)
- Circuit of the Americas (Estados Unidos)
- Interlagos (Brasil)
- Mónaco (Mónaco)
- Silverstone (Reino Unido)
- Spa-Francorchamps (Bélgica)
- Monza (Italia)
- Marina Bay (Singapur)
- Yas Marina (Emiratos Árabes Unidos)
- Hungaroring (Hungría)
- Zandvoort (Países Bajos)

### Neumáticos (8)
- P Zero Soft (C3) - 2024
- P Zero Medium (C2) - 2024
- P Zero Hard (C1) - 2024
- Cinturato Intermediate (I1) - 2024
- Cinturato Wet (W1) - 2024
- P Zero Soft (C4) - 2023
- P Zero Medium (C3) - 2023
- P Zero Hard (C1) - 2023

## 🔧 Requisitos

- MongoDB corriendo en `localhost:27017`
- Base de datos `f1fan-db` creada
- Dependencias instaladas: `npm install mongodb`

## 📝 Notas

- El script limpia las colecciones existentes antes de insertar nuevos datos
- Los datos incluyen estadísticas actualizadas hasta 2024
- Las relaciones entre pilotos y equipos están correctamente establecidas
- Los neumáticos incluyen especificaciones técnicas reales de Pirelli 