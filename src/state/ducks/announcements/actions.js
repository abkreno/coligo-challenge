import types from './types';

export const fetchAnnouncments = () => ({
  type: types.FETCH_ANNOUNCEMENTS_BEGIN,
});

export const setAnnouncements = announcements => ({
  type: types.SET_ANNOUNCEMENTS,
  announcements,
});

export default {
  fetchAnnouncments,
  setAnnouncements,
};
