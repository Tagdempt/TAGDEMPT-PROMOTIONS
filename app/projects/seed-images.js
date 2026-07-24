const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// ضع هنا رابط صورة صحيحة من Cloudinary
const imageUrl =
  "https://res.cloudinary.com/vmcnruef/image/upload/v1783979309/i4agkckai8mpxf4poedr.png";

async function main() {
  const images = await prisma.projectImage.findMany();

  for (const image of images) {
    await prisma.projectImage.update({
      where: {
        id: image.id,
      },
      data: {
        url: imageUrl,
      },
    });

    console.log(`✅ Updated image ${image.id}`);
  }

  console.log("🎉 All images updated");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });