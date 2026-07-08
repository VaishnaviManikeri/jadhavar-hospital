import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import DoctorProfile from './pages/DoctorProfile';
import Treatment from './pages/treatment';
import Conditions from './pages/Conditions';
import WhyChoose from './pages/WhyChoose';
import SuccessStory from './pages/Successstory';
// import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './components/AppointmentForm'; // Import the AppointmentForm component
// New imports for gallery and blog
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Admin imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import BlogAdmin from './pages/admin/BlogAdmin';

import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Frontend Routes - Your existing routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-doctor" element={<DoctorProfile />} />
            <Route path="/success-stories" element={<SuccessStory />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/why-choose-us" element={<WhyChoose />} />

            {/* New Gallery and Blog Routes */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <GalleryAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/admin/notices"
              element={
                <ProtectedRoute>
                  <NoticeAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/career"
              element={
                <ProtectedRoute>
                  <CareerAdmin />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
