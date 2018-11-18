import types from './types';
import fakeAnnouncementsService from '../../../services/fakeAnnouncementsService';

export const fetchAnnouncmentsBegin = () => ({
  type: types.FETCH_ANNOUNCMENTS_BEGIN,
});

export const fetchAnnouncmentsSuccess = () => ({
  type: types.FETCH_ANNOUNCMENTS_SUCCESS,
});

export const setAnnouncments = announcments => ({
  type: types.SET_ANNOUNCMENTS,
  announcments,
});

export const fetchAnnouncmentsError = () => ({
  type: types.FETCH_ANNOUNCMENTS_ERROR,
});

export const fetchAnnouncments = () => async (dispatch) => {
  dispatch(fetchAnnouncmentsBegin());
  try {
    const announcments = await fakeAnnouncementsService();
    dispatch(setAnnouncments(announcments));
    dispatch(fetchAnnouncmentsSuccess());
  } catch (error) {
    console.log(error);
    dispatch(fetchAnnouncmentsError());
  }
};


export const addAnnouncement = announcment => ({
  type: types.ADD_ANNOUNCMENT,
  announcment,
});

export default {
  fetchAnnouncments,
  setAnnouncments,
  addAnnouncement,
};
