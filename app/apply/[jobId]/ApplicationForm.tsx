// 'use client'
// import { useState } from 'react';
// import { Job } from '@/app/data/jobs';
// import { Upload } from 'lucide-react';

// export default function ApplicationForm({ job }: { job: Job }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     resume: null as File | null,
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, you would upload this data to your server
//     console.log("Submitting application for:", job.title);
//     console.log("Candidate details:", formData);
//     setIsSubmitted(true);
//   };

//   if (isSubmitted) {
//     return (
//         <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
//             <h3 className="text-2xl font-semibold text-green-800">Thank You!</h3>
//             <p className="text-gray-600 mt-2">Your application for {job.title} has been received.</p>
//         </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//         />
//       </div>
//       <div>
//         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//         <input
//           type="tel"
//           name="phone"
//           id="phone"
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//         />
//       </div>
//       <div>
//         <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume (PDF, DOCX)</label>
//         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//           <div className="space-y-1 text-center">
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="flex text-sm text-gray-600">
//               <label
//                 htmlFor="resume"
//                 className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
//               >
//                 <span>Upload a file</span>
//                 <input id="resume" name="resume" type="file" onChange={handleFileChange} className="sr-only" accept=".pdf,.doc,.docx" />
//               </label>
//               <p className="pl-1">or drag and drop</p>
//             </div>
//             {formData.resume && <p className="text-xs text-gray-500">{formData.resume.name}</p>}
//           </div>
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
//       >
//         Submit Application
//       </button>
//     </form>
//   );
// }




'use client';
import { useState } from 'react';
import { Job } from '@/app/data/jobs';
import { Upload, Loader2 } from 'lucide-react'; // Import Loader2 for loading spinner

// Define an interface for our form's error state
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  resume?: string;
}

export default function ApplicationForm({ job }: { job: Job }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Resume validation
    if (!resume) {
      newErrors.resume = "A resume is required.";
    } else {
      const allowedTypes = [
        'application/pdf', 
        'application/msword', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      if (!allowedTypes.includes(resume.type)) {
        newErrors.resume = "Invalid file type. Please upload a PDF, DOC, or DOCX.";
      }
      
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      if (resume.size > maxSizeInBytes) {
        newErrors.resume = `File is too large. Max size is ${maxSizeInBytes / 1024 / 1024}MB.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // If the field is phone, keep digits only and limit to 10
    const newValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    // Clear the error for this field when the user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setIsLoading(true);

    // In a real app, you would upload this data to your server
    // Example:
    // const data = new FormData();
    // data.append('name', formData.name);
    // data.append('email', formData.email);
    // data.append('phone', formData.phone);
    // data.append('resume', resume as File);
    // data.append('jobId', job.id.toString());
    // await fetch('/api/apply', { method: 'POST', body: data });

    console.log("Submitting application for:", job.title);
    console.log("Candidate details:", { ...formData, resume: resume?.name });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-green-800">Thank You!</h3>
        <p className="text-gray-600 mt-2">Your application for {job.title} has been received.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`mt-1 block w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (10 digits)</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={10}
          inputMode="numeric"
          pattern="[0-9]*"
          onPaste={(e) => {
            // sanitize pasted content to digits only
            const paste = e.clipboardData.getData('Text').replace(/\D/g, '').slice(0, 10);
            e.preventDefault();
            setFormData(prev => ({ ...prev, phone: paste }));
            if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
          }}
          className={`mt-1 block w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume (PDF, DOC, DOCX - Max 5MB)</label>
        <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${errors.resume ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg`}>
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="resume"
                className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
              >
                <span>Upload a file</span>
                <input id="resume" name="resume" type="file" onChange={handleFileChange} className="sr-only" accept=".pdf,.doc,.docx" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            {resume ? 
                <p className="text-xs text-gray-500">{resume.name}</p> :
                <p className="text-xs text-gray-500">No file selected</p>
            }
          </div>
        </div>
        {errors.resume && <p className="text-red-500 text-xs mt-1 ml-2">{errors.resume}</p>}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  );
}