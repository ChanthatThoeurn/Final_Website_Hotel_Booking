import Image from "next/image";

export default function aboutUs() {
  return (
    <main className="w-full h-fit bg-gray-600">
      {/* image article */}
      <article className="relative w-full h-[60vh]">
        {/* Background Image */}
        <Image
          src="/aboutusss.jpg" // put your image inside /public/hotel.jpg
          alt="Hotel"
          fill // makes image cover entire article
          className="object-cover brightness-75" // slightly dark for readable text
          priority
        />

        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-10 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Your Luxury Stay
            </h1>
            <p className="text-lg opacity-90">
              Experience comfort, elegance, and exceptional service. Book your
              stay with us and enjoy the perfect escape.
            </p>
          </div>
        </div>
      </article>

      {/* content section */}
      <section className="w-full h-fit my-14  xl:px-35 sm:px-3">
        <div className="w-full flex flex-col items-center justify-center  ">
          <h1 className="text-4xl font-bold text-white mb-4">About Our Team name</h1>
          {/* <p className="w-[680px] mx-auto text-center leading-relaxed xl:max-w-[680px] sm:w-fit">At Camp Booking, we’re passionate about simplifying travel planning. Our platform empowers millions to effortlessly book accommodations, adventures, and unique experiences, connecting travelers with destinations worldwide through innovative technology and trusted partners.</p> */}
          <p className="w-full text-[17px] text-white max-w-[800px] px-4 mx-auto text-center text-base leading-relaxed">
            At Camp Booking, we’re passionate about simplifying travel planning.
            Our platform empowers millions to effortlessly book accommodations,
            adventures, and unique experiences, connecting travelers with
            destinations worldwide through innovative technology and trusted
            partners.
          </p>
        </div>

        <article className="w-full  flex flex-col my-20 justify-start xl:h-[25rem] xl:flex-row md:justify-between sm:h-fit ">
          <div className=" h-full flex flex-col justify-center xl:w-[50%] sm:w-full ">
            <h3 className="text-4xl mb-4 font-bold text-white">Who are we ?</h3>
            <p className=" text-[17px] text-white xl:w-[80%] sm:w-full ">
              We are first-year Information Technology students at ISTAD –
              Institute of Science, Technology and Development. This hotel
              booking website is our final project, built entirely with a modern
              frontend using Next.js. Our goal is to showcase creativity,
              teamwork, and practical web development skills through this
              project.
            </p>
          </div>

          <div className="relative xl:w-1/2 md:w-full h-[25rem] rounded-2xl">
            <Image
              src="/aboutusss.jpg"
              alt="Scenic town landscape"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </article>

        <div className="w-full ">
          <h3 className="text-4xl font-bold  text-white mb-4">
            Our Vision & Mission
          </h3>
          <h4 className="text-3xl  text-white mb-2">Our Vision</h4>
          <p className="text-[17px] text-white">
          To create a seamless and modern hotel booking experience that makes travel planning simple, accessible, and enjoyable for everyone.
          </p>
          <h4 className="text-3xl  text-white mb-2">Our Mission</h4>
          <ul>
            <li className="text-[17px] text-white">
             Apply our knowledge as first-year IT students to build a practical, user-friendly web application.
            </li>
            <li className="text-[17px] text-white">
              Showcase teamwork and innovation through a responsive frontend powered by Next.js.

            </li>
            <li className="text-[17px] text-white">
             Deliver a project that reflects both our learning journey and our commitment to real-world problem solving.
            </li>
          </ul>
        </div>
      </section>

      {/* team member section */}
      <div className="w-full bg-[#081325] text-white py-20 px-4">
        {/* Lecturer Section */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <div className="bg-black/40 p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-6">
              <Image
                src="/tt.png"
                width={150}
                height={150}
                alt="Lecturer"
                className="rounded-full border-4 border-blue-500 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2">Ing Davan</h2>
            <p className="text-blue-400 font-semibold mb-4">
              LECTURER / WEB-DESIGN
            </p>

            <p className="text-gray-300 leading-relaxed">
              Inspires the next generation of designers through his expertise in
              web design, driven by his passion for creating seamless and
              visually captivating digital experiences.
            </p>
          </div>
        </div>

        {/* Team Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold">Our Team</h2>
          <p className="text-gray-400 mt-2">
            The people behind your travel adventures
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className=" p-6 rounded-2xl shadow-md text-center transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Lor Vengroth"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Lor Vengroth</h3>
            <p className="text-blue-400 font-semibold mt-1">Front-end, UI/UX</p>
          </div>

          {/* Team Member 2 */}
          <div className="p-6 rounded-2xl shadow-md text-center  transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Sim Sol"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Thouern Chanthat</h3>
            <p className="text-blue-400 font-semibold mt-1">
              Leader, Front-end, UX/UI
            </p>
          </div>

          {/* Team Member 3 */}
          <div className=" p-6 rounded-2xl shadow-md text-center  transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Tiv Sokchea"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Lut Lina</h3>
            <p className="text-blue-400 font-semibold mt-1">Front-end, UI/UX</p>
          </div>

          {/* Team Member 4 */}
          <div className=" p-6 rounded-2xl shadow-md text-center  transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Member Four"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Bo Vibol</h3>
            <p className="text-blue-400 font-semibold mt-1">
              Back-end Developer
            </p>
          </div>

          {/* Team Member 5 */}
          <div className=" p-6 rounded-2xl shadow-md text-center  transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Member Five"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Reakk</h3>
            <p className="text-blue-400 font-semibold mt-1">
              Full-stack Developer
            </p>
          </div>

          {/* Team Member 6 */}
          <div className=" p-6 rounded-2xl shadow-md text-center transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Member Six"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">En Sokhim</h3>
            <p className="text-blue-400 font-semibold mt-1">QA / Tester</p>
          </div>
          {/* Team Member 7 */}
          <div className=" p-6 rounded-2xl shadow-md text-center transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Member Six"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Suern Bomnorng</h3>
            <p className="text-blue-400 font-semibold mt-1">QA / Tester</p>
          </div>
          {/* Team Member 8 */}
          <div className=" p-6 rounded-2xl shadow-md text-center transition">
            <Image
              src="/tt.png"
              width={130}
              height={130}
              alt="Member Six"
              className="rounded-full border-4 border-blue-500 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Heang Minea</h3>
            <p className="text-blue-400 font-semibold mt-1">QA / Tester</p>
          </div>
        </div>
      </div>
    </main>
  );
}
