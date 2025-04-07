const chars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function hackerEffect(element: HTMLElement, finalText: string, speed = 50) {
  let iteration = 0;
  const interval = setInterval(() => {
    const scrambled = finalText
      .split("")
      .map((char, index) => {
        if (index < iteration) return finalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.textContent = scrambled;

    iteration += 1 / 2; // slower animation
    if (iteration >= finalText.length) {
      clearInterval(interval);
      element.textContent = finalText;
    }
  }, speed);
}

export function revertText(element: HTMLElement, originalText: string) {
  element.textContent = originalText;
}
