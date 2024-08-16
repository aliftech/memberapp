import SigninForm from "./components/form/SigninForm";

export default function Home() {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="grid gap-8">
          <div
            id="back-div"
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
            >
            <div
                className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                >
                <h4 className="pt-8 pb-6 font-bold dark:text-gray-400 text-3xl text-center cursor-default">
                  Signin
                </h4>
            
                <SigninForm />
            
                <div className="flex flex-col mt-4 items-center justify-center text-sm">
                  <h3 className="dark:text-gray-300">
                      Don't have an account?
                      <a
                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                        href="#"
                        >
                      <span
                        className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                        >
                      Sign Up
                      </span>
                      </a>
                  </h3>
                </div>
                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap"
                  >
                  <button
                      className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                      >
                  <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                      />
                  </button>
                  <button
                      className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                      >
                  <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                      alt="Facebook"
                      />
                  </button>
                </div>
            </div>
          </div>
      </div>
    </div>    
  );
}
