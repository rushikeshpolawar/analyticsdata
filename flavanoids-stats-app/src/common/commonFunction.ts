// Utility function to calculate mean
export const calculateMean = (data: number[]) => {
  const sum = data.reduce((acc, item) => acc + item, 0);
  return +(sum / data.length).toFixed(3);
};

// Utility function to calculate median
export const calculateMedian = (data: number[]) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return +((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(3);
  } else {
    return +sortedData[middle].toFixed(3);
  }
};

// Utility function to calculate mode
export const calculateMode = (data: number[]): number | null => {
    if (data.length === 0) {
      return null;
    }
  
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    let mode: number | null = null;
  
    for (const num of data) {
      // Use the frequencyMap to keep track of occurrences
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  
      // Update maxFrequency and mode while iterating
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mode = num;
      } else if (frequencyMap[num] === maxFrequency && num < mode!) {
        // In case of tie, choose the smaller number
        mode = num;
      }
    }
  
    // Round the mode to 3 decimal places
    return mode !== null ? parseFloat(mode.toFixed(3)) : null;
  };
  
