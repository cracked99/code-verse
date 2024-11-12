import { Link, Outlet } from '@tanstack/react-router'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">PromptGPT-X</span>
              </div>
              <div className="ml-6 flex space-x-8">
                <Link 
                  to="/"
                  className="inline-flex items-center px-1 pt-1 text-gray-900"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/editor"
                  className="inline-flex items-center px-1 pt-1 text-gray-900"
                >
                  Editor
                </Link>
                <Link 
                  to="/compare"
                  className="inline-flex items-center px-1 pt-1 text-gray-900"
                >
                  Compare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
