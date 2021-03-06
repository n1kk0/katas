interface BracketRelation {
    open: number,
    close: number
}

export function interpreter(code: string, tape: string): string {
    const bracketsRelations = parseBrackets(code);
    let tapePointer = 0;
    let codeStep = 0;

    while (codeStep < code.length) {
        switch (code[codeStep]) {
            case '*':
                tape = tape.substr(0, tapePointer) +
                    switchTapeValue(tape[tapePointer]) +
                    tape.substr(tapePointer + 1);

                break;
            case '>':
                tapePointer++;
                break;
            case '<':
                tapePointer--;
                break;
            case '[':
                if (tape[tapePointer] === "0") {
                    codeStep = getOtherBrace(
                        bracketsRelations,
                        codeStep,
                        false
                    );
                }

                break;
            case ']':
                if (tape[tapePointer] === "1") {
                    codeStep = getOtherBrace(
                        bracketsRelations,
                        codeStep,
                        true
                    );
                }

                break;
        }

        if (tapePointer < 0 || tapePointer >= tape.length) {
            codeStep = code.length;
        }

        codeStep++;
    }

    return tape;
}

function switchTapeValue(tapeStep: string): string {
    return tapeStep === "0" ? "1" : "0";
}

function getOtherBrace(
    bracketsRelations: BracketRelation[],
    codeStep: number,
    direction: boolean
) {
    const bracket = bracketsRelations.find(
        (v) => (direction ? v.close : v.open) === codeStep
    );

    return bracket === undefined ? 0 :
        (direction ? bracket.open : bracket.close);
}

function parseBrackets(code: string): BracketRelation[] {
    const bracketsStack: number[] = [];
    const bracketsRelations: BracketRelation[] = [];
  
    for (var i = 0; i < code.length; i++) {
        if (code[i] === '[') {
            bracketsStack.push(i);
        } else if (code[i] === ']') {
            bracketsRelations.push({
                open: bracketsStack.pop() || 0,
                close: i
            });
        }
    }

    return bracketsRelations;
}
