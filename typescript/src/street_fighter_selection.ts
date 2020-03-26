export function superStreetFighterSelection(
    fighters: Array<string[]>,
    position: number[],
    moves: string[]
): string[] {
    const output: string[] = [];

    moves.forEach((v) => {
        switch (v) {
            case "up":
                position = getUpPosition(position, fighters);
                break;
            case "down":
                position = getDownPosition(position, fighters);
                break;
            case "right":
                position = getRightPosition(position, fighters);
                break;
            case "left":
                position = getLeftPosition(position, fighters);
                break;
            default:
                throw new Error(`Bad movement code :${v}`);
        }

        output.push(fighters[position[0]][position[1]]);
    });

    return output;
}

function getUpPosition(position:number[], fighters: Array<string[]>,) {
    if (position[0] > 0 && fighters[position[0] - 1][position[1]] !== "") {
        position[0]--;
    }

    return position;
}

function getDownPosition(position:number[], fighters: Array<string[]>,) {
    if (
        position[0] + 1 < fighters.length &&
        fighters[position[0] + 1][position[1]] !== ""
    ) {
        position[0]++;
    }

    return position;
}

function getRightPosition(position:number[], fighters: Array<string[]>,) {
    position[1]++;

    while (fighters[position[0]][position[1] % fighters[position[0]].length] === "") {
        position[1]++;
    }

    position[1] = position[1] % fighters[position[0]].length;

    return position;
}

function getLeftPosition(position:number[], fighters: Array<string[]>,) {
    position[1] = position[1] > 0 ? position[1] - 1 : fighters[0].length - 1;

    while (fighters[position[0]][position[1] % fighters[position[0]].length] === "") {
        position[1] = position[1] > 0 ? position[1] - 1 : fighters[0].length - 1;
    }

    return position;
}
