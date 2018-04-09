function openCamera() {
    navigator
        .mediaDevices
        .getUserMedia({audio: false, video: true})
        .then(stream => {
            console.log(stream);
            var video = document.getElementById('localStream');
            video.srcObject = stream;
            video.onloadedmetadata = () => video.play();
        })
        .catch(error => console.log(error));
}
module.exports = openCamera;