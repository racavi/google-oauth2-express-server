const { Router } = require('express');
const { getAuthzUrl, exchangeAuthzCode } = require('../controllers/authz');

const router = Router();

router.get('/google/authz-url', getAuthzUrl)
router.post('/google/exchange-authz-code', exchangeAuthzCode);

module.exports = router;
