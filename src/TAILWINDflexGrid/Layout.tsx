const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      {/* Main Wrapper */}
      <div className="w-full max-w-[1080px] bg-white shadow-md rounded-lg p-4">
        <header className="text-center text-2xl font-bold">My Website</header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 bg-blue-500 text-white rounded-md">
            Left Section
          </div>
          <div className="p-4 bg-green-500 text-white rounded-md">
            Right Section
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 text-gray-600 bg-black">
          © 2025 My Website
        </footer>
      </div>
    </div>
  );
};

export default Layout;
