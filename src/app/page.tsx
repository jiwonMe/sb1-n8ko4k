import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Making Change Happen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Together we can create a better future through innovation and compassion
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2"
          >
            Join Our Mission <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">10K+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Volunteers</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-gray-600">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}