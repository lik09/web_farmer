/**
 * Format date to Khmer language
 * @param {string} dateString - Date in format "DD-MM-YYYY"
 * @returns {string} - Formatted date in Khmer (e.g., "3 មីនា 2026")
 */
export const formatDateKhmer = (dateString) => {
  if (!dateString) return '';
  
  const [day, month, year] = dateString.split('-');
  
  const monthsKh = [
    "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
    "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
  ];
  
  const monthIndex = parseInt(month) - 1;
  return `${parseInt(day)} ${monthsKh[monthIndex]} ${parseInt(year)}`;
};

/**
 * Format date to Khmer language with Khmer numerals
 * @param {string} dateString - Date in format "DD-MM-YYYY"
 * @returns {string} - Formatted date in Khmer with Khmer numbers (e.g., "៣ មីនា ២០២៦")
 */
export const formatDateKhmerWithNumbers = (dateString) => {
  if (!dateString) return '';
  
  const [day, month, year] = dateString.split('-');
  
  const monthsKh = [
    "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
    "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
  ];
  
  // Convert to Khmer numerals
  const toKhmerNumber = (num) => {
    const khmerNumbers = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return num.toString().replace(/\d/g, digit => khmerNumbers[parseInt(digit)]);
  };
  
  const monthIndex = parseInt(month) - 1;
  return `${toKhmerNumber(parseInt(day))} ${monthsKh[monthIndex]} ${toKhmerNumber(parseInt(year))}`;
};

/**
 * Format date to English language
 * @param {string} dateString - Date in format "DD-MM-YYYY"
 * @returns {string} - Formatted date in English (e.g., "March 3, 2026")
 */
export const formatDateEnglish = (dateString) => {
  if (!dateString) return '';
  
  const [day, month, year] = dateString.split('-');
  const date = new Date(`${year}-${month}-${day}`);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    return dateString;
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Main function to format date based on language
 * @param {string} dateString - Date in format "DD-MM-YYYY"
 * @param {string} lang - Language code ('km' or 'en')
 * @param {boolean} useKhmerNumbers - Whether to use Khmer numerals (default: false)
 * @returns {string} - Formatted date based on language
 */
export const formatDate = (dateString, lang, useKhmerNumbers = false) => {
  if (!dateString) return '';
  
  if (lang === 'km') {
    return useKhmerNumbers 
      ? formatDateKhmerWithNumbers(dateString)
      : formatDateKhmer(dateString);
  }
  return formatDateEnglish(dateString);
};

// Default export
export default {
  formatDate,
};