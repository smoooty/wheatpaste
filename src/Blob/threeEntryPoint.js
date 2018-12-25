import SceneManager from './SceneManager';

export default container => {
  const canvas = createCanvas(document, container);
  const sceneManager = new SceneManager(canvas);

  let canvasHalfWidth;
  let canvasHalfHeight;

  bindEventListeners();
  render();

  function createCanvas(document, container) {
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return canvas;
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    window.onmousemove = mouseMove;
    resizeCanvas();
  }

  function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    canvasHalfWidth = Math.round(canvas.width / 2);
    canvasHalfHeight = Math.round(canvas.height / 2);

    sceneManager.onWindowResize();
  }

  function mouseMove({ screenX, screenY }) {
    sceneManager.onMouseMove(
      screenX - canvasHalfWidth,
      screenY - canvasHalfHeight
    );
  }

  function render(time) {
    requestAnimationFrame(render);
    sceneManager.update();
  }
};
