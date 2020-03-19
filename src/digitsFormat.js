export default function digitsFormat(input) {
    const output = input.toString();
    return output[1] ? output : `0${output}`;
}