export const getYouTubeVideoId = (url = '') => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/i
  );
  return match?.[1] || null;
};

export const getVideoThumbnail = (item) => {
  if (item.thumbnailUrl) return item.thumbnailUrl;
  const videoId = getYouTubeVideoId(item.url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};

export const getYouTubeEmbedUrl = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
};
