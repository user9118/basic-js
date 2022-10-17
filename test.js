function repeater(str, options) {
    str = String(str);
    let newStr = '';
    let repeatN = options['repeatTimes'];
    if (repeatN == undefined) {
        repeatN = 1;
    }
    console.log(repeatN)
    let separatorN = options['separator'];
    if (separatorN == 'undefined') {
        separatorN = '+';
    }
    console.log(separatorN)
    let additionN = String(options['addition']);
    if (additionN == 'undefined') {
        additionN = '';
    }
    console.log(additionN)
    let additionRepeatTimesN = options['additionRepeatTimes'];
    if (additionRepeatTimesN == undefined) {
        additionRepeatTimesN = 1;
    }
    console.log(additionRepeatTimesN)
    let additionSeparatorN = String(options['additionSeparator']);
    if (additionSeparatorN == 'undefined') {
        additionSeparatorN = '|';
    }
    console.log(additionSeparatorN)

    for (let i = 0; i < repeatN; i++) {
        let additionStr = '';
        if (additionRepeatTimesN > 0) {
            for (let j = 0; j < additionRepeatTimesN; j++) {
                additionStr = additionStr + additionN + additionSeparatorN;
            }
            additionStr = additionStr.slice(0, - additionSeparatorN.length);
        } else {
            additionStr = '';
        }
        newStr = newStr + str + additionStr + separatorN;
    }
    newStr = newStr.slice(0, - separatorN.length)
    console.log(newStr);
}

repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });