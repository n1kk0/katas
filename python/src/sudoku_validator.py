def check_sub_squares(board, i):
    for j in list(range(3)):
        if ''.join([
            str(x) for x in sorted([
                board[k][l]
                for l in list(range(j * 3, (j * 3) + 3))
                for k in list(range(i - 1, i + 2))
            ])
        ]) != '123456789':
            return False
    
    return True

def valid_solution(board):
    for i in list(range(1, 10)):
        if ''.join([str(x) for x in sorted(board[i - 1])]) != '123456789':
            return False

        if ''.join([
            str(x) for x in sorted([
                board[y - 1][i - 1] for y in range(1, 10)
            ])
        ]) != '123456789':
            return False

        if i % 3 == 1 and not check_sub_squares(board, i):
            return False

    return True
