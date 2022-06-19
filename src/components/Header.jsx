import axios from "axios";
export const Header = (props) => {
  const { user, setSignIn, SignIn, setIsSignedIn } = props;
  const handleChange = (event) => {
    setSignIn({ ...SignIn, [event.target.id]: event.target.value });
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/signinlibrarian", SignIn)
      .then(function (response) {
        if (response.status === 200) {
          setIsSignedIn(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/signinstudent", SignIn)
      .then(function (response) {
        if (response.status === 200) {
          setIsSignedIn(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-green-800 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Lorem, ipsum dolor sit
                <br className="hidden md:block" />
                amet consectetur{" "}
                <span className="text-teal-accent-400">
                  adipisicing elit Voluptatibus!
                </span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign In with your {user} credentials
                </h3>
                <form
                  onSubmit={
                    user === "Student" ? handleStudentSubmit : handleAdminSubmit
                  }
                >
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john@example.com"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="*********"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
