import { Router } from 'express';

const router = Router();

/**
 * GET /api/categories
 * カテゴリ一覧を取得する
 */

router.get('/', (req, res) => {
  res.status(200).json([{ id: 'food', name: 'Food' }]);
});

/**
 * POST /api/categories
 */
router.post('/', (req, res) => {
  res.status(201).json({ message: 'created' });
});

export default router;
