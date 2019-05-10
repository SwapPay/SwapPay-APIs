import { Router } from 'express';
const router = Router();

/* Test Route. */
router.get('/auth', function(req, res, next) {
  res.status(200).json({
    status: 200,
    data: 'Endpoint auth'
  });
});

export default router;
