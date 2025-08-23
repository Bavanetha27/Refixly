import ReactMarkdown from 'react-markdown';

function AIResponseSection({ aiResponse }) {
  return (
    <div className="p-4 mt-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-300 mb-2">
        🤖 AI Analysis Report
      </h2>
      <div className="prose prose-purple dark:prose-invert max-w-none">
        <ReactMarkdown>{aiResponse}</ReactMarkdown>
      </div>
    </div>
  );
}

export default AIResponseSection;
