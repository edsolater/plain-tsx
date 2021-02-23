import './h.ts'
import Hello from './Hello'
// document.querySelector('#app')!.innerHTML = `
//   <h1>${appName}</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

document.querySelector('#app')!.appendChild(Hello)
