function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');

    // Skip empty lines
    if (currentLine.length === 1 && currentLine[0].trim() === '') {
      continue;
    }

    // Check if the number of columns matches the number of headers
    if (currentLine.length !== headers.length) {
      console.error(`Error in CSV at line ${i + 1}: Number of columns does not match the number of headers.`);
      continue;
    }

    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentLine[j].trim();
    }

    result.push(obj);
  }

  return result;
}
