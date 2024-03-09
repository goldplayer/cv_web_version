var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = 'assets/img/avatar_img.jpg'; // Замените на путь к вашему изображению

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        animate();
    };

    var scale = 1;
    var direction = 1;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(scale, scale);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();

        scale += direction * 0.0001;
        if (scale <= 1 || scale >= 1.2) direction *= -1; // Изменяйте эти значения для разных эффектов

        requestAnimationFrame(animate);
    }