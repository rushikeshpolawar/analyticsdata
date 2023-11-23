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
export const calculateMode = (data: number[]) => {
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    let mode: number[] = [];
  
    data.forEach((item) => {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  
      if (frequencyMap[item] > maxFrequency) {
        maxFrequency = frequencyMap[item];
        mode = [item];
      } else if (frequencyMap[item] === maxFrequency) {
        mode.push(item);
      }
    });
  
    // Check if there is no mode or multiple modes
    if (mode.length === 1 && maxFrequency > 1) {
      return mode.map((value) => +value.toFixed(3));
    } else {
      return [0]; // No mode or multiple modes
    }
  };