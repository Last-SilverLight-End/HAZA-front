import { useBearStore } from '@/libs/store';

export default function hello() {
  return (
    <div>
      <h1>Hello World</h1>
      <Controls />
      <Counter />
    </div>
  )
}

function Controls() {
  const inc = useBearStore(state => state.increasePopulation)
  return <button onClick={inc}>one up</button>
}

function Counter() {
  const count = useBearStore(state => state.bears)
  return <div>{count}</div>
}