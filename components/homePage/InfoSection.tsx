"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import eteImage from "./assets/ETEproperty.png";

// Interface for Service type safety
interface Service {
  title: string;
  description: string;
}

export default function InfoSections() {
  // Data for the services section
  const services: Service[] = [
    { title: "Search & Shortlist", description: "Search, shortlist and find the home of your dreams." },
    { title: "Site Visit", description: "See and Feel the soul of your future home in person." },
    { title: "Home Loan", description: "Get assistance and advice with the best experts in home loans." },
    { title: "Legal Advice", description: "Get the best legal advice regarding anything related home buying." },
    { title: "Closure", description: "Complete assistance until you get your home." },
  ];

  return (
    <>
      {/* End to End Solutions Section */}
      <section className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={eteImage}
              alt="Aerial view of a property"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">End To End Property Solutions</h2>
            <p className="text-gray-600 mb-8 text-lg">Buy, sell or rent properties with Home Konnect</p>
            <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-transform hover:scale-105 mx-auto lg:mx-0">
              Contact Us <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}