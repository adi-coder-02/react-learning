import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [characterAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordSelection = useRef(null);

  const copyToClipboard = useCallback(() =>{
    passwordSelection.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() =>{
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) chars += "0123456789";
    if (characterAllowed) chars += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed ])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed , passwordGenerator])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl w-96 text-white">
        <h2 className="text-xl font-semibold text-center mb-4">
          Password Generator
        </h2>

        {/* Input + Copy */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded-l bg-gray-700 outline-none"
            ref={passwordSelection}
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 px-4 rounded-r hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="flex justify-between mb-1">
            <span>Length</span>
            <span>{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <label>Include Numbers</label>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharAllowed(!characterAllowed)}
          />
          <label>Include Characters</label>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App
