import { useState, useEffect } from 'react';
import { Home, User, FolderOpen, Code, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'projects', label: 'Projetos', icon: FolderOpen },
    { id: 'services', label: 'Serviços', icon: Code },
    { id: 'Contato', label: 'Contato', icon: Mail },
  ];

  useEffect(() => {
    const handleResize = () => setIsVisible(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4"
    >
      <nav className="bg-card rounded-full px-6 py-3 shadow-lg border border-border">
        <ul className="flex gap-8 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <Link className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-muted text-foreground">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navigation;
