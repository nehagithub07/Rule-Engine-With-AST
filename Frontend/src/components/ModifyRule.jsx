import React, { useState } from 'react';
import { modifyRule } from '../utils/api';

const ModifyRule = () => {
  const [ruleId, setRuleId] = useState('');
  const [newRuleString, setNewRuleString] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleModifyRule = async () => {
    try {
      const result = await modifyRule(ruleId, newRuleString);
      console.log(result);
      setResponse(result);
      setError(null);
    } catch (error) {
      setError('Error modifying rule');
      setResponse(null);
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg min-h-screen w-full flex justify-center items-center'>

<div className="flex flex-col space-y-6 w-[600px] p-8 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-2xl transition-transform transform hover:scale-105">

      <h2 className='text-4xl font-bold mb-8 text-center text-gray-800'>Modify Rule</h2>

      <div className='flex flex-col mb-6'>
        <label className='mb-2 text-lg font-semibold text-gray-700'>Rule ID</label>
        <input
          type='text'
          value={ruleId}
          onChange={(e) => setRuleId(e.target.value)}
          placeholder='Enter rule ID'
          className='p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500'
        />
      </div>

      <div className='flex flex-col mb-6'>
        <label className='mb-2 text-lg font-semibold text-gray-700'>New Rule String</label>
        <textarea
          value={newRuleString}
          onChange={(e) => setNewRuleString(e.target.value)}
          placeholder='Enter new rule string'
          className='p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500'
        />
      </div>

      <button
        onClick={handleModifyRule}
        className='bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-105'
      >
        Modify Rule
      </button>

      {response && (
        <pre className='bg-orange-100 text-orange-800 p-4 rounded-md mt-6 border border-orange-200'>
         {response.ruleString ? (
            <div>Rules modify successfully!</div>
          ) : (
            <div>Rule not modified</div>
          )}
        
        </pre>
      )}
      {error && (
        <div className='text-red-600 mt-6 text-lg'>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
    </div>
  );
};

export default ModifyRule;