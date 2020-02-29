export function parseMolecule(formula: string) {
    let formulaItems: string[] = [];

    for (var i = 0; i < formula.length; i++) {
        let extract = /^(([\(\[\{}])|([A-Z][a-z]?)|([\)\]\}])|([0-9]+))/
            .exec(formula.slice(i, formula.length));

        if (extract && extract.length > 0) {
            formulaItems.push(
                ['(', '[', '{'].indexOf(extract[0]) > -1 ?
                    '(' :
                    (
                        [')', ']', '}'].indexOf(extract[0]) > -1 ?
                            ')' :
                            extract[0]
                    )
            );
        }
    }

    return parseTokenizedMolecule(formulaItems, 1);
}

function findMatchingBrace(tokens: string[]) : number {
    let braceId = 1;
    let id = 0;

    for (const i in tokens) {
        if (tokens[i] == '(') {
            braceId++;
        }

        if (tokens[i] == ')') {
            braceId--;
        }

        if (braceId == 0) {
            return id;
        }

        id++;
    }

    return 0;
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

        for (const atom in outputTmp) {
            output[atom] =
                (output[atom] ? output[atom] : 0) +
                (outputTmp[atom] * coef)
            ;
        }
    }

    for (let id = 0; id < tokens.length; id++) {
        if (isNaN(+tokens[id])) {
            output[tokens[id]] =
                (output[tokens[id]] ? output[tokens[id]] : 0) +
                ((isNaN(+tokens[id + 1]) ? 1 : +tokens[id + 1])) * coef
            ;
        }
    }

    return output;
}
