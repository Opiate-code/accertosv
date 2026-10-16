import React, { useState } from 'react';

interface HeaderProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9gXHcQbni37QA3rYhUF9wDYYwLaVVQTFuWqg0KWGLOb9h59behvWK8WVHGvzf-mc2AhujPXw-0G6I_BvqZ9GBgHC4Y2iliRypOwTW4JrwUyvWoEFOoVefB-yCiFCS202tdiXlX3NCzeDcC3cq3cD5jdy1cJ0-EzFOI4tOzMUmumScYzyPIwQw2-cweldApDGiE2S6DEzbgeS3JYhYkWegr5U0tXcDruqoOf6khF_H2QeOBHTQqvF9n1YRZhItuZ8GQ";

export const Header: React.FC<HeaderProps> = ({ activeScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'sectores', label: 'Sectores' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-lg">
        {/* Brand Zone: Official Accerto Logo */}
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-space-sm focus:outline-none transition-transform hover:opacity-95 cursor-pointer"
            aria-label="Accerto - Inicio"
          >
            <img
              src={LOGO_URL}
              alt="Accerto"
              className="h-12 w-auto object-contain"
              style={{ height: '50.4px', width: 'auto' }}
            />
          </button>
        </div>

        {/* Desktop Navigation Links: 50% size, rgb(49,116,136), 2pt rounded red rgb(237,28,35) base line expanding from center */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative py-1 px-0.5 text-[12px] font-bold text-[rgb(49,116,136)] transition-opacity duration-200 cursor-pointer whitespace-nowrap ${
                  isActive ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 right-0 w-full h-[2pt] bg-[rgb(237,28,35)] rounded-full origin-center transition-transform duration-200 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Hamburger (hidden on lg, no extra buttons) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#181c23] hover:bg-[#EAF2F5] transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E4E8E9] px-margin py-3 shadow-lg flex flex-col gap-1.5 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-lg text-xs font-bold text-[rgb(49,116,136)] transition-colors ${
                  isActive
                    ? 'bg-[#EAF2F5]'
                    : 'hover:bg-[#F7F7F7]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
