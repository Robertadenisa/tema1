document.addEventListener('DOMContentLoaded', function () {
    var square = document.getElementById('square');
    var currentRotation = 0;

    window.addEventListener("deviceorientation", function (event) {
        var gamma = event.gamma;
        var rotation = Math.round(gamma / 90) * 90;

        if (rotation !== currentRotation) {
            currentRotation = rotation;
            var scale = Math.pow(2, rotation / 90);
            square.style.transform = 'scale(' + scale + ')';
        }
    });
});
