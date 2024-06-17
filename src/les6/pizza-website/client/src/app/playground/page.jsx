"use client";
import { useState } from "react";
const defaultOptions = {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  mode: "cors",
};
export default function Playground() {
  const [response, setResponse] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setResponse("Loading...");
    // const body = JSON.stringify(event.target.playground.value);
    const response = await fetch("http://localhost:1337/api/playground", {
      method: "POST",
      ...defaultOptions,
      body: event.target.playground.value,
    });
    setResponse(await response.text());
  }

  async function onShow() {
    const response = await fetch("http://localhost:1337/api/playground", {
      method: "GET",
      ...defaultOptions,
    });
    setResponse(await response.text());
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={onSubmit}>
          <textarea
            id="playground"
            className="w-full h-96 bg-gray-800 text-white p-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg self-end">
            Submit
          </button>
        </form>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between ">
        <button
          type="button"
          onClick={onShow}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg self-end"
        >
          Show All Pizzas
        </button>
      </div>
      <pre>
        <code>{response}</code>
      </pre>
    </main>
  );
}
