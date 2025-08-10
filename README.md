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
└── app.ts                 # Configuración Express (entrada)
```
