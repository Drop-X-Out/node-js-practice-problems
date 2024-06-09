const args = process.argv.slice(2)
console.log(args)
const num1 = parseFloat(args[0])
const operator = args[1]
const num2 = parseFloat(args[2])


let result

switch(operator){
    case '+':
        result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break
    case '*':
        result = num1 * num2
        break
    default:
        console.log('Invalid Operator')
        return
}

console.log(`Result = ${result}`)
