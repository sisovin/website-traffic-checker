import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('password123');
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password,
    },
  });

  await prisma.traffic.createMany({
    data: [
      { userId: user.id, url: 'https://example.com', visits: 100 },
      { userId: user.id, url: 'https://example.org', visits: 150 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
