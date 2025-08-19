#!/usr/bin/bash

npx prisma migrate dev --name init2 1>/dev/null 2>/dev/null || npx prisma generate

npm start
