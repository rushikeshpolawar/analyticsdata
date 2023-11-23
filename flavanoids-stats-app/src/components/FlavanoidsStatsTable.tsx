import React, { useEffect, useState } from "react";
import { calculateMean, calculateMedian, calculateMode } from "../common/commonFunction";

const FlavanoidsStatsTable: React.FC = () => {
  const [wineData, setWineData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/rushikeshpolawar/analyticsdata/main/flavanoids-stats-app/src/asset/Wine-Data.json');
        const data = await response.json();
        setWineData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
                ).join(", ")}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlavanoidsStatsTable;
