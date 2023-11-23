import React, { useEffect, useState } from "react";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../common/commonFunction";

// Utility function to calculate Gamma for each point in the dataset
const calculateGamma = (data: any[]) => {
  return data.map((item) => ({
    ...item,
    Gamma: (item.Ash * item.Hue) / item.Magnesium,
  }));
};

// Modified React component to display class-wise mean, median, and mode of "Gamma"
const GammaStatsTable: React.FC = () => {
  const [wineData, setWineData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Wine-Data.json
    fetch(
      "https://raw.githubusercontent.com/rushikeshpolawar/analyticsdata/main/flavanoids-stats-app/src/asset/Wine-Data.json"
    )
      .then((response) => response.json())
      .then((data) => setWineData(calculateGamma(data)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Extracting unique classes from the dataset
  const uniqueClasses = [...new Set(wineData.map((item) => item.Alcohol))];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {uniqueClasses.map((classNumber) => (
              <th key={classNumber}>Class {classNumber}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {uniqueClasses.map((classNumber) => (
              <td key={classNumber}>
                {calculateMean(
                  wineData
                    .filter((item) => item.Alcohol === classNumber)
                    .map((item) => item.Gamma)
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {uniqueClasses.map((classNumber) => (
              <td key={classNumber}>
                {calculateMedian(
                  wineData
                    .filter((item) => item.Alcohol === classNumber)
                    .map((item) => item.Gamma)
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {uniqueClasses.map((classNumber) => (
              <td key={classNumber}>
                {calculateMode(
                  wineData
                    .filter((item) => item.Alcohol === classNumber)
                    .map((item) => item.Gamma)
                ).join(", ")}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaStatsTable;
