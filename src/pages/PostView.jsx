import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Posts } from '../context/PostsContext';
import { ArrowLeft, Edit, Trash2, Calendar, User, Tag, AlertTriangle } from 'lucide-react';

export default function PostView() {
  const { id } = useParams();
  const { getPostById, deletePost } = Posts();
  const navigate = useNavigate();
  const post = getPostById(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!post) {
    return <div className="text-center py-10">Post not found.</div>;
  }
  
  const handleDelete = () => {
    deletePost(post.id);
    toast.success('Post deleted successfully!');
    navigate('/');
  };

  const formattedDate = (dateString) => new Date(dateString).toLocaleString();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-500 hover:underline mb-6">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-2"><User size={14} /><span>{post.author}</span></div>
            <div className="flex items-center gap-2"><Calendar size={14} /><span>Created: {formattedDate(post.createdAt)}</span></div>
            <div className="flex items-center gap-2"><Calendar size={14} /><span>Updated: {formattedDate(post.updatedAt)}</span></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8 whitespace-pre-wrap">
            {post.content}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Tag size={16} className="text-slate-500 dark:text-slate-400" />
            {post.tags.map(tag => (
              <span key={tag} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          
          <div className="flex justify-end gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
            <Link to={`/posts/${post.id}/edit`} className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
              <Edit size={16} /> Edit
            </Link>
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </article>
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 max-w-sm w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-left">
                <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-white">Delete Post</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Are you sure you want to delete this post? This action cannot be undone.</p>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
              <button onClick={handleDelete} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm">
                Delete
              </button>
              <button onClick={() => setIsModalOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-slate-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-700 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 sm:mt-0 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}