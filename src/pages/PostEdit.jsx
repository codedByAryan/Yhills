import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Posts } from '../context/PostsContext';
import PostForm from '../components/PostForm';

export default function PostEdit() {
  const { id } = useParams();
  const { getPostById, updatePost } = Posts();
  const navigate = useNavigate();
  const postToEdit = getPostById(id);

  if (!postToEdit) {
    return <div className="text-center py-10">Post not found.</div>;
  }

  const handleSave = (updatedPostData) => {
    updatePost({ ...postToEdit, ...updatedPostData });
    toast.success('Post updated successfully!');
    navigate(`/posts/${id}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">Edit Post</h1>
        <PostForm onSave={handleSave} initialPost={postToEdit} />
      </div>
    </div>
  );
}