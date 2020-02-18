<?php
function is_solved(array $board): int {
    $hasZeroes = false;
    $winner = 0;

    if ($board[0][0] == $board[1][1] && $board[1][1] == $board[2][2]) {
        $winner = $board[0][0];
    }

    if ($board[2][0] == $board[1][1] && $board[1][1] == $board[0][2]) {
        $winner = $board[2][0];
    }

    for ($i = 0; $i < 3; $i++) {
        if ($board[$i][0] != 0 && $board[$i][0] == $board[$i][1] && $board[$i][1] == $board[$i][2]) {
            $winner = $board[$i][0];
        }

        if ($board[0][$i] != 0 && $board[0][$i] == $board[1][$i] && $board[1][$i] == $board[2][$i]) {
            $winner = $board[0][$i];
        }

        if (array_search(0, $board[$i], true) !== false) {
            $hasZeroes = true;
        }
    }

    return $winner == 0 ? ($hasZeroes ? -1 : 0) : $winner;
}
