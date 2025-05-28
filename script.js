document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 8; i++) {
    const userInput = document.getElementById(`input${i}`);
    
    userInput.addEventListener('input', () => {
      const value = userInput.value;

      // Auto-fill the 4 corresponding auto inputs
      const base = 8 + (i - 1) * 4 + 1;
      for (let j = 0; j < 4; j++) {
        const autoInput = document.getElementById(`input${base + j}`);
        if (autoInput) autoInput.value = value;
      }
    });
  }

  // Print button
  document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
  });

  // Clear auto-filled inputs on form reset
  document.querySelector('form').addEventListener('reset', () => {
    for (let i = 9; i <= 40; i++) {
      document.getElementById(`input${i}`).value = '';
    }
  });
});
