import types from './types';

export const fetchAnnouncments = () => ({
  type: types.FETCH_ANNOUNCEMENTS_BEGIN,
});

export const setAnnouncments = announcments => ({
  type: types.SET_ANNOUNCEMENTS,
  announcments,
});

export default {
  fetchAnnouncments,
  setAnnouncments,
};
