import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [query, setQuery] = useState("");
  const [embedCodes, setEmbedCodes] = useState([])

  useEffect(() => {
    console.log('changed');
    (document.querySelector('#embed')as any).innerHTML = embedCodes.join('')
  }, [embedCodes])

  return (
    <main>
      <div className="navbar bg-base-100 bg-neutral">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              fetch(`/api/searchYT?q=${query}`)
                .then((res) => res.json())
                .then((json: any) => {
                  console.log(json)
                  setEmbedCodes(json)
                });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center m-0 md:m-4">
        <div
          className="hero md:w-3/4 w-full md:h-96 rounded-md h-screen"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div id="embed">
      </div>
    </main>
  );
}
