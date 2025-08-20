# Mercatify Backend

🚀 Backend de Mercatify, una API REST para la gestión de productos, usuarios y órdenes, construida con Node.js, TypeScript y Prisma.

## 🛠 Tegnologias usadas en el proyecto
- **Lenguaje**: TypeScript
- **Framework**: Express.js
- **Runtime**: Node.js
- **Base de datos**: postgreSQL
- **ORM**: Prisma
- **Cache**: Redis
- **Contenedor**: Docker, Docker compose
- **Autentication**: JWT, Bcrypt
- **Validacion**: zod
- **Testing**: Jest, Supertest

## Arquitectura usada para esto proyecto (DDD)
```yml
src/
│
├── domain/               # Núcleo puro del negocio (no depende de nada)
│   ├── entities/          # Modelos y clases de negocio
│   ├── value-objects/     # Objetos con reglas propias (Email, Password, etc.)
│   ├── repositories/      # Interfaces (contratos) de acceso a datos
│   ├── services/          # Lógica de dominio pura
│   └── errors/            # Errores específicos del dominio
│
├── application/           # Orquestación de casos de uso
│   ├── use-cases/         # Casos de uso (coordinan entidades y repositorios)
│   └── dto/               # Data Transfer Objects para entrada/salida
│
├── infrastructure/        # Implementaciones técnicas
│   ├── database/          # Prisma, conexión DB
│   ├── repositories/      # Implementaciones reales de repositorios
│   ├── auth/              # JWT, bcrypt, middlewares de auth
│   ├── config/            # Variables de entorno, logger
│   └── adapters/          # Integraciones externas (APIs, servicios)
│
├── presentation/          # API y capa de entrada
│   ├── controllers/       # Controladores MVC
│   ├── routes/            # Rutas Express
│   ├── middlewares/       # Validaciones, permisos, errores
│   └── validators/        # Schemas de Zod
│
├── shared/                # Código reutilizable
│   ├── utils/             # Funciones helper
│   ├── types/             # Tipos globales
│   └── constants/         # Constantes globales
│
├── tests/                 # Pruebas unitarias, integración y e2e
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── server.ts              # Configuracion del servidor en Express
└── app.ts                 # Salida de la App
```

## ⚡ Características

- Autenticación con JWT
- Gestión de usuarios, roles y permisos
- CRUD de productos y órdenes
- Validación de datos con Zod
- Arquitectura por capas (Domain, Application, Infrastructure)

## 🚀 Instalacion
1. Clona el repositorio
```bash
  git clone https://github.com/UsopKing7/Mercatify-Backend.git
```
2. Acceder al proyecto
```bash
  cd Mercatify-Backend
```
3. Instalacion de dependencias
```bash
  npm i
```


4. Archivo de configuracion (.env)
```yml
  DATABASE_URL="postgresql://root:postgres@db:5432/mercatify_backend"
  REDIS_URL='redis://redis:6379'
  PORT=3333
  SAL=10
  SECRET_KEY='tu_secret'
```

5. Iniciar con docker 🐳
```bash
  docker compose up --build
```

6. Detener contenedor 🐳
```bash
  docker compose down 
```

# Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, puedes seguir estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio
3. Realiza tus cambios y haz commit de ellos
4. Sube tus cambios a tu fork
5. Abre un pull request desde tu fork hacia el repositorio original.
# Soporte
Si tienes problemas al utilizar este script o tienes preguntas, no dudes en abrir un issue en el repositorio. Nos esforzamos por responder lo antes posible y ayudar a resolver cualquier inconveniente.

Agradecimientos
Gracias por utilizar este proyecto. Si lo encuentras útil, ¡no dudes en dejar una estrella ⭐ en GitHub! 

# 👨‍💻 Autor
***@UsopKing7*** - GitHub
