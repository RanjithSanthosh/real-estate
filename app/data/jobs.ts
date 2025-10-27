import { ComponentType } from 'react';

// Define the Job type
export interface Job {
  id: number; // A unique ID is essential for dynamic routing
  title: string;
  department: string;
  openings: number;
  salary: string;
  location: string;
  experience: string;
  gender: string;
  jobType: string;
  summary: string;
  description?: string[];
  qualifications?: string[];
  requirements?: string[];
  perks?: string[];
}

// Export all job data
export const jobsData: Job[] = [
  {
    id: 1,
    title: "Pre-Sales Executive",
    department: "Pre-Sales",
    openings: 2,
    salary: "₹ 2 L – ₹ 2.2 L P.A",
    location: "Chennai",
    experience: "2 Yrs",
    gender: "Female",
    jobType: "Part Time",
    summary:
      "Home Konnect® is looking for candidates with prior telecalling and customer handling experience",
    description: [
      "Candidates with prior telecalling and customer handling experience would be given higher preference",
      "Good interpersonal skills and negotiation skills",
      "Should be enthusiastic / result-oriented / assertive/ street-smart",
      "Meeting Targets and Deadlines consistently",
    ],
    qualifications: [
      "Fluent written and verbal communication in Tamil and English",
      "Familiar with MS Office",
    ],
    requirements: [
      "Should be willing to work during all weekend(s) with one weekday off per week",
      "Prior experience of 1–5 years in Sales/TeleSales",
    ],
    perks: ["Good incentives"],
  },
  {
    id: 2,
    title: "Senior Sales Manager",
    department: "Sales",
    openings: 1,
    salary: "₹ 5 L – ₹ 7 L P.A",
    location: "Bengaluru",
    experience: "5+ Yrs",
    gender: "Any",
    jobType: "Full Time",
    summary:
      "We are seeking an experienced sales manager to lead our Bengaluru team and drive growth.",
    description: ["Lead and manage the sales team to meet targets.", "Develop and implement strategic sales plans."],
    qualifications: ["Proven experience as a sales manager in real estate.", "Strong leadership and communication skills."],
    requirements: ["Bachelor's degree in Business or related field.", "Willingness to travel."],
    perks: ["Competitive salary", "Performance bonus", "Health insurance"],
  },
  {
    id: 3,
    title: "Digital Marketing Intern",
    department: "Marketing",
    openings: 3,
    salary: "Stipend based",
    location: "Chennai",
    experience: "0-1 Yrs",
    gender: "Any",
    jobType: "Internship",
    summary:
      "Join our marketing team to learn and contribute to our digital presence and campaigns.",
    description: ["Assist with managing social media channels.", "Help create content for blogs and newsletters."],
    qualifications: ["Currently enrolled in a related degree program.", "Basic understanding of digital marketing concepts."],
    requirements: ["Strong written communication skills.", "Eagerness to learn."],
    perks: ["Certificate of completion", "Potential for full-time offer", "Flexible hours"],
  },
];