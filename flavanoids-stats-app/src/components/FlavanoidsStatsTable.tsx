// src/App.tsx
import React, { useEffect, useState } from 'react';

const FlavanoidsStatsTable: React.FC = () => {
  const [wineData, setWineData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Wine-Data.json
    fetch('https://github.com/rushikeshpolawar/analyticsdata/blob/main/flavanoids-stats-app/src/asset/Wine-Data.json')
      .then((response) => response.json())
      .then((data) => setWineData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const calculateMean = (data: number[]) => {
    const sum = data.reduce((acc, item) => acc + item, 0);
    return sum / data.length;
  };

  const calculateMedian = (data: number[]) => {
    const sortedData = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  };

  const calculateMode = (data: number[]) => {
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

    return mode;
  };

  // Extracting unique classes from the dataset
  const uniqueClasses = [...new Set(wineData.map((item) => item.Alcohol))];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {uniqueClasses.map((classNumber) => (
              <th key={classNumber}>Class {classNumber}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {uniqueClasses.map((classNumber) => (
              <td key={classNumber}>
                {calculateMean(
                  wineData
                    .filter((item) => item.Alcohol === classNumber)
                    .map((item) => parseFloat(item.Flavanoids))
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {uniqueClasses.map((classNumber) => (
              <td key={classNumber}>
                {calculateMedian(
                  wineData
                    .filter((item) => item.Alcohol === classNumber)
                    .map((item) => parseFloat(item.Flavanoids))
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {uniqueClasses.map((classNumber) => (
              <td key={classNumber}>
                {calculateMode(
                  wineData
                    .filter((item) => item.Alcohol === classNumber)
                    .map((item) => parseFloat(item.Flavanoids))
                ).join(', ')}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlavanoidsStatsTable;
