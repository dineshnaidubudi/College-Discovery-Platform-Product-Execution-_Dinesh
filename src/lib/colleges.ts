export type College = {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  annualFee: number;
  rating: number;
  placementPercentage: number;
  averagePackage: number;
  courses: string[];
  description: string;
  reviews: {
    author: string;
    rating: number;
    comment: string;
  }[];
};

export const colleges: College[] = [
  {
    id: "nit-bengaluru",
    name: "National Institute of Technology Bengaluru",
    slug: "national-institute-of-technology-bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    annualFee: 125000,
    rating: 4.8,
    placementPercentage: 92,
    averagePackage: 14.2,
    courses: ["Computer Science Engineering", "Data Science", "Artificial Intelligence"],
    description: "A strong engineering institute with high placement outcomes and industry-linked programs.",
    reviews: [
      {
        author: "Aarav Sharma",
        rating: 4.7,
        comment: "The placement process is structured and the technical clubs are active.",
      },
      {
        author: "Meera Iyer",
        rating: 4.8,
        comment: "Good faculty support and a competitive academic environment.",
      },
    ],
  },
  {
    id: "south-city-engineering",
    name: "South City Engineering College",
    slug: "south-city-engineering-college",
    city: "Chennai",
    state: "Tamil Nadu",
    annualFee: 98000,
    rating: 4.2,
    placementPercentage: 78,
    averagePackage: 7.4,
    courses: ["Computer Science Engineering", "Electronics and Communication", "Civil Engineering"],
    description: "A practical engineering college with affordable fees and solid regional hiring.",
    reviews: [
      {
        author: "Kavin Raj",
        rating: 4.1,
        comment: "The curriculum is manageable and internships are encouraged.",
      },
      {
        author: "Ananya Rao",
        rating: 4.3,
        comment: "Campus facilities are useful for project work.",
      },
    ],
  },
  {
    id: "riverside-technology",
    name: "Riverside Institute of Technology",
    slug: "riverside-institute-of-technology",
    city: "Hyderabad",
    state: "Telangana",
    annualFee: 145000,
    rating: 4.5,
    placementPercentage: 84,
    averagePackage: 9.1,
    courses: ["Information Technology", "Data Science", "Artificial Intelligence"],
    description: "A technology-focused campus known for software placements and applied labs.",
    reviews: [
      {
        author: "Nikhil Reddy",
        rating: 4.4,
        comment: "Coding culture is strong and seniors are helpful.",
      },
      {
        author: "Sara Khan",
        rating: 4.6,
        comment: "The data science electives are relevant and project-heavy.",
      },
    ],
  },
  {
    id: "pioneer-engineering",
    name: "Pioneer College of Engineering",
    slug: "pioneer-college-of-engineering",
    city: "Pune",
    state: "Maharashtra",
    annualFee: 132000,
    rating: 4.1,
    placementPercentage: 74,
    averagePackage: 6.8,
    courses: ["Mechanical Engineering", "Civil Engineering", "Electronics and Communication"],
    description: "A broad engineering college with a balanced mix of core and circuit branches.",
    reviews: [
      {
        author: "Dev Patel",
        rating: 4,
        comment: "Workshops are useful and core branch faculty are experienced.",
      },
      {
        author: "Isha Menon",
        rating: 4.2,
        comment: "Placements are better for electronics than for core branches.",
      },
    ],
  },
  {
    id: "metro-management",
    name: "Metro School of Management",
    slug: "metro-school-of-management",
    city: "Mumbai",
    state: "Maharashtra",
    annualFee: 210000,
    rating: 4.4,
    placementPercentage: 81,
    averagePackage: 8.8,
    courses: ["Business Administration", "Data Science"],
    description: "A management school with business analytics exposure and urban industry access.",
    reviews: [
      {
        author: "Rhea Shah",
        rating: 4.5,
        comment: "Case discussions and internship access are the biggest strengths.",
      },
      {
        author: "Kabir Sinha",
        rating: 4.2,
        comment: "Good for students who want business roles in metro companies.",
      },
    ],
  },
  {
    id: "capital-engineering",
    name: "Capital Engineering Institute",
    slug: "capital-engineering-institute",
    city: "Delhi",
    state: "Delhi",
    annualFee: 156000,
    rating: 4.3,
    placementPercentage: 80,
    averagePackage: 8.2,
    courses: ["Computer Science Engineering", "Information Technology", "Business Administration"],
    description: "A city-based institute with mixed technical and management programs.",
    reviews: [
      {
        author: "Arjun Mehta",
        rating: 4.3,
        comment: "The location helps with internships and startup exposure.",
      },
      {
        author: "Tara Verma",
        rating: 4.1,
        comment: "The faculty is responsive and project evaluations are regular.",
      },
    ],
  },
];

export const locations = Array.from(new Set(colleges.map((college) => college.city))).sort();
export const courses = Array.from(new Set(colleges.flatMap((college) => college.courses))).sort();

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function findCollege(slug: string) {
  return colleges.find((college) => college.slug === slug);
}

export function filterColleges(params: {
  query?: string;
  location?: string;
  course?: string;
  maxFee?: string;
}) {
  const query = params.query?.trim().toLowerCase();
  const maxFee = Number(params.maxFee);

  return colleges.filter((college) => {
    const matchesQuery = !query || college.name.toLowerCase().includes(query);
    const matchesLocation = !params.location || college.city === params.location;
    const matchesCourse = !params.course || college.courses.includes(params.course);
    const matchesFee = !Number.isFinite(maxFee) || maxFee <= 0 || college.annualFee <= maxFee;

    return matchesQuery && matchesLocation && matchesCourse && matchesFee;
  });
}

export function predictColleges(params: {
  exam?: string;
  rank?: string;
  course?: string;
  location?: string;
}) {
  const rank = Number(params.rank);

  if (!Number.isFinite(rank) || rank <= 0) {
    return [];
  }

  return colleges
    .filter((college) => {
      const rankFit = rank <= college.placementPercentage * 500;
      const courseFit = !params.course || college.courses.includes(params.course);
      const locationFit = !params.location || college.city === params.location;
      const examFit =
        !params.exam ||
        params.exam === "JEE" ||
        (params.exam === "CAT" && college.courses.includes("Business Administration"));

      return rankFit && courseFit && locationFit && examFit;
    })
    .sort((first, second) => second.rating - first.rating);
}
