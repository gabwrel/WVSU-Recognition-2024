export default function Home() {
  return (
    <>
    <div className="h-screen flex-grow pt-20">
      <div className="max-w-5xl grid gap-10 md:gap-0 md:grid-cols-[2fr,1fr] mx-auto py-28 px-10 grid-cols-1 overflow-hidden">
        <div className="flex flex-col space-y-5 h-full justify-center">
          <h1 className="flex flex-col gap-3">
            <span className="uppercase text-wvsuwhite w-full">
              West Visayas State University
            </span>
            <span className="text-wvsuwhite tracking-tighter text-4xl sm:text-5xl md:text-7xl">
              UNIVERSITY RECOGNITION 2024
            </span>
            <div className="font-light text-wvsuwhite">
              <p>June 5, 2024 7:30 AM</p>
              <p>WVSU CULTURAL CENTER</p>
            </div>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/Lessylicious1" className="bg-wvsuyellow text-darkblue font-bold h-12 text-center inline-flex items-center justify-center px-6 py-2 text-xs font-medium uppercase text-white rounded-full shadow-primary-3 box-border transition duration-150 ease-in-out hover:bg-darkblue hover:text-wvsuwhite hover:shadow-primary-2 hover:border hover:border-wvsuwhite focus:bg-wvsublue focus:text-bold focus:text-wvsuyellow focus:shadow-primary-2 focus:outline-none focus:ring-0 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong ">Student Search</a>
              <a href="https://www.facebook.com/Lessylicious1" className="bg-wvsuyellow text-darkblue font-bold h-12 text-center inline-flex items-center justify-center px-6 py-2 text-xs font-medium uppercase text-white rounded-full shadow-primary-3 box-border transition duration-150 ease-in-out hover:bg-darkblue hover:text-wvsuwhite hover:shadow-primary-2 hover:border hover:border-wvsuwhite focus:bg-wvsublue focus:text-bold focus:text-wvsuyellow focus:shadow-primary-2 focus:outline-none focus:ring-0 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong ">Program</a>
            </div>
          </h1>
        </div>
      </div>
    </div>
    </>
  );
}
