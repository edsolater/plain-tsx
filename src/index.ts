import Hello from './Hello'

export function createElement(tag, props, ...childrens){
  console.log('tag: ', tag)
  console.log('props: ', props)
  console.log('childrens: ', childrens)
}
Reflect.set(window, "createElement", createElement);
// document.querySelector('#app')!.innerHTML = `
//   <h1>${appName}</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

document.querySelector('#app')!.appendChild(Hello)