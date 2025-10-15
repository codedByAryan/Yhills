import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Ban } from 'lucide-react';

export default function PostForm({ onSave, initialPost = {} }) {
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
    tags: '',
    ...initialPost,
    t: Array.isArray(initialPost.tags) ? initialPost.tags.join(', ') : '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!post.title.trim()) newErrors.title = 'Title is required.';
    if (!post.author.trim()) newErrors.author = 'Author is required.';
    if (post.content.length < 20) newErrors.content = 'Content must be at least 20 characters long.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const finalPost = {
      ...post,
      tags: post.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };
    onSave(finalPost);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={post.author}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Content</label>
        <textarea
          id="content"
          name="content"
          rows="10"
          value={post.content}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={post.tags}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none"
        >
          <Ban size={16} />
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Save size={16} />
          Save Post
        </button>
      </div>
    </form>
  );
}