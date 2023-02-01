// for more information on manifest action https://developer.chrome.com/docs/extensions/mv3/content_scripts/

//alert("HACKED")

hack = document.querySelector('body')

let image = chrome.runtime.getURL("matrix.jpg")



hack.style.backgroundImage = `url(${image})`