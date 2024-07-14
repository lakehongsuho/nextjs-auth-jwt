### 참고 유튜브

- https://www.youtube.com/watch?v=INwOeQ0RagY

### 설치

- nextjs
  `npx create-next-app@latest`
- prisma(postgresql)
  ```dart
  npm install typescript ts-node @types/node --save-dev
  npm install prisma --save-dev
  npx prisma init --datasource-provider postgresql
  ```
- dotenv 수정
  - `DATABASE_URL="postgresql://postgres:123123@localhost:5432/postgres?schema=public”`
- prisma/schema_prisma에 복사
  ```dart
  model User {
    id    Int     @id @default(autoincrement())
    email String  @unique
    password  String
  }
  ```
- prisma 클라이언트 생성
  - npx prisma generate
- app/lib/prisma.ts에 복사
  ```dart
  //@ts-nocheck
  import { PrismaClient } from "@prisma/client";

  let prisma: PrismaClient;

  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }

  export default prisma;

  ```
- npx prisma db push
  - 모델 생성하고 싱크 맞추기
- npm install bcryptjs
- npm install --save-dev @types/bcryptjs
  - 비밀번호를 해싱하고 비교하는 용도
- npm install jose
  - jwt token 암호화 복호화 용도
  - 어떤 이유인지 몰라도 jsonwebtoken은 nextjs에서 사용이 안됨
