'use client'

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="painel">
      <div className="contador-card">
        <span className="label">CONTADOR</span>

        <h1 className="titulo">{count}</h1>

        <button
          className="botao"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>
      </div>
    </main>
  );
}