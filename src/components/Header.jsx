import { NavLink } from 'react-router-dom';
import { PenSquare, LayoutGrid } from 'lucide-react';

export default function Header() {
  const activeLinkClass = "bg-slate-200 dark:bg-slate-700 text-blue-600 dark:text-blue-400";

  return (
    <header className="bg-white dark:bg-slate-800/50 shadow-md backdrop-blur-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-slate-900 dark:text-white">
            Post<span className="text-blue-500">Board</span>
          </NavLink>
          <div className="flex items-center space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? activeLinkClass : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              <LayoutGrid size={18} />
              <span>All Posts</span>
            </NavLink>
            <NavLink
              to="/posts/new"
              className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? activeLinkClass : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              <PenSquare size={18} />
              <span>New Post</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}