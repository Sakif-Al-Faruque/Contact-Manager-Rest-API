const express = require('express');
const router = express.Router();
const {
    testMiddleware,
    testMiddleware1
} = require('../middlewares/testMid');
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    midTestContact
} = require('../controllers/contactController');


router.route('/').get(getContacts);
router.route('/:id').get(getContact);
router.route('/').post(createContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);





router.use(testMiddleware);
router.route('/mid-test').get(midTestContact);

router.use(testMiddleware1);
router.route('/mid-test-1').get(midTestContact);

module.exports = router;