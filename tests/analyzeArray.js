function analyzeArray(arr) {
    let object = {};
    
    object.length = arr.length;
    object.average = arr.reduce((sum, x) => sum + x, 0) / arr.length;
    object.min = arr.reduce((min, x) => Math.min(min, x), arr[0]);
    object.max = arr.reduce((max, x) => Math.max(max, x), arr[0]);
    
    return object;
}

export default analyzeArray;