import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Mount into an existing container provided by content script
function mount(container: HTMLElement) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Expose mount globally for content script to call
(window as any).mountChatApp = mount;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// declare global {
//   interface Window {
//     mountChatApp?: (container: any) => void;
//     ChatApp?: any;
//   }
// }

// let root:any = null;

// function mountChatApp(container: any) {
//   if (!root) {
//     root = createRoot(container);
//   }
//   root.render(<App />);
// }

// window.mountChatApp = mountChatApp;
// window.ChatApp = { mountChatApp };

// window.addEventListener('message', (event) => {
//   if (event.source !== window) return;
//   if (event.data?.type === 'MOUNT_CHAT_APP') {
//     const container = document.getElementById('react-chat-root');
//     if (container && window.mountChatApp) {
//       window.mountChatApp(container);
//     }
//   }
// });

// // Signal content script the app is ready
// window.postMessage({ type: 'CHAT_APP_LOADED' }, '*');

// console.log('window.mountChatApp:', window.mountChatApp);
// console.log('window.ChatApp:', window.ChatApp);