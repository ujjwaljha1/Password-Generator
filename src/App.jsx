import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    if (includeChars) chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';

    if (!chars) {
      alert('Please select at least one option (characters or numbers).');
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🔐 Password Generator
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password Length
          </label>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password Length: <span className="font-semibold text-indigo-600">{length}</span>
            </label>
            <input
              type="range"
              min="1"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

        </div>

        <div className="space-y-2 mb-4">
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars(!includeChars)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <span>Include Characters (A-Z, a-z)</span>
          </label>

          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <span>Include Numbers (0-9)</span>
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-6 bg-gray-100 rounded-md p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Your Password
            </h2>
            <p className="font-mono text-xl break-all">{password}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
