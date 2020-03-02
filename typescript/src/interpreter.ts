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
                tape.substr(tapePointer + 1);
        }

        if (code[codeStep] == '>') {
            tapePointer++;
        }

        if (code[codeStep] == '<') {
            tapePointer--;
        }

        if (code[codeStep] == '[' && tape[tapePointer] == "0") {
            codeStep = getOtherBrace(bracketsRelations, codeStep, false);
        }

        if (code[codeStep] == ']' && tape[tapePointer] == "1") {
            codeStep = getOtherBrace(bracketsRelations, codeStep, true);
        }

        if (tapePointer < 0 || tapePointer >= tape.length) {
            codeStep = code.length;
        }
    }

    return tape;
}

function getOtherBrace(
    bracketsRelations: BracketRelation[],
    codeStep: number,
    direction: boolean
) {
    let bracket = bracketsRelations.find(
        (v) => (direction ? v.close : v.open) == codeStep
    );

    return bracket == undefined ? 0 :
        (direction ? bracket.open : bracket.close);
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
