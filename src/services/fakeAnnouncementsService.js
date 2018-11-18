import fakeData from './fakeAnnouncementsData.json';

const fakeAnnouncementsService = async () => {
  const announcements = fakeData;
  return new Promise((resolve) => {
    setTimeout(() => resolve(announcements), 1500);
  });
};

export default fakeAnnouncementsService;
