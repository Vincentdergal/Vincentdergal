'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'Xigp0y+EY0vYET0Fiy6/BAe0nP0R35tyKWZ/qIrFbEY=',
          password:
            '$2b$10$4SF7v0DYGeIbP2jTtISdRuHpDR9v8lSfcASDlFM6WsQ7Sv/t8cWRW',
          role: 'admin',
          firstname: 'Vincent',
          lastname: 'Dergal',
          profilePic:
            'http://localhost:8080/images/user/seed-user11650100624104.jpg',
          linkedinProfile: 'https://www.linkedin.com/',
          twitterProfile: 'https://www.twitter.com/',
          facebookProfile: 'https://www.facebook.com/',
          instagramProfile: 'https://www.instagram.com/',
          bio: "A mon bureau, les pieds dans l'eau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'DrwCq+V/YBXqCo64BW8FcnhPGnKwP9iLtCO+LxXOsAI=',
          password:
            '$2b$10$UHRaBNrferUhvqHLYNgyTeqKM1EhZzgJOlJSx2tooAEjLC8eIk20O',
          role: 'moderator',
          firstname: 'Jimmy',
          lastname: 'France',
          profilePic:
            'http://localhost:8080/images/user/Gunter-Schlierkamp.jpeg',
          linkedinProfile: 'https://www.linkedin.com/',
          twitterProfile: '',
          facebookProfile: '',
          instagramProfile: '',
          bio: 'Il fait trop chaud pour travailler !',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'iLnDZ07BGMhqmjivu1EE9SOVHMXPEmd44ZmA2PYqkcE=',
          password:
            '$2b$10$FCiDFaWNCWLh6a/QebKl8.YS.SfHmpw3vyDrryuQcLE04O9YDLay6',
          role: 'user',
          firstname: 'Victor',
          lastname: 'Fear',
          profilePic: 'http://localhost:8080/images/user/default-profile.png',
          linkedinProfile: 'https://www.linkedin.com/',
          twitterProfile: 'https://www.linkedin.com/',
          facebookProfile: '',
          instagramProfile: '',
          bio: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
