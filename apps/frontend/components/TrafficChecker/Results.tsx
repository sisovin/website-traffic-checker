import React from 'react';

const Results: React.FC = () => {
  // Placeholder data for demonstration purposes
  const data = {
    visits: 12345,
    uniqueVisitors: 6789,
    pageViews: 23456,
    bounceRate: '50%',
    averageTimeOnSite: '2m 30s',
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Traffic Results</h2>
      <ul>
        <li className="mb-2">
          <strong>Visits:</strong> {data.visits}
        </li>
        <li className="mb-2">
          <strong>Unique Visitors:</strong> {data.uniqueVisitors}
        </li>
        <li className="mb-2">
          <strong>Page Views:</strong> {data.pageViews}
        </li>
        <li className="mb-2">
          <strong>Bounce Rate:</strong> {data.bounceRate}
        </li>
        <li className="mb-2">
          <strong>Average Time on Site:</strong> {data.averageTimeOnSite}
        </li>
      </ul>
    </div>
  );
};

export default Results;
