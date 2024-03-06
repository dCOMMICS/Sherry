const canvas = document.getElementById('moto');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // Drawing a rectangle

     // Event listeners for mouse and touch events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }

    function draw(e) {
      if (!isDrawing) return;

      let x, y;

      if (e.touches) {
        // For touch events
        x = e.touches[0].clientX - canvas.offsetLeft;
        y = e.touches[0].clientY - canvas.offsetTop;
      } else {
        // For mouse events
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
      }

      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'black';

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }

    function stopDrawing() {
      isDrawing = false;
      ctx.beginPath();
    }
    // Drawing a circle
    // ctx.fillStyle = 'blue';
    // ctx.beginPath();
    // ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    // ctx.fill();



    // const canvas = document.getElementById('moto');
    // const ctx = canvas.getContext('2d');

    // let x = 0;

    // function draw() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.fillStyle = 'red';
    //   ctx.fillRect(x, 50, 50, 50);
    //   x += 1;
    //   if (x > canvas.width) {
    //     x = 0;
    //   }
    // }

    // setInterval(draw, 10);