const Dump = require('../model/dump/dump');

module.exports = (req, res) => {
    let rooms = [];
    let bookings = [];
    let users = [];
    let parkings = [];

    if(Object.keys(req.body).length !== 5 ||
    req.body.backupCode !== process.env.BACKUP_CODE ||
    !Array.isArray(req.body.rooms) ||
    !Array.isArray(req.body.bookings) ||
    !Array.isArray(req.body.users) ||
    !Array.isArray(req.body.parkings)) {
        return res.status(400).send('Bad request');
    }
    const dump = new Dump({
        bookings: req.body.bookings,
        parkings: req.body.parkings,
        users: req.body.users,
        rooms: req.body.rooms
    });
    Dump.remove({})
    .then((response) => {
        return dump.save();
    })
    .then((response) => {
        console.log(response);
        return res.status(200).send('Backup complete');
    })
    .catch((error) => {
        console.log(error);
        return res.status(400).send('Bad request');
    });

};
