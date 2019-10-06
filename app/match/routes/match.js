const router = require('express').Router();
const MatchController = require('../controllers/matchContoller');
const MatchEventController = require('../controllers/matchEventController');

router.get('/', (req, res) => {
    res.json(MatchController.getMatch());
});

router.post('/createMatch', (req, res) => {
    const match = req.body;
    MatchController.createMatch(match.p1Name, match.p2Name);
    MatchEventController.emitMatchUpdate(MatchController.getMatch());
    res.json('ok');

});

router.post('/addPointP1', (req, res) => {
    MatchController.addPointPlayer1();
    MatchEventController.emitPlayerOneScoreUpdate(MatchController.getCurrentSet().getP1Points());
    res.json('ok');
});

router.post('/removePointP1', (req, res) => {
    MatchController.removePointPlayer1();
    MatchEventController.emitPlayerOneScoreUpdate(MatchController.getCurrentSet().getP1Points());
    res.json('ok');
});

router.post('/addPointP2', (req, res) => {
    MatchController.addPointPlayer2();
    MatchEventController.emitPlayerTwoScoreUpdate(MatchController.getCurrentSet().getP2Points());
    res.json('ok');
});

router.post('/removePointP2', (req, res) => {
    MatchController.removePointPlayer2();
    MatchEventController.emitPlayerTwoScoreUpdate(MatchController.getCurrentSet().getP2Points());
    res.json('ok');
});

router.post('/addSet', (req, res) => {
    MatchController.addSet();
    MatchEventController.emitSetsUpdate(MatchController.getSets());
    res.json('ok');
});

router.post('/removeSet', (req, res) => {
    MatchController.removeSet();
    MatchEventController.emitSetsUpdate(MatchController.getSets());
    res.json('ok');
});

router.delete('/resetMatch', (req, res) => {
    MatchController.reset();
    MatchEventController.emitMatchUpdate(MatchController.getMatch());
    res.json('ok');
});

router.post('/setWinnerP1', (req, res) => {
    MatchController.setWinnerP1();
    MatchEventController.emitSetsUpdate(MatchController.getSets());
    res.json('ok');
});

router.post('/setWinnerP2', (req, res) => {
    MatchController.setWinnerP2();
    MatchEventController.emitSetsUpdate(MatchController.getSets());
    res.json('ok');
});



module.exports = router;