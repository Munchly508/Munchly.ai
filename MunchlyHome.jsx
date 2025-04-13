import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function MunchlyHome() {
  return (
    <div className="min-h-screen bg-yellow-50 p-6 font-sans">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-red-600">Munchly</h1>
        <Button className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700">Sign In</Button>
      </header>
      ...
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © 2025 Munchly. All rights reserved.
      </footer>
    </div>
  );
}
