import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import type { ServerRenderer } from 'vite-plugin-ssr-ssg';
import { Helmet } from 'react-helmet';

const render: ServerRenderer = async (url, manifest) => {
  const context = {} as { modules: Set<string> };

  const body = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  // Combine all the helmet data into headTags
  const headTags = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `;

  return { 
    bodyTags: body, 
    headTags,
    htmlAttrs: helmet.htmlAttributes.toString(),
    bodyAttrs: helmet.bodyAttributes.toString()
  };
};

export default render; 