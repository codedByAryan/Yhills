import { Link } from 'react-router-dom';
import { User, Calendar } from 'lucide-react';

export default function PostCard({ post }) {
  const excerpt = post.content.substring(0, 100) + '...';
  const createdDate = new Date(post.createdAt).toLocaleDateString();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 truncate">
          {post.title}
        </h2>
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4 space-x-4">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{createdDate}</span>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{excerpt}</p>
        <Link 
          to={`/posts/${post.id}`} 
          className="font-semibold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}