import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const cities = [
  ["Bengaluru", "Karnataka"],
  ["Chennai", "Tamil Nadu"],
  ["Hyderabad", "Telangana"],
  ["Pune", "Maharashtra"],
  ["Mumbai", "Maharashtra"],
  ["Delhi", "Delhi"],
  ["Kolkata", "West Bengal"],
  ["Ahmedabad", "Gujarat"],
  ["Jaipur", "Rajasthan"],
  ["Coimbatore", "Tamil Nadu"],
] as const;

const coursePool = [
  "Computer Science Engineering",
  "Electronics and Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Information Technology",
  "Data Science",
  "Business Administration",
  "Artificial Intelligence",
];

const names = [
  "National Institute of Technology Bengaluru",
  "South City Engineering College",
  "Riverside Institute of Technology",
  "Pioneer College of Engineering",
  "Metro School of Management",
  "Eastern Technical University",
  "Western Institute of Science",
  "Heritage College of Technology",
  "Capital Engineering Institute",
  "Greenfield University",
  "Summit College of Engineering",
  "Lakeview Institute of Technology",
  "Axis School of Engineering",
  "Horizon Technical Campus",
  "Meridian College of Science",
  "Gateway Institute of Management",
  "Central College of Technology",
  "Northstar Engineering University",
  "Silver Oak Institute",
  "Blue Ridge Technical College",
  "Sapphire College of Engineering",
  "Vertex Institute of Technology",
  "Crescent School of Engineering",
  "Unity College of Science",
  "Orion Technical University",
  "Nova College of Management",
  "Apex Institute of Engineering",
  "Keystone University",
  "Praxis College of Technology",
  "Zenith School of Engineering",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function pickCourses(index: number) {
  return [0, 1, 2, 3].map((offset) => coursePool[(index + offset) % coursePool.length]);
}

async function main() {
  await prisma.savedCollege.deleteMany();
  await prisma.predictorRule.deleteMany();
  await prisma.review.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();
  await prisma.user.deleteMany();

  for (const [index, name] of names.entries()) {
    const [city, state] = cities[index % cities.length];
    const annualFee = 115000 + index * 18000;
    const rating = Number((3.7 + (index % 10) * 0.12).toFixed(1));
    const placementPercentage = 62 + (index % 9) * 4;
    const averagePackage = Number((4.2 + (index % 8) * 0.8).toFixed(1));
    const selectedCourses = pickCourses(index);

    await prisma.college.create({
      data: {
        name,
        slug: slugify(name),
        location: `${city}, ${state}`,
        city,
        state,
        annualFee,
        rating,
        placementPercentage,
        averagePackage,
        description: `${name} offers undergraduate programs with placement support, campus facilities, and industry-focused curriculum.`,
        courses: {
          create: selectedCourses.map((course, courseIndex) => ({
            name: course,
            duration: course.includes("Business") ? "2 years" : "4 years",
            fee: annualFee + courseIndex * 12000,
            eligibility: course.includes("Business")
              ? "Bachelor degree with entrance score"
              : "Class 12 with PCM and entrance score",
          })),
        },
        reviews: {
          create: [
            {
              authorName: "Aarav Sharma",
              rating: Number(Math.min(5, rating + 0.1).toFixed(1)),
              comment: "Good academic support and a useful placement cell.",
            },
            {
              authorName: "Meera Iyer",
              rating: Number(Math.max(3, rating - 0.2).toFixed(1)),
              comment: "The course structure is practical and campus life is active.",
            },
          ],
        },
        predictorRules: {
          create: selectedCourses.slice(0, 3).map((course, ruleIndex) => ({
            exam: course.includes("Business") ? "CAT" : "JEE",
            course,
            minRank: 1 + index * 900 + ruleIndex * 250,
            maxRank: 8500 + index * 1200 + ruleIndex * 400,
          })),
        },
      },
    });
  }

  await prisma.user.create({
    data: {
      email: "demo@student.test",
      name: "Demo Student",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
