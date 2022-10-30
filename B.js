function sumExcept(arr, index, skip) {
  // Number.isInteger return false if number is NaN or is decimal
  if (!Number.isInteger(index) || index < 0) index = 0;
  if (!Number.isInteger(skip) || skip < 0) skip = 0;

  if (index >= arr.length) {
    index = 0;
    skip = 0;
  }

  if (skip > arr.length - index) arr.length = index;

  let result = 0;
  console.log(arr, index, skip);

  for (let i = 0; i < index; i++) {
    if (typeof arr[i] === 'number') result += arr[i];
  }

  for (let i = index + skip; i < arr.length; i++) {
    if (typeof arr[i] === 'number') result += arr[i];
  }

  return result;
}

sumExcept([1, 9, 4, 4, 'b'], 1, 2);
