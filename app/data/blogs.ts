// app/data/blogs.ts

export type Blog = {
    id: number;
    slug: string; // Unique slug for URL (e.g., dac-silicon-valley-phase-2)
    title: string;
    location: string;
    author: string;
    date: string; // e.g., "30 Jun 25"
    readTime: string; // e.g., "5 minutes read"
    image: string; // URL to the main blog image
    tag?: string; // Optional tag like "Luxury Villas"
    shortDescription: string; // For the listing page
    fullContent: BlogContent[]; // Detailed content for the blog post
    relatedBlogsSlugs?: string[]; // Slugs of related blogs
};

export type BlogContent = 
    | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; text: string; }
    | { type: 'paragraph'; text: string; }
    | { type: 'image'; src: string; alt: string; }
    | { type: 'list'; items: string[]; }
    | { type: 'quote'; text: string; author?: string; }
    | { type: 'callout'; text: string; } // For the "Enquire Now" and "Contact us" sections
    | { type: 'faq'; questions: { question: string; answer: string; }[]; }; // For the FAQ section

export const blogsData: Blog[] = [
    {
        id: 1,
        slug: 'dac-silicon-valley-phase-2',
        title: 'DAC Silicon Valley Phase 2, Navalur – California-Inspired Villas Near OMR, Chennai',
        location: 'Navalur - California-Inspired Villas Near OMR, Chennai',
        author: 'Sulaiman',
        date: '30 Jun 25',
        readTime: '5 minutes read',
        image: '/assets/blog/blog1.png', // Placeholder image
        shortDescription: 'Looking for luxury villas near OMR that blend comfort, space, and lifestyle? DAC Silicon Valley Phase 2 in Navalur offers a boutique community of premium 3 & 4 BHK villas designed with a touch of California elegance – all just minutes away from Chennai’s bustling IT Hub.',
        fullContent: [
            { type: 'paragraph', text: 'Welcome to DAC Silicon Valley Phase 2 – an exclusive community of California-inspired villas located in the fast-growing suburb of Navalur, just off OMR (Old Mahabalipuram Road) in Chennai.' },
            { type: 'callout', text: 'Where Modern Design Meets West Coast Living' },
            { type: 'paragraph', text: 'Drawing inspiration from the sun-drenched homes of California, DAC Silicon Valley Phase 2 blends sleek, contemporary architecture with serene natural surroundings. These villas are designed to reflect a laid-back luxury lifestyle, perfect for those who appreciate open spaces, clean lines, and thoughtful design.' },
            { type: 'callout', text: 'Prime Location – Navalur, OMR' },
            { type: 'list', items: [
                'Navalur is one of the most sought-after localities in Chennai, thanks to its close proximity to:',
                '- Major IT parks & tech corridors (SIPCOT, Tidel Park, etc.)',
                '- Reputed schools and colleges',
                '- Shopping malls & entertainment zones',
                '- Hospitals and daily essentials',
                'OMR is Chennai’s very own Silicon Valley, and this project places you right at the heart of it.'
            ]},
            { type: 'callout', text: 'Villa Highlights' },
            { type: 'list', items: [
                '3 & 4 BHK independent villas',
                'Spacious layouts with ample natural light',
                'Private gardens and terraces',
                'Modern kitchens & premium fittings',
                'Sustainable design with green features',
            ]},
            { type: 'callout', text: 'Built by DAC Developers' },
            { type: 'paragraph', text: 'Known for their commitment to quality and innovation, DAC Developers bring you yet another project that combines lifestyle with long-term value.' },
            { type: 'callout', text: 'Why California-Inspired?' },
            { type: 'list', items: [
                'California homes are known for:',
                '- Seamless indoor-outdoor living',
                '- Minimalist yet warm aesthetics',
                '- Eco-conscious architecture',
                '- Relaxed, resort-style ambiance',
                'DAC Silicon Valley Phase 2 captures this essence, adapted thoughtfully for the Chennai climate and lifestyle.'
            ]},
            { type: 'callout', text: 'Enquire Now' },
            { type: 'paragraph', text: 'Live the Californian dream, right here in Chennai.' },
            { type: 'paragraph', text: 'Limited villas available in Phase 2.' },
            { type: 'paragraph', text: 'Contact us to schedule a site visit or get a personalized walkthrough.' },
            { type: 'faq', questions: [
                { question: '1. What makes River Garden different from regular farmland projects?', answer: 'River Garden is a gated, landscaped community with orchards, amenities, and a ready guest house — not just bare land.' },
                { question: '2. Can River Garden be used for weekend stays?', answer: 'Yes! The 4BHK guest house and landscaped spaces are designed for weekend escapes.' },
                { question: '3. How does River Garden ensure wealth growth?', answer: 'Its prime location near MWC + limited plots + mature orchards make it a high-appreciation investment.' },
                { question: '4. Is River Garden farmland safe for families?', answer: 'Absolutely. It’s a secure, gated community with compound walls and internal roads.' },
                { question: '5. Can I use farmland for weekend family getaways?', answer: 'Yes! Many projects are designed as weekend retreats with modern comforts.' },
            ]},
        ],
        relatedBlogsSlugs: ['lava-kucha-ultra-premium-3bhk', 'casagrand-majestica', 'casagrand-southbrook'], // Example related blog slugs
    },
    {
        id: 2,
        slug: 'lava-kucha-ultra-premium-3bhk',
        title: 'LavaKucha - Ultra-Premium 3 BHK Apartments in Alwarpet, Chennai',
        location: 'Alwarpet, Chennai',
        author: 'Swathi Builders',
        date: '30 Jun 25',
        readTime: '6 minutes read',
        image: '/assets/blog/blog2.png', // Placeholder image
        shortDescription: 'Looking for a peaceful yet prime location to call home in Chennai? Lavakucha by Swathi Builders is a rare boutique residential project on C.V. Raman Road, Alwarpet, featuring spacious 3 BHK homes, modern features, and unmatched lifestyle comfort. ✨',
        fullContent: [
             { type: 'paragraph', text: 'Welcome to LavaKucha – an ultra-premium residential project offering spacious 3 BHK apartments in the heart of Alwarpet, Chennai. Developed by Swathi Builders, LavaKucha promises a peaceful yet vibrant lifestyle in one of Chennai\'s most sought-after neighborhoods.' },
             { type: 'callout', text: 'Prime Location Benefits' },
             { type: 'list', items: [
                'Located on C.V. Raman Road, Alwarpet.',
                'Close proximity to top schools, hospitals, and shopping centers.',
                'Excellent connectivity to other parts of Chennai.',
             ]},
             { type: 'callout', text: 'Apartment Features' },
             { type: 'list', items: [
                'Spacious 3 BHK layouts designed for comfort.',
                'Modern architecture with premium finishes.',
                'Ample natural light and ventilation.',
                'State-of-the-art amenities.',
             ]},
             { type: 'paragraph', text: 'LavaKucha is more than just a home; it\'s a lifestyle statement. Experience luxury and convenience like never before.' },
             { type: 'callout', text: 'Contact Us' },
             { type: 'paragraph', text: 'Interested in LavaKucha? Schedule a visit today to explore your dream home.' },
        ],
        relatedBlogsSlugs: ['dac-silicon-valley-phase-2', 'casagrand-majestica', 'casagrand-southbrook'],
    },
    {
        id: 3,
        slug: 'casagrand-majestica',
        title: 'Casagrand Majestica - Luxury Apartments in Kovilambakkam',
        location: 'Kovilambakkam, Chennai',
        author: 'Casagrand',
        date: '28 Jun 25',
        readTime: '7 minutes read',
        image: '/assets/blog/blog1.png',
        shortDescription: 'Discover opulence at Casagrand Majestica, offering meticulously designed luxury apartments in Kovilambakkam. Experience superior comfort and a vibrant community atmosphere.',
        fullContent: [
             { type: 'paragraph', text: 'Casagrand Majestica brings you luxury living in Kovilambakkam. These meticulously designed apartments offer an unparalleled living experience with top-tier amenities.' },
             { type: 'callout', text: 'Key Highlights' },
             { type: 'list', items: [
                'Spacious and well-ventilated apartments.',
                'Access to exclusive clubhouses and recreational facilities.',
                'Strategic location with easy access to schools and IT parks.',
             ]},
             { type: 'paragraph', text: 'Invest in a home that redefines urban luxury.' },
        ],
        relatedBlogsSlugs: ['dac-silicon-valley-phase-2', 'lava-kucha-ultra-premium-3bhk', 'casagrand-southbrook'],
    },
    {
        id: 4,
        slug: 'casagrand-southbrook',
        title: 'Casagrand Southbrook - Modern Homes in Sholinganallur',
        location: 'Sholinganallur, Chennai',
        author: 'Casagrand',
        date: '29 Jun 25',
        readTime: '4 minutes read',
        image: '/assets/blog/blog2.png',
        shortDescription: 'Explore modern living at Casagrand Southbrook in Sholinganallur. These thoughtfully crafted homes offer comfort, convenience, and a contemporary lifestyle.',
        fullContent: [
             { type: 'paragraph', text: 'Casagrand Southbrook offers modern homes designed for comfort and convenience in Sholinganallur. Ideal for families and professionals seeking a balanced lifestyle.' },
             { type: 'callout', text: 'Features' },
             { type: 'list', items: [
                'Contemporary design and architecture.',
                'Well-connected to major IT corridors.',
                'Community amenities for all age groups.',
             ]},
             { type: 'paragraph', text: 'Your new home awaits at Casagrand Southbrook.' },
        ],
        relatedBlogsSlugs: ['dac-silicon-valley-phase-2', 'lava-kucha-ultra-premium-3bhk', 'casagrand-majestica'],
    }
];