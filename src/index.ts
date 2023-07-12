import { calculateArea } from "./exercises/ex_02.js"

try {
    const area = calculateArea("rectangle", [15, 3])
    const areacircle = calculateArea("circle", [2, 5])

    console.log(area)
    console.log(areacircle)

    console.log('hello world')
} catch (e: unknown) {
    console.error(e)
}