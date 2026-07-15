import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const login = (username, password) => 
  api.post('/auth/login', { username, password });

export const verifyToken = () => 
  api.get('/auth/verify');

// Gallery APIs
export const getGallery = () => 
  api.get('/gallery');

export const createGalleryItem = (data) => 
  api.post('/gallery', data);

export const updateGalleryItem = (id, data) => 
  api.put(`/gallery/${id}`, data);

export const deleteGalleryItem = (id) => 
  api.delete(`/gallery/${id}`);

// Blog APIs
export const getBlogs = () => 
  api.get('/blogs');

export const getBlogBySlug = (slug) => 
  api.get(`/blogs/${slug}`);

export const createBlog = (data) => 
  api.post('/blogs', data);

export const updateBlog = (id, data) => 
  api.put(`/blogs/${id}`, data);

export const deleteBlog = (id) => 
  api.delete(`/blogs/${id}`);

// Appointment API
export const bookAppointment = (formData) => 
  api.post('/appointments', formData);

// Notice APIs
// export const getNotices = () => 
//   api.get('/notices');

// export const getActiveNotices = () => 
//   api.get('/notices/active');

// export const createNotice = (data) => 
//   api.post('/notices', data);

// export const updateNotice = (id, data) => 
//   api.put(`/notices/${id}`, data);

// export const deleteNotice = (id) => 
//   api.delete(`/notices/${id}`);

export default api;