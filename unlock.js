chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => { 
        console.log(details)
        return { requestHeaders: [...details.requestHeaders.filter(val => val.name != "Referer"), { name: "Referer", value: "https://twitter.com" }] } },
    { urls: ['https://medium.com/*'] },
    ['requestHeaders', 'blocking', 'extraHeaders']
);