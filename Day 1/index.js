import fs from 'fs/promises'

const input = await fs.readFile('./input.txt', { encoding: 'utf8' })

//calculateNumbers(input)

function is_a_number(char) {
    return /^\d+$/.test(char)
}

function calculateNumbers(input) {
    let lines = input.split('\r\n')
    //console.log(lines[0])
    let values = lines.map((line) => {
        let lineNumbers = []
        for (let c = 0; c < line.length; c++) {
            if (is_a_number(line.charAt(c))) {
                lineNumbers.push(Number(line.charAt(c)))
            }
        }
        if (lineNumbers.length > 1) {
            return Number(`${lineNumbers[0]}${lineNumbers[lineNumbers.length - 1]}`)
        } else {
            return lineNumbers[0] * 11
        }

    })
    //console.log(values)

    for (let l = 0; l < lines.length; l++) {
        console.log(`${l} - ${lines[l]} - ${values[l]}`)
    }

    let sum = 0;
    for (let v = 0; v < values.length; v++) {
        sum += Number(values[v])
    }
    console.log('sum', sum)
}

function calculateWords(input) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let lines = input.split('\r\n')
    //console.log(lines[0])
    let values = lines.map((line) => {
        let lineWords = []
        for (let c = 0; c < line.length; c++) {
            if (is_a_number(line.charAt(c))) {
                lineWords.push(Number(line.charAt(c)))
            }
        }
        if (lineWords.length > 1) {
            return Number(`${lineWords[0]}${lineWords[lineWords.length - 1]}`)
        } else {
            return lineWords[0] * 11
        }

    })
    //console.log(values)

    for (let l = 0; l < lines.length; l++) {
        console.log(`${l} - ${lines[l]} - ${values[l]}`)
    }

    let sum = 0;
    for (let v = 0; v < values.length; v++) {
        sum += Number(values[v])
    }
    console.log('sum', sum)
}