export function parseMolecule(formula: string) {
    const formulaItems: string[] = [];

    for (let i = 0; i < formula.length; i++) {
        const extract = /^(([\(\[\{}])|([A-Z][a-z]?)|([\)\]\}])|([0-9]+))/
            .exec(formula.slice(i, formula.length));

        if (extract && extract.length > 0) {
            formulaItems.push(convertBrace(extract[0]));
        }
    }

    return parseTokenizedMolecule(formulaItems, 1);
}

function parseTokenizedMolecule(tokens: string[], coef: number) {
    let output: {[key: string]: number} = {};

    while (tokens.indexOf('(') > -1) {
        const openingBraceId = tokens.indexOf('(');

        const closingBraceId = findMatchingBrace(
            tokens.slice(openingBraceId + 1)
        ) + openingBraceId + 1;

        const nextIsNumber = !isNaN(+tokens[closingBraceId + 1]);

        const outputTmp = parseTokenizedMolecule(tokens.slice(
            openingBraceId + 1,
            closingBraceId
        ), nextIsNumber ? +tokens[closingBraceId + 1] : 1);

        tokens.splice(
            openingBraceId,
            closingBraceId - openingBraceId + (nextIsNumber ? 2 : 1)
        );

        output = mergeParts(output, outputTmp, coef);
    }

    return addParseAtoms(output, tokens, coef);
}

function addParseAtoms(
    output: {[key: string]: number},
    tokens: string[],
    coef: number
) {
    for (let id = 0; id < tokens.length; id++) {
        if (isNaN(+tokens[id])) {
            output[tokens[id]] =
                (output[tokens[id]] ? output[tokens[id]] : 0) +
                (isNaN(+tokens[id + 1]) ? 1 : +tokens[id + 1]) * coef
            ;
        }
    }

    return output;
}

function mergeParts(
    outputOut: {[key: string]: number},
    outputIn: {[key: string]: number},
    coef: number
) {
    for (const atom in outputIn) {
        outputOut[atom] =
            (outputOut[atom] ? outputOut[atom] : 0) +
            (outputIn[atom] * coef)
        ;
    }

    return outputOut;
}

function convertBrace(value: string) {
    return ['(', '[', '{'].indexOf(value) > -1 ?
        '(' :
        (
            [')', ']', '}'].indexOf(value) > -1 ?
                ')' :
                value
        )
    ;
}

function findMatchingBrace(tokens: string[]) : number {
    let braceId = 1;
    let id = 0;

    for (const v of tokens) {
        if (v === '(') {
            braceId++;
        }

        if (v === ')') {
            braceId--;
        }

        if (braceId === 0) {
            return id;
        }

        id++;
    }

    return 0;
}
