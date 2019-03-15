export function getSelectColor() {
    return '#113871';
}

export function getHighlightedColor() {
    return '#DD55DD';
}

export function getWhiteColor() {
    return '#F7FFF7';
}

export function getCNVColorMask() {
    // return '#1A535C';
    return [0, 0, 200];
}

export function getMutationColorMask() {
    // return '#DD55DD';
    return [250, 0, 0];
    // return [26, 83, 92];
}

export function getGeneColorMask() {
    return [26, 83, 92];
}


export function getGeneSetColorMask() {
    return [255, 10, 10];
}

export function adjustScore(score) {
    return Math.log10(100 * score);
}

/**
 *
 * https://github.com/jingchunzhu/wrangle/blob/master/xenaGo/chiSquare.py#L62
 * @returns {*}
 * @param observed
 * @param expected
 * @param total
 *
 */
export function scoreChiSquaredData(observed, expected, total) {
    let expected2 = total - expected;
    let observed2 = total - observed;
    let chiSquaredValue = Math.pow(expected - observed,2.0)  / expected + Math.pow(expected2 - observed2,2.0) / expected2;
    chiSquaredValue = chiSquaredValue * ((expected > observed) ? -1 : 1);
    return chiSquaredValue;
}


/**
 * label is just for density
 * @param score
 * @param numSamples
 * @param geneCount
 * @returns {*}
 */
export function scoreData(score, numSamples, geneCount) {
    if (score === 0) {
        return 0;
    }
    // let inputScore = score / (numSamples * geneCount);
    // return adjustScore(inputScore);
    return score / (numSamples * geneCount);
}

