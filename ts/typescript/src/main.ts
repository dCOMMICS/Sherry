import './style.css'
import { setupCounter } from './counter.ts'
import './tutorial.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p> This is TYPESCRIPT TUTORIALIZATION </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
