import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './features/Home/pages/HomePage';
import ProductsPage from './features/Products/pages/ProductsPage';
import ServicesPage from './features/Services/pages/ServicesPage';
import BlogPage from './features/Blog/pages/BlogPage';
import ContactUsPage from './features/ContactUs/pages/ContactUsPage';
import AboutUsPage from './features/AboutUs/pages/AboutUsPage';
import ProductDetailPage from './features/Products/pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: `products/:id`,
        element: <ProductDetailPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'contact',
        element: <ContactUsPage />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
