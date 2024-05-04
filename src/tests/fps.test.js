// Test if the FPS UI is visible on the page
test('FPS UI is visible', () => {
  const fpsUI = document.querySelector('.stats');
  expect(fpsUI).toBeInTheDocument();
});

// Test if the FPS UI updates correctly
test('FPS UI updates correctly', async () => {
  const fpsUI = document.querySelector('.stats');
  const initialFPS = fpsUI.textContent;

  // Simulate scene rendering
  const renderScene = () => {
    // Update scene and render
    tick();
    requestAnimationFrame(renderScene);
  };

  renderScene();

  // Wait for a short duration
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const updatedFPS = fpsUI.textContent;
  expect(updatedFPS).not.toBe(initialFPS);
});
