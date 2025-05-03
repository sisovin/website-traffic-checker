import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Features</h2>
      <ul>
        <li className="mb-2">
          <strong>Real-time Traffic Analysis:</strong> Get up-to-date traffic data for any website.
        </li>
        <li className="mb-2">
          <strong>Detailed Reports:</strong> Access comprehensive reports on visits, unique visitors, page views, and more.
        </li>
        <li className="mb-2">
          <strong>Customizable Dashboards:</strong> Create and customize dashboards to monitor key metrics.
        </li>
        <li className="mb-2">
          <strong>Historical Data:</strong> Analyze traffic trends over time with historical data.
        </li>
        <li className="mb-2">
          <strong>Export Options:</strong> Export traffic data in various formats for further analysis.
        </li>
      </ul>
    </section>
  );
};

export default Features;
