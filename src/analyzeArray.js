export default function analyzeArray(array){
    let analysis = {};

    analysis.average = array.reduce(
        (sum, value) => sum + value, 0
    ) / array.length;

    analysis.min = Infinity;
    analysis.max = -Infinity;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < analysis.min){
            analysis.min = array[i];
        }
        if(array[i] > analysis.max){
            analysis.max = array[i];
        }
    }

    analysis.length = array.length;

    return analysis
}