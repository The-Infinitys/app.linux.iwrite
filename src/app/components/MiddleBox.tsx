export default function MiddleBox({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-row items-start justify-between w-full max-w-6xl p-4 bg-white shadow-md rounded-lg">
        {children}
      </div>
    </div>
  );
}
