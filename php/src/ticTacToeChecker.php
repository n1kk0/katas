<?php
function is_solved(array $board): int {
    $hasZeroes = false;
    $winner = 0;

    if (hasWinningTopLeftBottomRightDiagonal($board)) {
        $winner = $board[0][0];
    }

    if (hasWinningTopRightBottomLeftDiagonal($board)) {
        $winner = $board[2][0];
    }

    for ($i = 0; $i < 3; $i++) {
        if (hasWinningRow($board, $i)) {
            $winner = $board[$i][0];
        }

        if (hasWinningCol($board, $i)) {
            $winner = $board[0][$i];
        }

        if (array_search(0, $board[$i], true) !== false) {
            $hasZeroes = true;
        }
    }

    return $winner == 0 ? ($hasZeroes ? -1 : 0) : $winner;
}

function hasWinningRow(array $board, $i) {
    return $board[$i][0] != 0 && $board[$i][0] == $board[$i][1] && $board[$i][1] == $board[$i][2];
}

function hasWinningCol(array $board, $i) {
    return $board[0][$i] != 0 && $board[0][$i] == $board[1][$i] && $board[1][$i] == $board[2][$i];
}

function hasWinningTopLeftBottomRightDiagonal($board) {
    return $board[0][0] == $board[1][1] && $board[1][1] == $board[2][2];
}

function hasWinningTopRightBottomLeftDiagonal($board) {
    return $board[2][0] == $board[1][1] && $board[1][1] == $board[0][2];
}
