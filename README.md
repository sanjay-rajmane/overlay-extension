# overlay-extension
Overlay browser extension with React

# How to run
1. npm run build
2. chrome://extensions/
3. enable Developer mode
4. Click on Load unpacked button and upload dist folder

# Things to know
- Injecting a React bundle script (like chat-app.umd.js) into the page via <script> tag often fails due to Content Security Policies (CSPs), especially on websites like Salesforce, GitHub, etc.
  So, we are creating a single bundled content script that includes your React app. Check vite config for more details.
- Because of above step it will not run in browser with this code.. if need we need to update vite config
- Assets added in the assets folder usually takes path from browser url and appends path to it and image does not load, to fix it we are using extensions path to load images
 `browser.runtime.getURL('assets/react.svg');`
- As we are using Shadow DOM, to work inline css we are injecting CSS manually into Shadow DOM (Refer content.jsx file)


