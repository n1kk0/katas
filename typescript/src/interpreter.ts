interface BracketRelation {
    open: number,
    close: number
}

export function interpreter(code: string, tape: string): string {
    const bracketsRelations = parseBrackets(code);
    let tapePointer = 0;

    for(let codeStep = 0; codeStep < code.length; codeStep++) {
        if (code[codeStep] == '*') {
            tape = tape.substr(0, tapePointer) +
                (tape[tapePointer] == "0" ? "1" : "0") +
                tape.substr(tapePointer + 1)
            ;
        }

        if (code[codeStep] == '>') {
            tapePointer++;
        }

        if (code[codeStep] == '<') {
            tapePointer--;
        }

        if (code[codeStep] == '[' && tape[tapePointer] == "0") {
            codeStep = getClosingBrace(bracketsRelations, codeStep);
        }

        if (code[codeStep] == ']' && tape[tapePointer] == "1") {
            codeStep = getOpeningBrace(bracketsRelations, codeStep);
        }

        if (tapePointer < 0 || tapePointer >= tape.length) {
            codeStep = code.length;
        }
    }

    return tape;
}

function getOpeningBrace(
    bracketsRelations: BracketRelation[],
    codeStep: number
) {
    let bracket = bracketsRelations.find((v) => v.close == codeStep);

    return bracket == undefined ? 0 : bracket.open;
}

function getClosingBrace(
    bracketsRelations: BracketRelation[],
    codeStep: number
) {
    let bracket = bracketsRelations.find((v) => v.open == codeStep);

    return bracket == undefined ? 0 : bracket.close;
}

function parseBrackets(code: string): BracketRelation[] {
    let bracketsStack: number[] = [];
    let bracketsRelations: BracketRelation[] = [];
  
    for (var i = 0; i < code.length; i++) {
        if (code[i] == '[') {
            bracketsStack.push(i);
        } else if (code[i] == ']') {
            bracketsRelations.push({
                open: bracketsStack.pop() || 0,
                close: i
            });
        }
    }

    return bracketsRelations;
}
