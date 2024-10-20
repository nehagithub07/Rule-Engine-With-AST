import React, { useState } from 'react';
import { combineRules } from '../utils/api';

const CombineRules = () => {
  const [ruleStrings, setRuleStrings] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleCombineRules = async (event) => {
    event.preventDefault(); 
    try {
      const rulesArray = ruleStrings.split('\n').filter((rule) => rule.trim() !== '');
      console.log('Rules to combine:', rulesArray); // Log rulesArray before sending to API

      const result = await combineRules(rulesArray);
      console.log('API response:', result); // Log the API response

      setResponse(result);
      setError(null);
    } catch (error) {
      console.error('Error combining rules:', error); // Log detailed error information
      setError('Error combining rules');
      setResponse(null);
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg min-h-screen w-full flex justify-center items-center'>

<div className="flex flex-col space-y-6 w-[600px] p-8 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-2xl transition-transform transform hover:scale-105">

      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Combine Rules</h2>
      
      <form onSubmit={handleCombineRules} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-semibold text-gray-700">Rule Strings</label>
          <textarea
            className="p-4 border border-gray-300 rounded-md h-48 resize-none focus:ring-2 focus:ring-green-500"
            value={ruleStrings}
            onChange={(e) => setRuleStrings(e.target.value)}
            placeholder="Enter rule strings, one per line"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-105"
        >
          Combine Rules
        </button>
      </form>

      {response && (
        <div className='bg-green-100 text-green-800 p-4 rounded-md font-semibold border border-green-200 mt-4'>
         
          {response.combinedAST ? (
            <div>Rules combined successfully</div>
          ) : (
            <div>Rules not combined</div>
          )}
        </div>
      )}

      {error && (
        <div className="text-red-600 mt-4 text-center text-lg">
          Error: {error}
        </div>
      )}
    </div>
    </div>
  );
};

export default CombineRules;