export const boolToWord = (bool: boolean): string => {
    if (typeof bool !== 'boolean') {
        throw new Error('Input must be a boolean');
    }
    return bool ? 'Yes' : 'No';
    
  };

console.log(boolToWord(true));