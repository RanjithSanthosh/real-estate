export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* You can add your logo here if you want */}
        {/* <Image src="/path/to/logo.png" width={100} height={100} alt="Loading logo" /> */}
        <div 
          className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"
        ></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}