import { rest } from 'msw';

export const handler = rest.get('https://dog.ceo/api/breeds/list/all', (req, res, ctx) => {
  console.log('in handler')
  return res(
    ctx.status(200),
    ctx.json({
      message: { 'hounds': ['redbone'] }
    })
  );
});
