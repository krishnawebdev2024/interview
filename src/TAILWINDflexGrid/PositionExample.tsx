const PositionExample = () => {
  return (
    <>
      <div className="relative h-64 w-64 bg-gray-200 border rounded-lg flex items-center justify-center mx-auto  mt-10">
        {/* Parent Container - relative */}
        <p className="text-gray-700">Parent (relative)</p>

        {/* Child - absolute position inside parent */}
        <div className="absolute top-[-20px] right-[-20px] bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm">
          Absolute Box
        </div>
      </div>
      <div>
        <label htmlFor="birthdate" className="block text-gray-700">
          Birthdate:
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          className="p-2 border border-blue-500 rounded"
        />
      </div>
    </>
  );
};

export default PositionExample;
