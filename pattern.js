let trianglepattern = (num) => {
    for (i = num; i >= 1; i--) {
        let star = "*".repeat(i)
        console.log(star)
    }
    console.log("\n")
}
let prymaidpattern = (num) => {
    for (i = num; i >= 1; i--) {
        let space = " ".repeat(num - i)
        let star = "*".repeat(i * 2 - 1)
        console.log(space + star)
    }
}
let patternpoblem = (num) => {
    trianglepattern(num)
    prymaidpattern(num)
}
patternpoblem(5)
