type TypeShape = "rectangle" | "circle";

export function calculateArea(shape: TypeShape, dimentions: number[]): number {

    if (shape === 'rectangle' && dimentions.length === 2) {
        const [length, width] = dimentions;
        return length * width;
    } else if (shape === "circle" && dimentions.length === 1) {
        const [radius] = dimentions;

        return Math.PI * Math.pow(radius, 2);
    } else {
        // console.log('invalid shape or dimentions')
        throw new Error('invalid shape or dimentions')
    }
    return 0;
}

calculateArea("rectangle", [2, 3])
calculateArea("circle", [2])