import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'gallery',
                    element: <Gallery />,
                },
                {
                    path: 'contact',
                    element: <Contact />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
