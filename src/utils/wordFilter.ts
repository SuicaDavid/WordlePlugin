import { wordItem } from "../types/cardType";
import { common } from "../data/words"
export default function wordFilter(wordGrid: wordItem[][]): string[] {
    let words = common
    for (let i = 0; i < wordGrid.length; i++) {
        const wordList = wordGrid[i]
        for (let j = 0; j < wordList.length; j++) {
            const wordObject = wordList[j]
            if (wordObject.character !== '') {
                if (wordObject.color === "gray") {
                    words = words.filter(word => word.indexOf(wordObject.character) === -1)
                } else if (wordObject.color === 'yellow') {
                    words = words.filter(word => word.indexOf(wordObject.character) !== j)
                } else {
                    words = words.filter(word => word.indexOf(wordObject.character) === j)
                }
            }
        }
    }
    return words
}