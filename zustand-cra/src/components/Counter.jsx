import React from 'react';
import { useCounterStore } from '../stores/counterStore';

export default function Counter() {
  const count = useCounterStore((s) => s.count);
  const inc = useCounterStore((s) => s.inc);
  const dec = useCounterStore((s) => s.dec);
  const reset = useCounterStore((s) => s.reset);

  return (
    <div style={{ display: 'grid', gap: 8, maxWidth: 240 }}>
      <h3>Counter</h3>
      <div style={{ fontSize: 24 }}>count: {count}</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={dec}>-1</button>
        <button onClick={inc}>+1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
