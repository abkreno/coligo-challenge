import types from './types';

export const fetchAnnouncments = () => ({
  type: types.FETCH_ANNOUNCMENTS_BEGIN,
});

export const setAnnouncments = announcments => ({
  type: types.SET_ANNOUNCMENTS,
  announcments,
});

export const addAnnouncement = announcment => ({
  type: types.ADD_ANNOUNCMENT,
  announcment,
});

export default {
  fetchAnnouncments,
  setAnnouncments,
  addAnnouncement,
};
