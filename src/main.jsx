import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root.jsx';
import ErrorLoad from './Layout/Error/ErrorLoad.jsx';
import Home from './Layout/Home/Home.jsx';
import Speakers from './components/Speakers/Speakers.jsx';
import Login from './Auth/Login/Login.jsx';
import Register from './Auth/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivetRout from './AuthProvider/PrivetRout/PrivetRout.jsx';
import Profile from './ProtectedRooute/Profile/Profile.jsx';
import SpeakerCard from './components/Speakers/SpeakerCard.jsx';
import Events from './components/Events/Events.jsx';
import Event from './components/Events/Event.jsx';
import Services from './components/Service/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorLoad></ErrorLoad>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivetRout><Profile></Profile></PrivetRout>
      },
      {
        path: '/speaker/:id',
        element: <PrivetRout><SpeakerCard></SpeakerCard></PrivetRout>,
        loader: () => fetch('/speakers.json').then(res => res.json()),
      },
      {
        path: '/events',
        element: <Events></Events>,
        loader: () => fetch('/events.json').then(res => res.json()),
      },
      {
        path: 'event/:id',
        element: <PrivetRout><Event></Event></PrivetRout>,
        loader: () => fetch('/events.json').then(res => res.json()),
      },
      {
        path: 'services',
        element: <Services></Services>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
