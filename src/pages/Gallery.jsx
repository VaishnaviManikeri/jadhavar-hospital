import { useState, useEffect } from 'react';
import { FiImage, FiVideo, FiGrid, FiList, FiPlay } from 'react-icons/fi';
import { getGallery } from '../api';
import { getVideoThumbnail, getYouTubeEmbedUrl } from '../utils/video';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('grid');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await getGallery();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.type === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center font-poppins">
            Gallery
          </h1>
          <p className="text-center text-white/80 mt-2">
            Explore our collection of images and videos
          </p>
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                filter === 'image'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiImage className="w-4 h-4" />
              <span>Images</span>
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                filter === 'video'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiVideo className="w-4 h-4" />
              <span>Videos</span>
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-md transition-colors ${
                view === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md transition-colors ${
                view === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        ) : (
          <div className={view === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }>
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  view === 'list' ? 'flex items-center' : ''
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className={view === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-w-16 aspect-h-9'}>
                  {item.type === 'video' ? (
                    <div className="relative h-full min-h-48 bg-gray-900">
                      {getVideoThumbnail(item) ? (
                        <img
                          src={getVideoThumbnail(item)}
                          alt={`${item.title} video thumbnail`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <video
                          src={`${item.url}#t=0.1`}
                          className="w-full h-full object-cover"
                          muted
                          preload="metadata"
                        />
                      )}
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <FiPlay className="h-10 w-10 text-white" aria-hidden="true" />
                      </span>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className={view === 'list' ? 'p-4 flex-1' : 'p-4'}>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                  <div className="mt-2 flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.type === 'video'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              {selectedItem.type === 'video' ? (
                getYouTubeEmbedUrl(selectedItem.url) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(selectedItem.url)}
                    title={selectedItem.title}
                    className="aspect-video w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    poster={getVideoThumbnail(selectedItem)}
                    className="w-full max-h-[80vh] object-contain"
                    controls
                    autoPlay
                  />
                )
              ) : (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
              <div className="p-4 bg-black/50">
                <h3 className="text-white font-medium">{selectedItem.title}</h3>
                {selectedItem.description && (
                  <p className="text-gray-300 text-sm mt-1">{selectedItem.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
