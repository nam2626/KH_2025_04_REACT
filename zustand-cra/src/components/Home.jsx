import React from 'react';
import Counter from '../components/Counter';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <main style={{ padding: 24, display: 'grid', gap: 24 }}>
      <h2>Zustand 실습</h2>
      <section>
        <Counter />
      </section>
      <section>
        <h3>ToDo</h3>
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}
