const request = require('supertest');
const express = require('express');

// Create a simple test app
const app = express();
app.use(express.json());

// Add a test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

describe('Server', () => {
  it('should respond to test endpoint', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Server is running' });
  });

  it('should handle 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
  });
});
