export default function digitsFormat(input: number): string {
    const output: string = input.toString();
    return output[1] ? output : `0${output}`;
}