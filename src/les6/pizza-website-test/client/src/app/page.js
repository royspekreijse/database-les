'use client';
import { useState,useEffect } from "react";

export default function Home() {
  const [response, setResponse] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setResponse("Loading...");
    const response = await fetch("http://localhost:1337/api/pizza", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ naam: event.target.naam_veld.value }),
    });
    setResponse(await response.text());
  }

  async function onShow() {
    const response = await fetch("http://localhost:1337/api/pizza", {
      method: "GET",
    });
    setResponse(await response.text());
  }

  useEffect(() => {
    onShow(); // On page load show all pizzas
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="naam_veld" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zoek een pizza</label>
            <input type="text" id="naam_veld" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoek naar een pizza" required />
          </div>
          <hr class="my-5 border-gray-300 dark:border-gray-600" />
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Opslaan</button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        Resultaten:
        {response}
      </div>
    </main>
  );
}
