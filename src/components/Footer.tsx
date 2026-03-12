import React from 'react';
import { Link } from 'react-router-dom';

interface QuickLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const quickLinks: QuickLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Builder Co.</h3>
            <p className="text-gray-200 mb-2">Quality Carpentry & Construction</p>
            <p className="text-sm text-gray-400 mb-4">Established in 1993</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-0.734 0-1.325 0.592-1.325 1.325v21.351c0 0.733 0.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464 0.099 2.794 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.716-1.795 1.763v2.313h3.587l-0.467 3.622h-3.12v9.293h6.116c0.733 0 1.324-0.591 1.324-1.324v-21.35c0-0.733-0.591-1.325-1.324-1.325z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482 13.944 13.944 0 01-10.125-5.138 4.916 4.916 0 001.523 6.557 4.9 4.9 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.918 4.918 0 004.588 3.417 9.867 9.867 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.068a13.945 13.945 0 007.557 2.213c9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634a10.025 10.025 0 002.457-2.548l.002-.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.246 2.428.414a4.92 4.92 0 011.675 1.085 4.918 4.918 0 011.085 1.675c.168.458.358 1.258.414 2.428.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.246 1.97-.414 2.428a4.928 4.928 0 01-1.085 1.675 4.92 4.92 0 01-1.675 1.085c-.458.168-1.258.358-2.428.414-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.97-.246-2.428-.414a4.92 4.92 0 01-1.675-1.085 4.918 4.918 0 01-1.085-1.675c-.168-.458-.358-1.258-.414-2.428C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.056-1.17.246-1.97.414-2.428a4.92 4.92 0 011.085-1.675 4.918 4.918 0 011.675-1.085c.458-.168 1.258-.358 2.428-.414C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.77.131 4.677.312 3.754.635 2.83.959 2.06 1.423 1.356 2.128.652 2.832.188 3.603-.136 4.528c-.323.922-.505 2.016-.564 3.298C-.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.059 1.282.241 2.376.564 3.298.324.925.788 1.696 1.492 2.4.704.704 1.475 1.168 2.4 1.492.922.323 2.016.505 3.298.564 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.282-.059 2.376-.241 3.298-.564.925-.324 1.696-.788 2.4-1.492.704-.704 1.168-1.475 1.492-2.4.323-.922.505-2.016.564-3.298.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.282-.241-2.376-.564-3.298-.324-.925-.788-1.696-1.492-2.4C21.695.652 20.924.188 20 .136c-.922-.323-2.016-.505-3.298-.564C15.668.014 15.259 0 12 0z"/>
                  <circle cx="12" cy="12" r="3.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="flex items-center text-gray-300 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (123) 456-7890
            </p>
            <p className="flex items-center text-gray-300 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@builderco.example.com
            </p>
            <p className="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              123 Builder Street, Construction City, ST 12345
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Builder Co. All rights reserved.</p>
          <p className="mt-2">Website by Kaipara Webworks.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;