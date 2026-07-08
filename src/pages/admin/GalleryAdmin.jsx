import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiPlay, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import imageCompression from 'browser-image-compression';
import { getGallery, createGalleryItem, updateGalleryItem, deleteGalleryItem } from '../../api';
import { getVideoThumbnail } from '../../utils/video';

const GalleryAdmin = () => {
  const MAX_UPLOAD_SIZE = 100 * 1024 * 1024;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: 'image',
    description: '',
    url: '',
    order: 0
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [compressing, setCompressing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getGallery();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        type: item.type,
        description: item.description || '',
        url: item.url || '',
        order: item.order || 0
      });
      setPreview(item.type === 'video' ? getVideoThumbnail(item) || item.url : item.url);
    } else {
      setEditingItem(null);
      setFormData({
        title: '',
        type: 'image',
        description: '',
        url: '',
        order: 0
      });
      setPreview(null);
      setSelectedFile(null);
    }
    setShowModal(true);
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setPreview(null);
    setEditingItem(null);
    setFormData({
      title: '',
      type: 'image',
      description: '',
      url: '',
      order: 0
    });
    setError('');
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_UPLOAD_SIZE) {
        e.target.value = '';
        setSelectedFile(null);
        setPreview(null);
        setError('File is too large. Maximum upload size is 100 MB.');
        return;
      }

      setError('');
      setCompressing(true);

      try {
        const uploadFile = file.type.startsWith('image/') && file.size > 9 * 1024 * 1024
          ? await imageCompression(file, {
              maxSizeMB: 9,
              maxWidthOrHeight: 4096,
              useWebWorker: true,
            })
          : file;

        setSelectedFile(uploadFile);
        setPreview(URL.createObjectURL(uploadFile));

        if (file.type.startsWith('video/')) {
          setFormData(prev => ({ ...prev, type: 'video' }));
        } else if (file.type.startsWith('image/')) {
          setFormData(prev => ({ ...prev, type: 'image' }));
        }
      } catch {
        e.target.value = '';
        setSelectedFile(null);
        setPreview(null);
        setError('The image could not be prepared for upload. Try another image.');
      } finally {
        setCompressing(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!editingItem && !selectedFile && !formData.url.trim()) {
      setError('Select an image or video, or enter a media URL.');
      return;
    }

    setSaving(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append('title', formData.title);
      formDataObj.append('type', formData.type);
      formDataObj.append('description', formData.description);
      formDataObj.append('order', formData.order);
      
      if (selectedFile) {
        formDataObj.append('file', selectedFile);
      } else if (formData.url) {
        formDataObj.append('url', formData.url);
      }

      let response;
      if (editingItem) {
        response = await updateGalleryItem(editingItem._id, formDataObj);
        setItems(items.map(item => 
          item._id === editingItem._id ? response.data : item
        ));
      } else {
        response = await createGalleryItem(formDataObj);
        setItems([response.data, ...items]);
      }
      
      handleCloseModal();
    } catch (error) {
      setError(
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Could not connect to the gallery server.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteGalleryItem(id);
        setItems(items.filter(item => item._id !== id));
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Error deleting item');
      }
    }
  };

  const handleMove = async (id, direction) => {
    const index = items.findIndex(item => item._id === id);
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === items.length - 1)) {
      return;
    }

    const newItems = [...items];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    [newItems[index], newItems[swapIndex]] = [newItems[swapIndex], newItems[index]];
    
    // Update order numbers
    const updatedItems = newItems.map((item, idx) => ({
      ...item,
      order: idx
    }));
    
    setItems(updatedItems);

    // Update order in database
    try {
      await Promise.all(updatedItems.map(item => 
        updateGalleryItem(item._id, { order: item.order })
      ));
    } catch (error) {
      console.error('Error updating order:', error);
      fetchItems(); // Refresh if error
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Gallery Management</h1>
            <p className="text-sm text-gray-600">Manage images and videos for the gallery page</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            <FiPlus className="w-5 h-5 mr-2" />
            Add New Item
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={item._id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-200">
                {item.type === 'video' ? (
                  <div className="relative h-48 bg-gray-900">
                    {getVideoThumbnail(item) ? (
                      <img
                        src={getVideoThumbnail(item)}
                        alt={`${item.title} video thumbnail`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <video src={`${item.url}#t=0.1`} className="h-full w-full object-cover" muted preload="metadata" />
                    )}
                    <FiPlay className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-white" />
                  </div>
                ) : (
                  <img src={item.url} alt={item.title} className="w-full h-48 object-cover" />
                )}
                <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleMove(item._id, 'up')}
                    className="p-1 bg-white rounded-md shadow-sm hover:bg-gray-100"
                    disabled={index === 0}
                  >
                    <FiArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleMove(item._id, 'down')}
                    className="p-1 bg-white rounded-md shadow-sm hover:bg-gray-100"
                    disabled={index === items.length - 1}
                  >
                    <FiArrowDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.type === 'video' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-gray-600 truncate mt-1">{item.description}</p>
                )}
                <div className="flex justify-end space-x-2 mt-3">
                  <button
                    onClick={() => handleOpenModal(item)}
                    className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-1 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No gallery items yet. Click "Add New Item" to get started.</p>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">
                  {editingItem ? 'Edit Gallery Item' : 'Add Gallery Item'}
                </h2>
                <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload File
                  </label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {compressing ? 'Preparing image...' : 'Maximum source file size: 100 MB'}
                  </p>
                  {preview && (
                    <div className="mt-2">
                      {formData.type === 'video' ? (
                        <video src={preview} className="w-full h-32 object-cover rounded" controls />
                      ) : (
                        <img src={preview} alt="Preview" className="w-full h-32 object-cover rounded" />
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Or URL
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com/image.jpg"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving || compressing}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {compressing ? 'Preparing...' : saving ? 'Saving...' : editingItem ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryAdmin;
