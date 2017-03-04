import express from 'express';
const router = express.Router();

import * as actions from '../parser'

router.get('/', actions.index);
router.get('/:logId', actions.serveLog);

export default router;
