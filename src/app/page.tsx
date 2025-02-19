import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="max-w-screen-md w-full mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Vitality <span className="text-indigo-600">Coming Soon</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Your new workout logging &amp; stats app for iOS. Track your progress,
          optimize your routine, and achieve your fitness goals!
        </p>
      </header>

      {/* Placeholder Hero Image / Mockup */}
      {/* Replace "/placeholder.png" with your actual image in public/ folder */}
      <div className="flex items-center justify-center mb-8">
        <Image
          src="/logo.png"
          alt="Vitality App Preview"
          width={150}
          height={150}
          className=""
        />
      </div>

      {/* Teaser/CTA Section */}
      <main className="max-w-screen-md w-full text-center mb-8">
        <p className="text-base sm:text-lg text-gray-700">
          Vitality brings you cutting-edge workout logging and performance
          tracking. Stay tuned for advanced stats, personalized insights, and an
          intuitive interface.
        </p>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vitality. All rights reserved.
      </footer>
    </div>
  );
}
