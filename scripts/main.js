import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".fishList")


parentHTMLElement.innerHTML = FishList()

