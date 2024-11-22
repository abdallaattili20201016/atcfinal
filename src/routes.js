// src/routes.js
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TraineeDashboard from './pages/Trainee/TraineeDashboard';
import ViewProfile from './pages/Trainee/ViewProfile';
import Courses from './pages/Trainee/Courses'; // Import the Courses page
import Certificates from './pages/Trainee/Certificates';
import Messages from './pages/Trainee/Messages';
import Calendar from './pages/Calendar'; // Adjust the path if necessary
import PaymentPage from './pages/Trainee/PaymentPage';
import FinishCoures from './pages/Trainee/FinishCoures';

import ViewProfileAdmin from './pages/Admin/ViewProfileAdmin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserManagement from './pages/Admin/Users';
import CourseManagement from './pages/Admin/CourseManagement';
import Announcements from './pages/Admin/Announcements';
import Reports from './pages/Admin/Reports';

import TrainerDashboard from './pages/Trainer/TrainerDashboard';
import TrainerCourses from './pages/Trainer/TrainerCourses'; // Import the Courses page
import TrainerMessages from './pages/Trainer/TrainerMessages';
import TrainerReports from './pages/Trainer/TrainerReports';
import ViewProfileTrainer from './pages/Trainer/ViewProfileTrainer';
import TrainerAnnouncements from './pages/Trainer/TrainerAnnouncements';



const routes = [
  { path: '/', element: <Login /> }, 
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/dashboard', element: <TraineeDashboard /> },
  { path: '/ViewProfile', element:<ViewProfile/>},
  { path: '/courses', element: <Courses /> }, 
  { path: '/Certificates', element: <Certificates /> }, 
  { path: '/Messages', element: <Messages /> }, 
  { path: '/Calendar', element: <Calendar /> }, 
  { path: '/PaymentPage', element: <PaymentPage /> },
  { path: '/FinishCoures', element: <FinishCoures /> }, 

  { path: '/admin', element: <AdminDashboard /> },
  { path: '/admin/Users', element: <UserManagement /> },
  { path: '/admin/CourseManagement', element: <CourseManagement /> },
  { path: '/admin/Announcements', element: <Announcements /> },
  { path: '/admin/Reports', element: <Reports /> },
  { path: '/ViewProfileAdmin', element:<ViewProfileAdmin/>},

  { path: '/Trainer/TrainerMessages', element: <TrainerMessages /> },
  { path: '/Trainer/TrainerDashboard', element: <TrainerDashboard /> },
  { path: '/Trainer/TrainerCourses', element: <TrainerCourses /> },
  { path: '/Trainer/TrainerReports', element: <TrainerReports /> },
  { path: '/Trainer/ViewProfileTrainer', element: <ViewProfileTrainer /> },
  { path: '/Trainer/TrainerAnnouncements', element: <TrainerAnnouncements /> },
  


];

export default routes;
