import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] opacity-20 [background-size:16px_16px] pointer-events-none" />
      
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
