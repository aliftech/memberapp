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
        source: 'https://www.youtube.com/embed/yp0DpgsLx3o',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Full Album Lagu Naruto || Naruto Full Album',
        source: 'https://www.youtube.com/embed/QB1GNcwWsmg',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'BERHATI HATILAH DENGAN KEINGINAN KITA',
        source: 'https://www.youtube.com/embed/bsBl1cqiKok',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Prinsip Hidup Sang Samurai Legendaris Jepang Yang Tak Pernah Terkalahkan | Miyamoto Musashi',
        source: 'https://www.youtube.com/embed/OMK07MciNcE',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hidup Mengalir Seperti Apa Adanya | Lao Tzu',
        source: 'https://www.youtube.com/embed/NsI6FOx-j84',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '48 HUKUM KEKUASAAN | Ringkasan Buku FULL',
        source: 'https://www.youtube.com/embed/9cY_8Zc2wN4',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'MISTERI BESAR ABAD 21: BITCOIN',
        source: 'https://www.youtube.com/embed/W9PevRUavTA',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'KENYATAAN MENGERIKAN DARI PARA GENIUS | Nikola Tesla, Van Gogh, Dostoevsky Dan Lainnya',
        source: 'https://www.youtube.com/embed/ubtMhzXLII8',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apakah Nyawa Manusia Benar-Benar Setara? | Filosofi Monster Komprehensif',
        source: 'https://www.youtube.com/embed/KYYVMWDVXA4',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cara Memanipulasi Seperti Light Yagami (Kira) Dari Death Note',
        source: 'https://www.youtube.com/embed/bm4Vg6Wfi2M',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apa Arti Keadilan Sebenarnya? Siapa Yang Baik Dan Yang Jahat? | Filosofi Death Note Komprehensif',
        source: 'https://www.youtube.com/embed/r5EmylD4pUo',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'MANUSIA MENJADI TUHAN, GARA-GARA TEKNOLOGI',
        source: 'https://www.youtube.com/embed/ohGfR7F2-No',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ethical Hacking Course (2022): Red Teaming For Beginners',
        source: 'https://www.youtube.com/embed/OtcP8c4wZys',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'This Hacker Makes $160K a Day ⁠— After He Got Out of Federal Prison🎙Darknet Diaries Ep. 60: dawgyg',
        source: 'https://www.youtube.com/embed/nDgUsOS7kpE',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'His Accidental Virus Took Down the Worlds Biggest Website🎙Darknet Diaries Ep. 61: Samy',
        source: 'https://www.youtube.com/embed/8BzoEiK6evE',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Why Hacking is the Future of War',
        source: 'https://www.youtube.com/embed/15MaSayc28c',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Age of Easy Money (full documentary) | FRONTLINE',
        source: 'https://www.youtube.com/embed/EpMLAQbSYAw&t=783s',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Amazon Empire: The Rise and Reign of Jeff Bezos (full documentary) | FRONTLINE',
        source: 'https://www.youtube.com/embed/RVVfJVj5z8s',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Elon Musk: How I Became The Real Iron Man',
        source: 'https://www.youtube.com/embed/mh45igK4Esw',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'RUIN: Money, Ego and Deception at FTX',
        source: 'https://www.youtube.com/embed/3QpdU9LS540',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chinese brokers launder hundreds of millions for global crime groups | FT Film',
        source: 'https://www.youtube.com/embed/EjGIp7kdS6E',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How Money Laundering Actually Works | How Crime Works | Insider',
        source: 'https://www.youtube.com/embed/R5FSXCYrlt0',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How Millionaire Bankers Actually Work | Authorized Account | Insider',
        source: 'https://www.youtube.com/embed/9GumiLIxLMM',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Money Expert: "Do Not Buy A House!" 10 Ways To Make REAL Money: Ramit Sethi',
        source: 'https://www.youtube.com/embed/ORqd9QAC8OY',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The 3 MONEY MYTHS That Keep You Poor! (How To Build Wealth) | Jaspreet Singh & Jay Shetty',
        source: 'https://www.youtube.com/embed/Y3WmxC9uyns',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The BIGGEST LIES You have Been Told About Money That KEEP YOU POOR! | Jaspreet Singh',
        source: 'https://www.youtube.com/embed/xbSYHrl9eTY',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Robert Kiyosaki Exposes The System That Keeps You Poor & The Downfall of The USA | Rich Dad Poor Dad',
        source: 'https://www.youtube.com/embed/oUmnQie5Tjo',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Brian Tracy Business: URGENT: Do Not Launch Your Startup Without This Knowledge!',
        source: 'https://www.youtube.com/embed/MN7yfV4UuCI',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Marketing Expert: How to Get More Sales, Loyal Customers, and Bigger Promotions',
        source: 'https://www.youtube.com/embed/vM_1G1LCotU',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'BILLIONAIRE MINDSET | 50 Minutes for the NEXT 50 Years of Your LIFE',
        source: 'https://www.youtube.com/embed/mp9nPSOVZRc',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Think Faster, Talk Smarter with Matt Abrahams',
        source: 'https://www.youtube.com/embed/x6TsR3y5Qfg',
        thumbnail: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
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
