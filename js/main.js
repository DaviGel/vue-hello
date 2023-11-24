'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Titolo principale della pagina',
    };
  },
}).mount('#title');
