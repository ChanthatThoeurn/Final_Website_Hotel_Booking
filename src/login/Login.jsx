import Image from "next/image";

export default function loginPage() {
  return (
    <main className="w-full h-screen  flex items-center justify-center">
      <div className="flex flex-col sm:flex-row w-[1000px] h-[570px]   md:shadow-[0_-4px_6px_rgba(0,0,0,0.1)]   rounded-2xl">
        {/* Left Section */}
        <section className="flex-1 bg-white rounded-l-2xl">
          <div className="mx-2 my-10 flex flex-col gap-2.5 md:mx-10">
            <div>
              <h3 className="text-3xl font-bold">
                <span className="text-blue-500">Welcome </span>Back
              </h3>
              <p className="text-gray-500 font-medium text-[13px]">
                Explore More. Experience life.
              </p>
            </div>

            <div className="flex gap-2.5">
              <button className="border-[1.5px] border-gray-200 px-5 py-1.5 rounded-xl text-md">
                Sign Up
              </button>

              <button className="border-[1.5px] border-gray-200 px-5 py-1.5 rounded-xl text-md bg-blue-500 text-white">
                Log in
              </button>
            </div>

            <div>
              <h4 className="text-2xl font-bold">Journey Begins</h4>
              <p className="text-gray-500 font-medium  text-[13px]">
                Log in with open account
              </p>
            </div>


   <div className="flex flex-row  gap-3 justify-center items-center">
      {/* Facebook Button */}
      <button className="border border-gray-300 rounded-xl p-2 w-full h-12 flex items-center justify-center">
        <Image
          src="/FB.png"
          alt="Facebook"
          width={40}
          height={40}
        />
      </button>

      {/* Google Button */}
      <button className="border border-gray-300 rounded-xl p-2 w-full h-12 flex items-center justify-center">
        <Image
          src="/GG.png"
          alt="Google"
         width={50}
          height={50}
        />
      </button>

      {/* X (Twitter) Button */}
      <button className="border border-gray-300 rounded-xl p-2 w-full h-12 flex items-center justify-center">
        <Image
          src="/XX.png"
          alt="X"
         width={30}
          height={30}
        />
      </button>
    </div>
    <h3 className="w-full flex justify-center mb-[-15px]">Or</h3>



            <div>
              <div className=" mx-auto  rounded-lg">
                <form className="space-y-6">
                
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-base font-semibold text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        placeholder="username"
                        className="
                appearance-none block w-full px-3 py-2 
                border border-gray-300 rounded-md 
                shadow-sm 
                placeholder-gray-400 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                sm:text-sm
              "
                      />
                    </div>
                  </div>

                 
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-base font-semibold text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        className="
                appearance-none block w-full px-3 py-2 
                border border-gray-300 rounded-md 
                shadow-sm 
                placeholder-gray-400 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                sm:text-sm
              "
                      />
                    </div>
                  </div>

               
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* Custom styled checkbox to match the image's checkmark */}
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="
                h-4 w-4 text-red-600 border-gray-300 rounded 
                focus:ring-red-500 
                checked:bg-red-600 
                custom-checkbox
              "
                       
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900 font-medium"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>

              
                  <div>
                    <button
                      type="submit"
                      className="
              w-full flex justify-center py-2 px-4 
              border border-transparent rounded-md 
              shadow-sm text-lg font-medium text-white 
              bg-blue-500
            "
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="hidden sm:flex flex-1 flex items-center justify-center  relative overflow-hidden rounded-r-2xl ">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/LoginImage.jpg"
              alt="Scenic travel landscape"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="absolute top-6 left-6 right-6 text-white z-10 ">
            <h2 className="text-3xl font-bold bg-white/7 backdrop-blur-sm w-fit px-4 py-3 rounded-md">
              Wander, Explore, Experience
            </h2>
          </div>

          {/* Bottom Text Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <h3 className="text-xl font-semibold">
              Escape the Ordinary, Embrace the Journey!
            </h3>
            <p className="mt-1 text-base max-w-md">
              Experience the world your way.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
