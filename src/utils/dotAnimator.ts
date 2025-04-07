export function animateDots(
    element: HTMLElement,
    baseText: string,
    speed: number = 500
  ): () => void {
    let dots = 0;
    let direction = 1;
  
    const interval = setInterval(() => {
      element.textContent = baseText + ".".repeat(dots);
  
      dots += direction;
      if (dots === 3 || dots === 0) {
        direction *= -1;
      }
    }, speed);
  
    // Return a cleanup function
    return () => clearInterval(interval);
  }
  