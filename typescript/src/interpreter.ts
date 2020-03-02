interface BracketRelation {
    open: number,
    close: number
}

export function interpreter(code: string, tape: string): string {
    var tapePointer = 0;
  
    const bracketsRelations = parseBrackets(code);

    for(var i = 0; i < code.length; i++) {
        switch (code[i]) {
            case '*':
                tape = tape.substr(0, tapePointer) +
                    (tape[tapePointer] == "0" ? "1" : "0") +
                    tape.substr(tapePointer + 1)
                ;

                break;
            case '>':
                tapePointer++;
                break;
            case '<':
                tapePointer--;
                break;
            case '[':
                if (tape[tapePointer] == "0") {
                    let bracket = bracketsRelations.find((v) => v.open == i);

                    i = bracket == undefined ? 0 : bracket.close;
                }

                break;
            case ']':
                if (tape[tapePointer] == "1") {
                    let bracket = bracketsRelations.find((v) => v.close == i);

                    i = bracket == undefined ? 0 : bracket.open;
                }

                break;
        }

        if (tapePointer < 0 || tapePointer >= tape.length) {
            i = code.length;
        }
    }

    return tape;
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