import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash(
    process.env.ADMIN_PASSWORD!,
    10
  );

  await prisma.admin.upsert({
    where: {
      email: process.env.ADMIN_EMAIL!,
    },
    update: {},

    create: {
      name: process.env.ADMIN_NAME!,
      email: process.env.ADMIN_EMAIL!,
      password,
    },
  });

  console.log("✅ Admin created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });