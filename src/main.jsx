import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import EditContact, { action as updateContactAction } from './routes/edit';
import { action as destroyContactAction } from './routes/destroy';
import Index from './routes';
import Contact, { loader as contactLoader } from './routes/contact';
import './index.css'

const router = createBrowserRouter([
  // Route objects
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: updateContactAction
      },
      {
        path: "contacts/:id/destroy",
        action: destroyContactAction,
        errorElement: <div>Force an error in the destroy route to see this error</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
