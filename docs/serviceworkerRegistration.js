const basePath = 'pwa-vanilla-nextjs';

if ('serviceWorker' in navigator) {
    console.log('serviceWorker in navigator');

    // window.addEventListener('load', function () {
    //     console.log('try registering serviceWorker after window loaded');
    //     navigator.serviceWorker.register(`${basePath}/serviceworker.js`)
    //         .then(reg => console.log('serviceworker registered', reg))
    //         .catch(err => console.log('serviceworker failed to register', err));
    // });

    navigator.serviceWorker.register(`${basePath}/serviceworker.js`)
        .then(reg => console.log('serviceworker registered', reg))
        .catch(err => console.log('serviceworker failed to register', err));

    const detectSWUpdate = async () => {
        const registration = await navigator.serviceWorker.ready;

        registration.addEventListener("updatefound", event => {
            const newSW = registration.installing;
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