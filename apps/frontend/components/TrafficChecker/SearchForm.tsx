import React, { useState } from 'react';

const SearchForm: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('URL submitted:', url);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <label htmlFor="url" className="block text-sm font-medium text-gray-700">
        Website URL
      </label>
      <input
        type="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="https://example.com"
        required
      />
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Check Traffic
      </button>
    </form>
  );
};

export default SearchForm;
