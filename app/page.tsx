import { BsLightningChargeFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { FcAddImage, FcAddressBook, FcAlarmClock, FcOldTimeCamera, FcOrgUnit, FcSportsMode } from "react-icons/fc";


export default function Home() {

  return (
    <div className="flex min-h-screen  items-center justify-center  font-sans dark:bg-black bg-gray-200/30 backdrop-blur-2xl">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center   pt-28 px-8  space-y-8  text-white dark:bg-black sm:items-start">
        <div className="hero w-full p-4 h-[30vh] rounded-2xl bg-white/40 backdrop-blur-3xl shadow-3xl outline-white/80 outline-[2px]">h</div>
        <section className="w-full">
          <div className="header items w-full  flex  justify-between">
            <span className="text-white  text-md text-start w-full">Items</span>
            <span className="text-white text-md text-end w-full">All</span>
          </div>
          <div className="card-wrapper gap-2 h-20 w-full  flex">

            <div className="cards outline-[2px] outline-gray-200 grid place-items-center w-20 h-20  rounded-xl bg-white/40   backdrop-blur-2xl">
              <FcAlarmClock size={32} />
            </div>

            <div className="cards outline-[2px] outline-gray-200 grid place-items-center w-20 h-20  rounded-xl bg-white/40   backdrop-blur-2xl">
              <FcOldTimeCamera size={32} />
            </div>
            <div className="cards outline-[2px] outline-gray-200 grid place-items-center w-20 h-20  rounded-xl bg-white/40   backdrop-blur-2xl">
              <FcAddImage size={32} />
            </div>
            <div className="cards outline-[2px] outline-gray-200 grid place-items-center w-20 h-20  rounded-xl bg-white/40   backdrop-blur-2xl">
              <FcAddressBook size={32} />
            </div>


          </div>

        </section>
        <section className="more w-full">

          <div className="header items w-full  flex  justify-between">
            <span className="text-white  text-md text-start w-full">More</span>
            <span className="text-white text-md text-end w-full">Show All</span>
          </div>
          <div className="card-wrapper   gap-2 flex w--full">

            <div className="card  max-w-2/4 w-full h-56 p-2 rounded-xl bg-white">
              <div className="w-full grid place-content-center bg-gray-100 h-3/5 rounded-md">
                <FcOrgUnit size={75} />
              </div>
              <p className="text-md text-semibold text-black">
                Item A
              </p>
              <p className="text-xs text-gray-400">5 membeli</p>
              <div className="actions py-2 flex w-full flex-row gap-2">
                <span className="info text-orange-600 text-xs  self-end">Info </span> <FaCrown className="text-orange-600 self-end" />
                <div className="ml-auto rounded-full p-2 bg-orange-600">
                  <BsLightningChargeFill className="text-white" />
                </div>
              </div>
            </div>

            <div className="card  max-w-2/4 w-full h-56 p-2 rounded-xl bg-white">
              <div className="w-full grid place-content-center bg-gray-100 h-3/5 rounded-md">
                <FcSportsMode size={75} />
              </div>
              <p className="text-md text-semibold text-black">
                Item B
              </p>
              <p className="text-xs text-gray-400">5 membeli</p>
              <div className="actions py-2 flex w-full flex-row gap-2">
                <span className="info text-orange-600 text-xs  self-end">Info </span> <FaCrown className="text-orange-600 self-end" />
                <div className="ml-auto rounded-full p-2 bg-orange-600">
                  <BsLightningChargeFill className="text-white" />
                </div>
              </div>
            </div>

          </div>

        </section>
      </main>
    </div>
  );
}
