"use client";

import { useState, useMemo } from "react";
import { 
    ChevronDown, 
    ChevronUp,
    Briefcase,
    CircleDollarSign,
    Clock,
    User,
    MapPin,
    Calendar,
    Home,
    Check,
    List,
    Sparkles,
    ClipboardList,
    X as CloseIcon,
} from "lucide-react";

// --- 1. PROPS INTERFACE & DATA STRUCTURE ---
interface JobCardProps {
  title: string;
  openings: number;
  salary: string;
  location: string;
  experience: string;
  gender: string;
  jobType: string;
  department: string;
  summary: string;
  description?: string[];
  qualifications?: string[];
  requirements?: string[];
  perks?: string[];
}

interface Filters {
    location: string;
    department: string;
    jobType: string;
    salaryRange: string;
}

// --- 2. REUSABLE SUB-COMPONENTS ---

// Reusable Select Component for dropdowns
const CustomSelect = ({ label, value, onChange, options }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="relative mt-1">
      <select 
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white py-2.5 pl-4 pr-10 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
      >
        {options.map(option => <option key={option} value={option}>{option === 'All' ? `Select ${label}` : option}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
    </div>
  </div>
);

// Renders a single detail item (e.g., Openings: 2)
const DetailItem = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
    <div className="flex items-center text-sm text-gray-600">
        <Icon size={16} className="text-gray-400 mr-2" />
        {text}
    </div>
);

// Renders a section in the expandable area (e.g., Job Description)
const DetailSection = ({ icon: Icon, title, items }: { icon: React.ElementType, title: string, items?: string[] }) => {
    if (!items || items.length === 0) return null;
    return (
        <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Icon size={18} className="text-gray-500 mr-3" />
                {title}
            </h3>
            <ul className="space-y-2 pl-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                        <Check size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// --- 3. THE NEW JOB FILTERS COMPONENT ---
const JobFilters = ({ filters, onFilterChange, onClearFilter }: { filters: Filters, onFilterChange: (filterName: keyof Filters, value: string) => void, onClearFilter: (filterName: keyof Filters) => void }) => {
    const locations = ["All", "Chennai", "Bengaluru"];
    const departments = ["All", "Pre-Sales", "Sales", "Marketing"];
    const jobTypes = ["All", "Full Time", "Part Time", "Internship"];
    const salaryRanges = ["All", "0-3 LPA", "3-5 LPA", "5-10 LPA"];

    const activeFilters = Object.entries(filters).filter(([_, value]) => value !== 'All');

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CustomSelect label="Location" value={filters.location} onChange={(e) => onFilterChange('location', e.target.value)} options={locations} />
                <CustomSelect label="Department" value={filters.department} onChange={(e) => onFilterChange('department', e.target.value)} options={departments} />
                <CustomSelect label="Job Type" value={filters.jobType} onChange={(e) => onFilterChange('jobType', e.target.value)} options={jobTypes} />
                <CustomSelect label="Salary Range" value={filters.salaryRange} onChange={(e) => onFilterChange('salaryRange', e.target.value)} options={salaryRanges} />
            </div>
            {activeFilters.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center gap-2">
                    {activeFilters.map(([key, value]) => (
                        <div key={key} className="bg-green-100 text-green-800 text-sm font-medium pl-3 pr-2 py-1 rounded-full flex items-center gap-2">
                            <span>{value}</span>
                            <button onClick={() => onClearFilter(key as keyof Filters)} className="text-green-600 hover:text-green-800">
                                <CloseIcon size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- 4. THE MAIN JOB CARD COMPONENT ---
const JobCard = (props: JobCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Header Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">{props.title}</h2>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
          <DetailItem icon={Briefcase} text={`Openings: ${props.openings}`} />
          <span className="border-l border-gray-300 h-4"></span>
          <DetailItem icon={CircleDollarSign} text={`Salary: ${props.salary}`} />
           <span className="border-l border-gray-300 h-4"></span>
          <DetailItem icon={Calendar} text={`Experience: ${props.experience}`} />
           <span className="border-l border-gray-300 h-4"></span>
          <DetailItem icon={User} text={`Gender: ${props.gender}`} />
           <span className="border-l border-gray-300 h-4"></span>
          <DetailItem icon={MapPin} text={`Location: ${props.location}`} />
           <span className="border-l border-gray-300 h-4"></span>
          <DetailItem icon={Clock} text={`Job Type: ${props.jobType}`} />
        </div>

        <p className="text-gray-500 mt-4 text-sm flex items-start">
             <Home size={16} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
             <span>{props.summary}</span>
        </p>

        <div className="flex items-center gap-4 mt-4">
            <button
                onClick={() => setOpen(!open)}
                className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:text-green-700"
            >
                {open ? "Hide Details" : "View Details"}
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-semibold">
                Apply Now
            </button>
        </div>
      </div>

      {/* Expandable Section */}
      {open && (
        <div className="mt-6 border-t border-gray-200 pt-6 text-sm">
          <DetailSection icon={List} title="Job Description" items={props.description} />
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <DetailSection icon={ClipboardList} title="Expected Qualifications" items={props.qualifications} />
            <DetailSection icon={ClipboardList} title="Mandatory Requirements" items={props.requirements} />
          </div>

          <div className="mt-6">
            <DetailSection icon={Sparkles} title="Perks and Benefits" items={props.perks} />
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
             <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-semibold">
                Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 5. THE EXPORTED PAGE COMPONENT ---
export default function JobResults() {
  const [filters, setFilters] = useState<Filters>({
      location: 'All',
      department: 'All',
      jobType: 'All',
      salaryRange: 'All'
  });

  const jobsData: JobCardProps[] = [
    { title: "Pre-Sales Executive", department: "Pre-Sales", openings: 2, salary: "₹ 2 L – ₹ 2.2 L P.A", location: "Chennai", experience: "2 Yrs", gender: "Female", jobType: "Part Time", summary: "Home Konnect® is looking for candidates with prior telecalling and customer handling experience", description: ["Candidates with prior telecalling and customer handling experience would be given higher preference", "Good interpersonal skills and negotiation skills", "Should be enthusiastic / result-oriented / assertive/ street-smart", "Meeting Targets and Deadlines consistently", "Handling international & local clientele to solve their queries and support the sales function", "Assist clients during the decision making process by answering all relevant queries, liaising with Developer or the Company’s Developer Relations team for any clarifications required and home loan requirements", "Experience in Real Estate/Banking/Financial/Insurance domains is an added advantage"], qualifications: ["Fluent written and verbal communication in Tamil and English", "Familiar with MS Office"], requirements: ["Should be willing to work during all weekend(s) with one weekday off per week", "Prior experience of 1–5 years in Sales/TeleSales", "Should be enthusiastic / result-oriented / assertive / street-smart"], perks: ["Good incentives"] },
    { title: "Senior Sales Manager", department: "Sales", openings: 1, salary: "₹ 5 L – ₹ 7 L P.A", location: "Bengaluru", experience: "5+ Yrs", gender: "Any", jobType: "Full Time", summary: "We are seeking an experienced sales manager to lead our Bengaluru team and drive growth." },
    { title: "Digital Marketing Intern", department: "Marketing", openings: 3, salary: "Stipend based", location: "Chennai", experience: "0-1 Yrs", gender: "Any", jobType: "Internship", summary: "Join our marketing team to learn and contribute to our digital presence and campaigns." },
    { title: "Pre-Sales Executive", department: "Pre-Sales", openings: 2, salary: "₹ 2 L – ₹ 2.2 L P.A", location: "Chennai", experience: "2 Yrs", gender: "Female", jobType: "Part Time", summary: "Home Konnect® is looking for candidates with prior telecalling and customer handling experience" },
  ];

  const handleFilterChange = (filterName: keyof Filters, value: string) => {
      setFilters(prev => ({ ...prev, [filterName]: value }));
  };
  
  const handleClearFilter = (filterName: keyof Filters) => {
      setFilters(prev => ({ ...prev, [filterName]: 'All' }));
  };

  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
        const locationMatch = filters.location === 'All' || job.location === filters.location;
        const departmentMatch = filters.department === 'All' || job.department === filters.department;
        const jobTypeMatch = filters.jobType === 'All' || job.jobType === filters.jobType;
        // Note: Salary range filtering would require more complex logic to parse and compare ranges
        return locationMatch && departmentMatch && jobTypeMatch;
    });
  }, [filters]);

  return (
    <div className="bg-gray-50 w-full py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <JobFilters filters={filters} onFilterChange={handleFilterChange} onClearFilter={handleClearFilter} />
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Job Results</h1>
            <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, i) => (
                        <JobCard key={i} {...job} />
                    ))
                ) : (
                    <div className="text-center py-16 bg-white border rounded-lg">
                        <p className="text-gray-600">No jobs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}