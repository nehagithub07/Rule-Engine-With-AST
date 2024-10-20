import React, { useState } from 'react';
import { createRule } from '../utils/api';

const CreateRule = () => {
  const [ruleString, setRuleString] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateRule = async (e) => {
    e.preventDefault();
    try {
      const result = await createRule(ruleString);
      setResponse(result);
      setError(null);
    } catch (error) {
      setError('Error creating rule');
      setResponse(null);
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg min-h-screen w-full flex justify-center items-center'>
    

   
    <div className="flex flex-col space-y-6 w-[600px] p-8 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-2xl transition-transform transform hover:scale-105">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Create Rule</h2>

      <form onSubmit={handleCreateRule} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-semibold text-gray-700">Rule String</label>
          <textarea
            className="p-4 border border-gray-300 rounded-lg h-40 resize-none focus:ring-2 focus:ring-green-500 transition-all"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            placeholder="Enter rule string"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-110"
        >
          Create Rule
        </button>
      </form>

      {response && (
        <div className='bg-green-100 text-green-800 p-4 rounded-md font-semibold border border-green-200 mt-4'>
          {response.ruleString ? (
            <div>Rule created successfully</div>
          ) : (
            <div>Rule not created</div>
          )}
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-4 text-center text-lg">
          Error: {error}
        </div>
      )}
    </div>
    </div>
  );
};

export default CreateRule;
