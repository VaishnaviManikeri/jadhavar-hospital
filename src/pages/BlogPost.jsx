import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FiCalendar, FiClock, FiUser, FiShare2, FiArrowLeft } from 'react-icons/fi';
import { getBlogBySlug } from '../api';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    // Add drop-cap class to first paragraph
    if (contentRef.current) {
      const firstParagraph = contentRef.current.querySelector('p:first-child');
      if (firstParagraph) {
        firstParagraph.classList.add('drop-cap');
      }
    }
  }, [blog]);

  const fetchBlog = async () => {
    try {
      const response = await getBlogBySlug(slug);
      setBlog(response.data);
    } catch (error) {
      setError('Blog post not found');
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt || blog.title,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
          {error || 'Blog post not found'}
        </h1>
        <Link
          to="/blog"
          className="flex items-center text-primary hover:text-primary-dark transition-colors font-inter"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: '0%' }}
          id="progress-bar"
        />
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors font-inter"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600 font-inter">
            <span className="flex items-center">
              <FiUser className="w-4 h-4 mr-2 text-primary" />
              {blog.author || 'Admin'}
            </span>
            <span className="flex items-center">
              <FiCalendar className="w-4 h-4 mr-2 text-primary" />
              {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
            </span>
            {blog.readTime && (
              <span className="flex items-center">
                <FiClock className="w-4 h-4 mr-2 text-primary" />
                {blog.readTime} min read
              </span>
            )}
          </div>
          {/* Share Button */}
          <button
            onClick={handleShare}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
          >
            <FiShare2 className="w-4 h-4 mr-2" />
            Share
          </button>
        </header>

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="mb-8">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        {/* Content */}
        <div
          ref={contentRef}
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

       
      </article>

      {/* Scroll to top on mount */}
      <script>
        {`window.scrollTo(0, 0);`}
      </script>
    </div>
  );
};

export default BlogPost;