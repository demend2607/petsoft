import { Prisma, PrismaClient } from "./generated/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput = {
  email: "example@gmail.com",
  hashedPassword: "",
  pets: {
    create: [
      {
        name: "Benjamin",
        ownerName: "John Doe",
        imageUrl: "https://bytegrad.com/course-assets/images/rn-image-4.png",
        age: 2,
        notes: "Doesn't like to be touched on the belly. Plays well with other dogs.",
      },
      {
        name: "Richard",
        ownerName: "Josephine Dane",
        imageUrl: "https://bytegrad.com/course-assets/images/rn-image-5.png",
        age: 5,
        notes: "Needs medication twice a day.",
      },
      {
        name: "Anna",
        ownerName: "Frank Doe",
        imageUrl: "https://bytegrad.com/course-assets/images/rn-image-6.png",
        age: 4,
        notes: "Allergic to chicken.",
      },
    ],
  },
};

async function main() {
  console.log(`🌱 Start seeding ...`);

  const hashedPassword = await bcrypt.hash("example", 10);
  userData.hashedPassword = hashedPassword;
  console.log(`📝 Creating user with data:`, JSON.stringify(userData));

  await prisma.user.create({
    data: userData,
  });

  console.log(`✅ Created user`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
