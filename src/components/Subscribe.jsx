import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="uppercase text-xl font-albert-sans text-gray-300">
        get notified
      </p>

      <div className="w-4/8 bg-white rounded-full mt-4 p-0.5 shadow-md">
        <div className="flex flex-row justify-between">
          <input
            type="email"
            name="email"
            id=""
            className="rounded-full outline-none placeholder:uppercase uppercase py-1 px-2 text-rose-500 placeholder:text-rose-200 text-base"
            placeholder="email address"
          />
          <button className="uppercase bg-rose-500 text-white rounded-full py-1 px-2 mr-2 text-base hover:bg-rose-400 shadow-md">
            notify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
