'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('videos', [
      {
        title: 'Nasihat Finansial : Pemikiran rasional tentang uang',
        source: 'https://www.youtube.com/watch?v=yp0DpgsLx3o',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Full Album Lagu Naruto || Naruto Full Album',
        source: 'https://www.youtube.com/watch?v=QB1GNcwWsmg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'BERHATI HATILAH DENGAN KEINGINAN KITA',
        source: 'https://www.youtube.com/watch?v=bsBl1cqiKok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Prinsip Hidup Sang Samurai Legendaris Jepang Yang Tak Pernah Terkalahkan | Miyamoto Musashi',
        source: 'https://www.youtube.com/watch?v=OMK07MciNcE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hidup Mengalir Seperti Apa Adanya | Lao Tzu',
        source: 'https://www.youtube.com/watch?v=NsI6FOx-j84',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '48 HUKUM KEKUASAAN | Ringkasan Buku FULL',
        source: 'https://www.youtube.com/watch?v=9cY_8Zc2wN4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'MISTERI BESAR ABAD 21: BITCOIN',
        source: 'https://www.youtube.com/watch?v=W9PevRUavTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'KENYATAAN MENGERIKAN DARI PARA GENIUS | Nikola Tesla, Van Gogh, Dostoevsky Dan Lainnya',
        source: 'https://www.youtube.com/watch?v=ubtMhzXLII8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apakah Nyawa Manusia Benar-Benar Setara? | Filosofi Monster Komprehensif',
        source: 'https://www.youtube.com/watch?v=KYYVMWDVXA4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cara Memanipulasi Seperti Light Yagami (Kira) Dari Death Note',
        source: 'https://www.youtube.com/watch?v=bm4Vg6Wfi2M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apa Arti Keadilan Sebenarnya? Siapa Yang Baik Dan Yang Jahat? | Filosofi Death Note Komprehensif',
        source: 'https://www.youtube.com/watch?v=r5EmylD4pUo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'MANUSIA MENJADI TUHAN, GARA-GARA TEKNOLOGI',
        source: 'https://www.youtube.com/watch?v=ohGfR7F2-No',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ethical Hacking Course (2022): Red Teaming For Beginners',
        source: 'https://www.youtube.com/watch?v=OtcP8c4wZys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'This Hacker Makes $160K a Day ⁠— After He Got Out of Federal Prison🎙Darknet Diaries Ep. 60: dawgyg',
        source: 'https://www.youtube.com/watch?v=nDgUsOS7kpE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'His Accidental Virus Took Down the Worlds Biggest Website🎙Darknet Diaries Ep. 61: Samy',
        source: 'https://www.youtube.com/watch?v=8BzoEiK6evE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Why Hacking is the Future of War',
        source: 'https://www.youtube.com/watch?v=15MaSayc28c',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Age of Easy Money (full documentary) | FRONTLINE',
        source: 'https://www.youtube.com/watch?v=EpMLAQbSYAw&t=783s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Amazon Empire: The Rise and Reign of Jeff Bezos (full documentary) | FRONTLINE',
        source: 'https://www.youtube.com/watch?v=RVVfJVj5z8s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Elon Musk: How I Became The Real Iron Man',
        source: 'https://www.youtube.com/watch?v=mh45igK4Esw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'RUIN: Money, Ego and Deception at FTX',
        source: 'https://www.youtube.com/watch?v=3QpdU9LS540',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chinese brokers launder hundreds of millions for global crime groups | FT Film',
        source: 'https://www.youtube.com/watch?v=EjGIp7kdS6E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How Money Laundering Actually Works | How Crime Works | Insider',
        source: 'https://www.youtube.com/watch?v=R5FSXCYrlt0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How Millionaire Bankers Actually Work | Authorized Account | Insider',
        source: 'https://www.youtube.com/watch?v=9GumiLIxLMM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Money Expert: "Do Not Buy A House!" 10 Ways To Make REAL Money: Ramit Sethi',
        source: 'https://www.youtube.com/watch?v=ORqd9QAC8OY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The 3 MONEY MYTHS That Keep You Poor! (How To Build Wealth) | Jaspreet Singh & Jay Shetty',
        source: 'https://www.youtube.com/watch?v=Y3WmxC9uyns',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The BIGGEST LIES You have Been Told About Money That KEEP YOU POOR! | Jaspreet Singh',
        source: 'https://www.youtube.com/watch?v=xbSYHrl9eTY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Robert Kiyosaki Exposes The System That Keeps You Poor & The Downfall of The USA | Rich Dad Poor Dad',
        source: 'https://www.youtube.com/watch?v=oUmnQie5Tjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Brian Tracy Business: URGENT: Do Not Launch Your Startup Without This Knowledge!',
        source: 'https://www.youtube.com/watch?v=MN7yfV4UuCI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Marketing Expert: How to Get More Sales, Loyal Customers, and Bigger Promotions',
        source: 'https://www.youtube.com/watch?v=vM_1G1LCotU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'BILLIONAIRE MINDSET | 50 Minutes for the NEXT 50 Years of Your LIFE',
        source: 'https://www.youtube.com/watch?v=mp9nPSOVZRc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Think Faster, Talk Smarter with Matt Abrahams',
        source: 'https://www.youtube.com/watch?v=x6TsR3y5Qfg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
