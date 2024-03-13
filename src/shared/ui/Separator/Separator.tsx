import React from "react";

const Separator = () => {
  return (
    <div className="flex w-full items-center gap-2 py-6">
      <span className="flex-1 h-[1px] bg-gray-200"></span>
      <span className="font-basis text-xs text-gray-300">OR</span>
      <span className="flex-1 h-[1px] bg-gray-200"></span>
    </div>
  );
};

export default Separator;
