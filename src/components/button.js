export function Button({ text, className, size }) {
  return `
    <button class="${className} ${size}" type="submit">${text}</button>
  `;
}
