import { notFound } from 'next/navigation';
import { jobsData } from '@/app/data/jobs';
import Navbar from '@/components/shared/Navbar';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import ApplicationForm from './ApplicationForm'; // The client component

export default async function ApplyPage({ params }: { params: { jobId: string } }) {
    const jobId = parseInt(params.jobId, 10);
    const job = jobsData.find(j => j.id === jobId);

    if (!job) {
        notFound(); // If no job is found, show a 404 page
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
                <h1 className="text-3xl font-bold text-gray-900">Apply For</h1>
                <h2 className="text-2xl font-semibold text-green-600 mb-8">{job.title}</h2>
                <ApplicationForm job={job} />
            </main>
            <SiteMapFooter />
            <DetailedFooter />
        </div>
    );
}