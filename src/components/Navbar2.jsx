import { Link } from "react-router-dom";
export const Navbar2 = (props) => {
  return (
    <div class="bg-gradient-to-r from-green-600 to-green-800">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <Link
              to="/"
              aria-label="Centeral library"
              title="Centeral library"
              class="inline-flex items-center mr-8"
            >
              <svg
                class="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Centeral library
              </span>
            </Link>
          </div>
          <ul class="flex items-center space-x-8 lg:flex">
            {/* End Point in case required signup */}
            {/* <li>
              <a
                href="/"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Sign in
              </a>
            </li> */}
            <li>
              <Link
                onClick={()=>{props.setIsSignedIn(false)}}
                to="/"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition hover:bg-green-900 duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
