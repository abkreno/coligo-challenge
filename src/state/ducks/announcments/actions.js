import types from './types';

export const fetchAnnouncments = () => ({
  type: types.FETCH_ANNOUNCMENTS_BEGIN,
});

export const setAnnouncments = announcments => ({
  type: types.SET_ANNOUNCMENTS,
  announcments,
});

export default {
  fetchAnnouncments,
  setAnnouncments,
};
