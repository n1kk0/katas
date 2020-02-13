export function isValidCoordinates(coordinates: string): boolean {
    var matches = new RegExp(/^(-?[0-9]+(\.[0-9]+)?),\s*(-?[0-9]+(\.[0-9]+)?)$/g).exec(coordinates);

    if (matches != null) {
        if (+matches[1] >= -90 && +matches[1] <= 90 && +matches[3] >= -180 && +matches[3] <= 180) {
            return true;
        }
    }

    return false;
}
