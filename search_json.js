/**
 * Search for a given term in JSON data.
 * @param {string} jsonData - The JSON data to search within.
 * @param {string} searchTerm - The term to search for.
 * @returns {Array} An array of objects that match the search term.
 * @throws {Error} If the input parameters are invalid or if jsonData parsing fails.
 * @example
 * // Sample usage
 * const jsonData = `[
 *   {
 *     "id": 1,
 *     "name": "John Doe",
 *     "age": 30
 *   },
 *   {
 *     "id": 2,
 *     "name": "Jane Smith",
 *     "age": 25
 *   },
 *   {
 *     "id": 3,
 *     "name": "Bob Johnson",
 *     "age": 40
 *   }
 * ]`;
 *
 * const searchTerm = 'John';
 * const searchResults = searchJSON(jsonData, searchTerm);
 * console.log(searchResults);
 * // Output: [
 * //   {
 * //     "id": 1,
 * //     "name": "John Doe",
 * //     "age": 30
 * //   }
 * // ]
 */

function searchJSON(jsonData, searchTerm) {
  // Validate jsonData parameter
  if (typeof jsonData !== 'string') {
    throw new Error('jsonData must be a valid JSON string.');
  }

  // Validate searchTerm parameter
  if (!searchTerm || typeof searchTerm !== 'string') {
    throw new Error('searchTerm must be a non-empty string.');
  }

  try {
    // Parse the jsonData string into an array of objects
    const data = JSON.parse(jsonData);

    // Ensure that the parsed data is an array
    if (!Array.isArray(data)) {
      throw new Error('jsonData must be a valid JSON array.');
    }

    // Handle the case where jsonData is an empty array
    if (data.length === 0) {
      return [];
    }

    // Filter the array based on the search term
    const searchResults = data.filter(item => {
      // Convert object properties to lowercase for case-insensitive search
      const itemValues = Object.values(item).map(value => {
        // Convert null or undefined values to empty strings
        return value ? value.toString().toLowerCase() : '';
      });

      // Check if any property contains the search term
      return itemValues.some(value => value.includes(searchTerm.toLowerCase()));
    });

    return searchResults;
  } catch (error) {
    // Throw an error if jsonData parsing fails
    throw new Error('jsonData must be a valid JSON string.');
  }
}

module.exports = searchJSON;

