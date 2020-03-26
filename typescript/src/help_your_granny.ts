export class G964 {
    public static tour = (
        friends: Array<string>,
        fTowns: Array<Array<string>>,
        distTable: Array<string|number>
    ) => {
        let distance = G964.getDistance(
            G964.getTown(friends[0], fTowns),
            distTable
        );

        let i = 0;

        for (i = 1; i < friends.length; i++) {
            const firstTown = G964.getTown(friends[i - 1], fTowns);
            const secondTown = G964.getTown(friends[i], fTowns);

            if (firstTown !== "" && secondTown !== "") {
                const x0xis1 = G964.getDistance(firstTown, distTable);
                const x0xi = G964.getDistance(secondTown, distTable);
                distance += Math.sqrt(
                    Math.pow(x0xi, 2) - Math.pow(x0xis1, 2)
                );
            } else {
                break;
            }
        }

        distance += G964.getDistance(
            G964.getTown(friends[i - 1], fTowns),
            distTable
        );

        return Math.round(distance);
    };

    private static readonly getTown = (
        friendId: string,
        fTowns: Array<Array<string>>
    ): string => {
        const town = fTowns.find((value, _, __) => value[0] === friendId);

        return town === undefined ? "" : town[1];
    }

    private static readonly getDistance = (
        town: string,
        distTable: Array<string|number>
    ): number => {
        return +distTable[distTable.indexOf(town) + 1];
    }
}
