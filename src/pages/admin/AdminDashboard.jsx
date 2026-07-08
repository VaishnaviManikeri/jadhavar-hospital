import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiImage, FiFileText, FiBell, FiBriefcase, FiLogOut, FiHome } from 'react-icons/fi';
import { getGallery, getBlogs} from '../../api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    gallery: 0,
    blogs: 0,
    notices: 0
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [galleryRes, blogsRes, noticesRes] = await Promise.all([
        getGallery(),
        getBlogs(),
        getNotices()
      ]);
      
      setStats({
        gallery: galleryRes.data.length,
        blogs: blogsRes.data.length,
        notices: noticesRes.data.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/admin/login');
  };

  const username = localStorage.getItem('username') || 'Admin';

  const menuItems = [
    { path: '/admin/gallery', icon: FiImage, label: 'Gallery', count: stats.gallery },
    { path: '/admin/blogs', icon: FiFileText, label: 'Blogs', count: stats.blogs },
    // { path: '/admin/notices', icon: FiBell, label: 'Notices', count: stats.notices },
    // { path: '/admin/career', icon: FiBriefcase, label: 'Career', count: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
              <span className="ml-4 text-sm text-gray-500">
                Welcome, {username}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary transition-colors"
                target="_blank"
              >
                <FiHome className="w-5 h-5" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 transition-colors"
              >
                <FiLogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {item.label}
                      </p>
                      <p className="text-2xl font-semibold text-gray-900 mt-1">
                        {item.count}
                      </p>
                    </div>
                    <item.icon className="w-8 h-8 text-primary opacity-50" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  to="/admin/gallery"
                  className="flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  <FiImage className="w-5 h-5 mr-2" />
                  Add Gallery Item
                </Link>
                <Link
                  to="/admin/blogs"
                  className="flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  <FiFileText className="w-5 h-5 mr-2" />
                  Create Blog
                </Link>
                <Link
                  to="/admin/notices"
                  className="flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  <FiBell className="w-5 h-5 mr-2" />
                  Add Notice
                </Link>
                <Link
                  to="/admin/career"
                  className="flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  <FiBriefcase className="w-5 h-5 mr-2" />
                  Manage Careers
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;