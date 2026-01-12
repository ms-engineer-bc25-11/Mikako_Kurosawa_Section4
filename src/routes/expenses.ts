
import { Router } from 'express';

const router = Router();

/**
 * GET /api/expenses
 * 支出一覧を取得する
 */
router.get('/', (req, res) => {
    res.status(200).json([
        {
            id: "string",
            date: "2025-01-01",
            amount: 1200,
            category: "food",
            note: "lunch"

        }
    ]);
});



/**
 * POST /expenses
 * 支出を新規登録する
 */
router.post('/', (req, res) => {
    const { date, amount, category, note } = req.body;
    
    res.status(201).json({
        id: "new-id",
        date,
        amount,
        category,
        note
    });
});

/**
 * PUT /expenses/:id
 * 指定した支出を更新する
 */
router.put('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        id,
        message: "updated"
    });
});

/**
 * DELETE /expenses/:id
 * 指定した支出を削除する
 */
router.delete('/:id', (req, res) => {
    res.status(204).end();
});


export default router;

