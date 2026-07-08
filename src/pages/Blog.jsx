import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiGrid,
  FiList,
  FiSearch,
  FiUser,
} from 'react-icons/fi';
import { getBlogs } from '../api';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('grid');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        setBlogs(response.data.filter((blog) => blog.isPublished));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const normalizedSearch = searchTerm.toLowerCase();
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(normalizedSearch) ||
    blog.excerpt?.toLowerCase().includes(normalizedSearch) ||
    blog.tags?.some((tag) => tag.toLowerCase().includes(normalizedSearch))
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-poppins">Blog</h1>
          <p className="text-white/80 mt-2">Insights, tips, and updates from our team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <FiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search blog posts..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 font-inter focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="flex space-x-2">
            <button
              type="button"
              title="Grid view"
              aria-label="Grid view"
              onClick={() => setView('grid')}
              className={`p-2 rounded-md transition-colors ${
                view === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiGrid className="h-5 w-5" />
            </button>
            <button
              type="button"
              title="List view"
              aria-label="List view"
              onClick={() => setView('list')}
              className={`p-2 rounded-md transition-colors ${
                view === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiList className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 font-inter">No blog posts found.</p>
          </div>
        ) : (
          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
                : 'space-y-4'
            }
          >
            {filteredBlogs.map((blog) => (
              <article
                key={blog._id}
                className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  className={view === 'list' ? 'sm:flex sm:w-full' : 'block'}
                >
                  {blog.featuredImage && (
                    <div
                      className={
                        view === 'list'
                          ? 'h-52 sm:h-auto sm:w-64 sm:flex-shrink-0'
                          : 'aspect-video overflow-hidden'
                      }
                    >
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-xl font-bold text-gray-900 transition-colors hover:text-primary font-playfair">
                      {blog.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600 font-inter">
                      <span className="flex items-center">
                        <FiUser className="mr-1 h-4 w-4" />
                        {blog.author || 'Admin'}
                      </span>
                      <span className="flex items-center">
                        <FiCalendar className="mr-1 h-4 w-4" />
                        {format(new Date(blog.createdAt), 'MMM d, yyyy')}
                      </span>
                      {blog.readTime && (
                        <span className="flex items-center">
                          <FiClock className="mr-1 h-4 w-4" />
                          {blog.readTime} min read
                        </span>
                      )}
                    </div>

                    {blog.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600 font-inter">
                        {blog.excerpt}
                      </p>
                    )}

                    {blog.tags?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={`${tag}-${index}`}
                            className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center pt-4 text-sm font-medium text-primary">
                      Read More
                      <FiArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
