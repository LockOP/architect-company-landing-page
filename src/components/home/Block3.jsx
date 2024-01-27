import React from "react";

function Block3() {
  return (
    <div className="w-full h-max py-[50px]">
      <div className="h-full w-full flex flex-col">
        <div className="h1">Main Focus/Mission Statement</div>
        <div className="h-max pt-[40px] flex flex-row gap-[30px]">
          <div className="h-max w-1/2 flex flex-row justify-start items-center gap-[30px]">
            <div className="hBig w-[104px]">1</div>
            <div className="flex-grow txtBig">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor.
            </div>
          </div>
          <div className="h-max w-1/2 flex flex-row justify-start items-center gap-[30px]">
            <div className="hBig w-[120px]">2</div>
            <div className="flex-grow txtBig">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor.
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Block3;
