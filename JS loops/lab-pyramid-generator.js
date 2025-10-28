** start of script.js **

/**
 * Generates a string pyramid using a specified character, number of rows, 
 * and orientation (upward or downward vertex).
 *
 * @param {string} char The pattern character to repeat (e.g., "o").
 * @param {number} rows The number of rows in the pyramid (e.g., 4).
 * @param {boolean} inverted If true, the vertex faces downwards (inverted).
 * @returns {string} The final string, including a leading and trailing newline.
 */
function pyramid(char, rows, inverted) {
  let output = "\n"; // Start with a newline character

  // Calculate the width of the base row (the widest row)
  // For 'rows' rows, the widest row has 1 + 2 * (rows - 1) characters.
  const baseWidth = 1 + 2 * (rows - 1);

  // Determine the range of the loop based on the 'inverted' boolean.
  // Upward: starts small (row=1) and increases (i=1 to rows)
  // Downward: starts large (row=rows) and decreases (i=rows to 1)
  const start = inverted ? rows : 1;
  const end = inverted ? 0 : rows + 1;
  const step = inverted ? -1 : 1;

  for (let i = start; i !== end; i += step) {
    // i represents the current row number (1 to rows)
    const row = i; 

    // 1. Calculate the number of pattern characters: 1 + 2 * (row - 1)
    const charCount = 1 + 2 * (row - 1);
    const pattern = char.repeat(charCount);

    // 2. Calculate the number of leading spaces: (baseWidth - charCount) / 2
    // This centers the pattern.
    const spaceCount = (baseWidth - charCount) / 2;
    const spaces = " ".repeat(spaceCount);

    // 3. Construct the current row: spaces + pattern
    const currentRow = spaces + pattern;

    // 4. Append the current row and a newline.
    // The requirement "there should not be any spaces at the end of each row" 
    // is satisfied because we only add leading spaces.
    output += currentRow + "\n";
  }

  return output; // The output string already has a trailing newline from the last row.
}

** end of script.js **

