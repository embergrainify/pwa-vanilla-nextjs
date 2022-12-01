import Head from 'next/head';
import { useRef, useEffect } from 'react';

const test1 = () => {
  console.log('test1');
  const container = document.getElementById('container');
  const img = document.createElement('img');
  img.src = `${process.env.basePath}/vercel.svg`;
  container?.appendChild(img);
}

const test2 = () => {
  console.log('test2');
  const container = document.getElementById('container');
  const img = document.createElement('img');
  // img.src = `${process.env.basePath}/pic01.png`;
  img.src = `http://localhost:3000/pwa-vanilla-nextjs/pic01.png`;
  container?.appendChild(img);
}

export default function Home() {

  const didRunOnce = useRef(false);
  useEffect(() => {
    if (!didRunOnce.current) {
      console.log('didRunOnce');
      didRunOnce.current = true;

      // const basePath = 'pwa-vanilla-nextjs';

      if ('serviceWorker' in navigator) {
        console.log('serviceWorker in navigator');

        // window.addEventListener('load', function () {
        //     console.log('try registering serviceWorker after window loaded');
        //     navigator.serviceWorker.register(`${basePath}/serviceworker.js`)
        //         .then(reg => console.log('serviceworker registered', reg))
        //         .catch(err => console.log('serviceworker failed to register', err));
        // });

        // SCOPE https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
        // navigator.serviceWorker.register(`${process.env.basePath}/serviceworker.js`, {scope: `${process.env.basePath}/`})
        // SAME AS
        navigator.serviceWorker.register(`${process.env.basePath}/serviceworker.js`)
          .then(reg => console.log('serviceworker registered', reg))
          .catch(err => console.log('serviceworker failed to register', err));

        const detectSWUpdate = async () => {
          const registration = await navigator.serviceWorker.ready;

          registration.addEventListener("updatefound", event => {
            const newSW = registration.installing!;
            newSW.addEventListener("statechange", event => {
              if (newSW.state == "installed") {
                console.log('index.tsx / New service worker is installed, but waiting activation');
              }
            });
          })
        }
        detectSWUpdate();

      } else {
        console.log('not found serviceWorker in navigator');
      }

    }
  }, []);

  return (
    <div>
      <Head>
        <title>pwa-vanilla-nextjs</title>
        <meta name="description" content="Progressive Web App - Vanilla - Next.JS" />
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
      </Head>
      <div id="container" className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">
          Progressive Web App - Vanilla - Next.JS
        </h1>
        <button className="rounded-lg px-8 py-2 bg-red-600 text-gray-100" onClick={test1}>Test1</button>
        <button className="rounded-lg px-8 py-2 bg-green-600 text-gray-100" onClick={test2}>Test2</button>
        <img src={`${process.env.basePath}/vercel.svg`} />
        <div className='w-64 h-64 bg-slate-400'>
          {/* <img src={`${process.env.basePath}/pic01.png`} /> */}
          <img src={`http://localhost:3000/pwa-vanilla-nextjs/pic01.png`} />
          
        </div>
      </div>
    </div>
  )
}
