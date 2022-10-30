function solution(field, moves) {
  if (validateField(field) === false) {
    return field;
  }

  moves = formatAndValidateMoves(moves);

  let rows = field.length;
  let columns = field[0].length;

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        slideUp(field);
        break;

      case 'D':
        slideDown(field);
        break;

      case 'L':
        slideLeft(field);
        break;

      case 'R':
        slideRight(field);
        break;

      default:
        break;
    }
  }

  function filterZero(row) {
    return row.filter((num) => num != 0);
  }

  function slide(row) {
    row = filterZero(row);

    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] == row[i + 1] && row[i] % 2 === 0) {
        row[i] *= 2;
        row[i + 1] = 0;
      }
    }

    row = filterZero(row);

    while (row.length < columns) {
      row.push(0);
    }

    return row;
  }

  function slideLeft() {
    for (let r = 0; r < rows; r++) {
      let row = field[r];
      row = slide(row);
      field[r] = row;
    }
  }

  function slideRight() {
    for (let r = 0; r < rows; r++) {
      let row = field[r];
      row.reverse();
      row = slide(row);
      row.reverse();
      field[r] = row;
    }
  }

  function slideUp() {
    for (let c = 0; c < columns; c++) {
      let row = [field[0][c], field[1][c], field[2][c], field[3][c]];
      row = slide(row);
      field[0][c] = row[0];
      field[1][c] = row[1];
      field[2][c] = row[2];
      field[3][c] = row[3];
    }
  }

  function slideDown() {
    for (let c = 0; c < columns; c++) {
      let row = [field[0][c], field[1][c], field[2][c], field[3][c]];
      row.reverse();
      row = slide(row);
      row.reverse();
      field[0][c] = row[0];
      field[1][c] = row[1];
      field[2][c] = row[2];
      field[3][c] = row[3];
    }
  }

  function validateField(field) {
    if (
      !Array.isArray(field) &&
      !Array.isArray(field[0]) &&
      !Array.isArray(field[1]) &&
      !Array.isArray(field[2]) &&
      !Array.isArray(field[3])
    ) {
      return false;
    }

    for (let i = 0; i < field.length; i++) {
      if (field[i].length !== 4) {
        return false;
      }

      for (let y = 0; y < field[i].length; y++) {
        if (typeof field[i][y] !== 'number') {
          return false;
        }
      }
    }

    return true;
  }

  function formatAndValidateMoves(moves) {
    if (typeof moves !== 'string') return [];

    moves = moves.split(' ');

    const availableMoves = new Set(['U', 'R', 'D', 'L']);
    for (let i = 0; i < moves.length; i++) {
      if (!availableMoves.has(moves[i])) {
        moves = '';
        break;
      }
    }
    return moves;
  }

  return field;
}

const game = [
  [0, 2, 4, 8],
  [0, 0, 0, 0],
  [0, 2, 2, 8],
  [0, 2, 2, 2],
];

// [ [ 0, 4, 8, 16 ], [ 0, 2, 0, 2 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

const moves = 'U U U';

solution(game, moves);
