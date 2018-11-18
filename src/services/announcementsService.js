import { API_URL } from './constants';

const announcementsService = async () => {
  const response = await fetch(`${API_URL}/announcements`);
  return response.json();
};

export default announcementsService;
