
function openStream(cb) {
    navigator
        .mediaDevices
        .getUserMedia({audio: true, video: true})
        .then(stream => {
            cb(stream);
        })
        .catch(error => console.log(error));
}
module.exports = openStream;