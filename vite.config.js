import { defineConfig } from 'vite';

const cleanUrlPages = [
  '/class-10-coaching-laxmi-nagar',
  '/class-11-coaching-laxmi-nagar',
  '/class-12-coaching-laxmi-nagar',
  '/jee-maths-coaching-laxmi-nagar',
  '/ca-foundation-coaching-laxmi-nagar',
  '/cma-coaching-laxmi-nagar',
  '/privacy',
  '/thank-you'
];

const cleanUrlPlugin = {
  name: 'pvn-clean-url-pages',
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      const requestUrl = request.url;
      if (!requestUrl) return next();
      const url = new URL(requestUrl, 'http://localhost');
      if (cleanUrlPages.includes(url.pathname)) {
        request.url = `${url.pathname}.html${url.search}`;
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, _response, next) => {
      const requestUrl = request.url;
      if (!requestUrl) return next();
      const url = new URL(requestUrl, 'http://localhost');
      if (cleanUrlPages.includes(url.pathname)) {
        request.url = `${url.pathname}.html${url.search}`;
      }
      next();
    });
  }
};

export default defineConfig({
  plugins: [cleanUrlPlugin]
});
