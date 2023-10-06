import React from "react";
import Video1 from "../../assets/Images/Video1.png";
import Video2 from "../../assets/Images/Video2.png";
import Video3 from "../../assets/Images/Video3.png";
import Video4 from "../../assets/Images/Video4.png";

const Grid = () => {
  return (
    <div className="flex justify-center flex-col items-center py-10 gap-8">
      <div className="px-11 py-5">
        <h1 className="lg:text-[60px] md:text-[50px] sm:text-[32px] text-2xl text-white text-center font-Montserrat font-semibold ">
          Take your content game to the next level.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around items-center justify-items-stretch lg:grid-cols-4 max-w-[84rem] lg:gap-6 sm:gap-10 lg:px-0 sm:px-4 px-6">
        <div className="grid gap-4 ">
          <div>
            <img
              className="w-full h-[280px] max-w-full rounded-[15px] bg-cover bg-center "
              src={Video1}
              alt=""
            />
          </div>
          <div>
            <div className="lg:h-[420px] sm:h-[220px] lg:py-0 lg:my-0 my-8 lg:w-full w-full flex justify-between items-center flex-col relative overflow-hidden bg-gradient-to-b from-cyan-600 to-neutral-900  rounded-[15px]">
              <div className="flex justify-center  items-center flex-col font-Montserrat ">
                <h1 className="font-extrabold  text-[75px] tracking-widest  text-transparent bg-clip-text bg-gradient-to-b translate-x-2 -translate-y-7  from-white to-[#6db0b7] ">
                  FULLY
                </h1>
                <h1 className="font-extrabold text-7xl text-transparent bg-clip-text tracking-widest -translate-y-[69px]  bg-gradient-to-b from-white to-[#6db0b7]   ">
                  ASYNC
                </h1>
              </div>

              <div className="text-white font-Montserrat text-sm font-semibold p-5">
                <p>
                  Place as many content requests you like, and we will get on it
                  one request at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex justify-between h-[380px] w-full overflow-hidden  rounded-[15px] items-center flex-col relative bg-gradient-to-b from-cyan-600 to-neutral-900  ">
            <div className="flex justify-center items-center flex-col text-white font-Montserrat">
              <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6db0b7] text-6xl -translate-y-2 -tracking-[-0.1em]   ">
                PORTAL
              </h1>
            </div>

            <div className="text-white font-Montserrat text-sm font-semibold p-5">
              <p>
                Manage your content board with our in-house tech.
                <br /> <br />
                View active, queued and completed requests effortlessly.
              </p>
            </div>
          </div>
          <div>
            <img
              className="lg:h-[300px] lg:py-0 py-5 h-full w-full rounded-[15px] bg-cover"
              src={Video2}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[474px] w-full rounded-[15px]"
              src={Video3}
              alt=""
            />
          </div>
          <div className="bg-gradient-to-b h-[200px] from-zinc-900 to-cyan-600 px-5 pt-14 text-white font-Montserrat font-semibold rounded-[15px]">
            <p>
              Invite your entire team, so anyone can submit requests and track
              the progress.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[240px] lg:py-0 py-5 w-full rounded-[15px] bg-cover"
              src={Video4}
              alt=""
            />
          </div>

          <div className="flex justify-between h-[440px] w-full  rounded-[15px] items-center flex-col relative bg-gradient-to-b from-cyan-600 to-neutral-900  ">
            <div className="flex justify-center items-center flex-col font-semibold text-white text-sm font-Montserrat p-5">
              <p>
                We help you create videos that have a higher industry standard
                viewership retention rate and also help you tips and tricks to
                improve your CTA metrics.
              </p>
            </div>

            <div className="text-white font-Montserrat lg:w-[280px] w-full overflow-hidden text-sm font-semibold  text-center">
              <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6db0b7] tracking-normal text-5xl translate-y-3 -translate-x-1">
                ANALYTICS
              </h1>
              <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6db0b7] text-5xl tracking-[0.1em]">
                FOCUSED
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
