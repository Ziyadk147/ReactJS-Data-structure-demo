import {useEffect} from "react";
import Prism from "prismjs";
export default function Codeblock(){
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Code Snippets</h2>
            <p className="text-gray-800 mb-2">
                To declare a variable, use
                <code className="bg-gray-200 text-gray-900 px-1 rounded">const myVariable = 5;</code>
            </p>
            <h3 className="text-xl font-semibold mt-4">Python Example:</h3>
            <div className="relative">
        <pre className="bg-gray-200 p-6 rounded overflow-auto max-w-full">
          <code className="language-python">
            {`def greet():
    print('Hello, World!')

greet()`}
          </code>
        </pre>
                <button

                    className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                >
                    Run Python Code
                </button>
            </div>
        </div>
    )
}