import fakeData from './fakeData.json';

const fakeAnnouncementsService = async () => {
  const announcements = fakeData;
  return new Promise((resolve) => {
    setTimeout(() => resolve(announcements), 3000);
  });
};

export default fakeAnnouncementsService;
