import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <div className="bg-brand-gray-50 border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex text-sm font-medium" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-brand-gray-600 hover:text-brand-black transition-colors">
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              // Format path text (e.g., "franchise-models" -> "Franchise Models")
              const text = value
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              return (
                <li key={to} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand-gray-400 mx-1 flex-shrink-0" />
                  {isLast ? (
                    <span className="text-brand-red font-bold" aria-current="page">
                      {text}
                    </span>
                  ) : (
                    <Link to={to} className="text-brand-gray-600 hover:text-brand-black transition-colors">
                      {text}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
