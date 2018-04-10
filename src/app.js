const openStream = require('./openStream');
const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

openStream(function (stream) {
    playVideo(stream, 'localStream');
    const p = new Peer({
        initiator: location.hash === '#1',
        trickle: false,
        stream
    })
    p.on('signal', token => {
        $('#txtMySignal').val(JSON.stringify(token));
    });

    $('#btnConnect').on('click', function (e) {
        let friendSignal = JSON.parse($('#txtFriendSignal').val());
        p.signal(friendSignal);
    })
    p.on('stream', friendStream => playVideo(friendStream, 'friendStream'));
});
