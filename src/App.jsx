import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import PostList from './pages/PostList';
import PostView from './pages/PostView';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="posts/new" element={<PostCreate />} />
        <Route path="posts/:id" element={<PostView />} />
        <Route path="posts/:id/edit" element={<PostEdit />} />
      </Route>
    </Routes>
  );
}