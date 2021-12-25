/*
* This program is a text reverser.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-05
*/

import * as readline from 'readline'

function textReverser (str: string) {
  // this function is a text reverser function.
  if (str.length === 0) {
    return str
  } else {
    const lastChar: string = str.substr(str.length - 1)
    const restOfStr: string = str.substr(0, str.length - 1)
    const returnStr: string = lastChar + textReverser(restOfStr)
    return returnStr
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input a text to reverse: ', function (answer) {
  const text: string = textReverser(answer)
  console.log('The reverse of ' + answer + ' is ' + text)
  rl.close()
})
