import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';

// This is the entry point for Cloudflare Pages Functions.
// We're using Hono to create a simple router.
// All requests will be passed to the RSSHub handler.

import { handler } from './dist/index.js';

const app = new Hono();

// Serve static assets from the "assets" directory
app.use('/assets/*', serveStatic({ root: './' }));

// Pass all other requests to the RSSHub handler
app.all('*', handler);

export default app;
