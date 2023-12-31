//this file for if the page is not found i.e 404 error then it will show this page
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
          <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
              <div className="border-t border-gray-200 text-center pt-8">
                <h1 className="text-9xl font-bold text-purple-500">404</h1>
                <h1 className="text-6xl font-medium py-8">
                  <span className="text-red-500">Oops!</span> Page not found
                </h1>
                <p className="text-2xl pb-8 px-12 font-medium">
                  Oops! The page you are looking for does not exist. It might
                  have been moved or deleted.
                </p>
                <Link
                  href="/"
                  className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
