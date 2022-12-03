function findUniq(arr) {
    let histogram = {};
    let uniqueNumber;

    arr.forEach(element => {
        if(histogram[element] === undefined){
            histogram[element] = 1;
        } else {
            histogram[element] += 1;
        }
    });

    histogramArray = Object.entries(histogram);
    const histogramArrayLength = histogramArray.length;
    for (let index = 0; index < histogramArrayLength; index++) {
        if(histogramArray[index][1] === 1){
            uniqueNumber = parseInt(histogramArray[index][0]);
            break;
        };
    }

    if(uniqueNumber === undefined){
        return 'No unique number found';
    } else {
        return uniqueNumber;
    }
}

module.exports = findUniq;