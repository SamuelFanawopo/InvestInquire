import { Link } from "react-router-dom";

const UnauthorizedPage: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">
              401
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Unauthorized Access
            </p>
            <p className="mb-4 text-lg font-medium text-gray-500 dark:text-gray-400">
              You do not have permission to access this page. Please ensure you
              are logged in with the correct credentials
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnauthorizedPage;
