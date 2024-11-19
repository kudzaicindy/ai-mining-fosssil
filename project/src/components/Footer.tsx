import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Kudzai Cindyrella Pemhiwa
        </div>
        <div className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;