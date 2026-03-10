export function Input({ label, name, id, type = 'text', placeholder = '' }) {
  return `
    <div class="formulario">
      <label for="${id}">${label}</label>
      <input 
        type="${type}" 
        name="${name}" 
        id="${id}" 
        placeholder="${placeholder}" 
      />
    </div>
  `;
}

import '../styles/components/input.css'
