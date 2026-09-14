export default async function HealthPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Health Check</h1>
      <p className="text-green-600 font-semibold mb-2">Status: Operational (200 OK)</p>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}