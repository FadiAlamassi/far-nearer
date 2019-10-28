const tape = require('tape');
const request = require('supertest');

const app = require('../server/app');

tape('Test Empty building route | GET', t => {
  request(app)
    .get('/api/v1/empty-buildings')
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const expectedKeys = 16;
        t.equals(
          Object.keys(res.body.data[0]).length,
          expectedKeys,
          'Number of the object keys should be 16',
        );
        t.end();
      }
    });
});