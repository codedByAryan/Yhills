import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { seedPosts } from '../utils/seeData';
import { v4 as uuidv4 } from 'uuid';

const PostsContext = createContext();

// Make sure the 'export' keyword is here. This is the crucial fix.
export function Posts() {
  return useContext(PostsContext);
}

// And also ensure 'export' is here.
export function PostsProvider({ children }) {
  const [posts, setPosts] = useLocalStorage('posts', seedPosts);

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id ? { ...updatedPost, updatedAt: new Date().toISOString() } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };
  
  const getPostById = (id) => {
    return posts.find(post => post.id === id);
  }

  const value = {
    posts,
    addPost,
    updatePost,
    deletePost,
    getPostById,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}