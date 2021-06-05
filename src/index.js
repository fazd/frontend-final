import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faSignature,
  faMapMarkerAlt,
  faComment,
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faCalendar,
  faClock,
  faUsers,
  faSave,
  faPlusCircle,
  faCloud,
  faThermometer,
  faThermometerEmpty,
  faConciergeBell,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'


library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faSignature,
  faMapMarkerAlt,
  faComment,
  faHeart,
  faThumbsUp,
  faThumbsDown,
  faCalendar,
  faClock,
  faUsers,
  faSave,
  faPlusCircle,
  faCloud,
  faThermometer,
  faThermometerEmpty,
  faConciergeBell,
  faNewspaper,
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
