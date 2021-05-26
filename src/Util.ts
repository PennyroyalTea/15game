import {List} from 'immutable';

export function permutateToWinnable(tiles: List<number>) : List<number> {
    tiles = tiles.sortBy(Math.random);
    if (calculateParity(tiles) === 0) {
        return tiles;
    } else {
        return permutateToWinnable(tiles);
    }
}

function calculateParity(tiles: List<number>) {
    let sum = 0;
    for (let i = 0; i < tiles.size; ++i) {
        if (tiles.get(i) === 0) {
            sum += Math.floor(i / 4) + 1;
            continue;
        }
        for (let j = i + 1; j < tiles.size; ++j) {
            if (tiles.get(j)!! < tiles.get(i)!! && tiles.get(j)!! !== 0) sum += 1;
        }
    }
    return sum % 2;
}

