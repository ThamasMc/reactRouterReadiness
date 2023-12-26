import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import EditContact, { action as updateContactAction } from './routes/edit';
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
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: updateContactAction
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
