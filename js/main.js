'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Titolo principale della pagina',
      imgPath: 'img/img01.jpg',
      imgAlt: 'img01',
    };
  },
}).mount('.container');
