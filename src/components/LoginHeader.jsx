
import { auth} from "../firebase";
import { logIn, logOut } from "../utils/authFunctions";

export const LoginHeader = () => {


  const {currentUser} = auth;
  const {displayName} = currentUser || 0

  return (
    <div className="flex items-center gap-4 lg:order-2">

        <>
          <div className="flex row items-center">
            <p>{displayName}</p>
            <div className="relative h-12 w-12">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
              />
            </div>
          </div>
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            onClick={logOut}
          >
            Logout
          </button>
        </>

        <div className="flex">
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={logIn}
          >
            Login
          </button>
        </div>
    </div>
  );
};
