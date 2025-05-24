import ReactDOM from 'react-dom/client';
import App from './App';

// === UI Elements ===
const button = document.createElement('button');
button.textContent = 'Chat1';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '10000';
button.style.padding = '10px 15px';
button.style.backgroundColor = '#007bff';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
document.body.appendChild(button);

// === Overlay Container with Shadow DOM ===
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.bottom = '60px';
overlay.style.right = '20px';
overlay.style.width = '350px';
overlay.style.height = '450px';
overlay.style.backgroundColor = 'white';
overlay.style.border = '1px solid #ccc';
overlay.style.borderRadius = '8px';
overlay.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
overlay.style.zIndex = '10001';
overlay.style.display = 'none';
overlay.style.flexDirection = 'column';
overlay.style.overflow = 'hidden';

document.body.appendChild(overlay);

const shadowRoot = overlay.attachShadow({ mode: 'open' });

// Inject CSS into shadow
import css from './index.css?inline';
const style = document.createElement('style');
style.textContent = css;
shadowRoot.appendChild(style);

console.log('Imported CSS:', css);

const container = document.createElement('div');
container.style.width = '100%';
container.style.height = '100%';
shadowRoot.appendChild(container);

// React Mount 
let root: ReactDOM.Root | null = null;

button.addEventListener('click', () => {
  const isVisible = overlay.style.display !== 'none';
  overlay.style.display = isVisible ? 'none' : 'block';

  if (!root && !isVisible) {
    root = ReactDOM.createRoot(container);
    root.render(<App />);
  }
});
