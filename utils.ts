export function printOutput(inputs: any, fn : Function, targets? : Number[]) {
    for(let i = 0; i < inputs.length; i++) {
        if(targets) {
            console.log(fn(inputs[i], targets[i]));
        } else {
            console.log(fn(inputs[i]));
        }
    }
}