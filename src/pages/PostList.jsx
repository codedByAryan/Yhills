import { useState, useMemo } from 'react';
import { Posts } from '../context/PostsContext';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';
import { Search } from 'lucide-react';

const POSTS_PER_PAGE = 6;

export default function PostList() {
  const { posts } = Posts();
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const authors = useMemo(() => [...new Set(posts.map(p => p.author))], [posts]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(post => 
        authorFilter ? post.author === authorFilter : true
      );
  }, [posts, searchTerm, authorFilter]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>
          <div>
            <select
              value={authorFilter}
              onChange={(e) => { setAuthorFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700"
            >
              <option value="">All Authors</option>
              {authors.map(author => (
                <option key={author} value={author}>{author}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-300">No posts found.</h2>
          <p className="text-slate-400 mt-2">Try adjusting your search or filter.</p>
        </div>
      )}

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}