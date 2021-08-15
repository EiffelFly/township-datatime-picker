import * as React from "react";
import { AlarmFillIcon } from "./icon/AlarmFillIcon";
import { CameraVideoFillIcon } from "./icon/CameraVideoFillIcon";
import SummerbudAvatar from "./SummerbudAvatar";

interface Props {
  meetingTitle: string;
  meetingDescription: string;
  meetingTime: string;
  meetingPlace: string
}

const MeetingIntro: React.FC<Props> = ({ meetingTitle, meetingDescription, meetingTime, meetingPlace }) => {
  return (
    <div
      className="flex flex-col flex-1 max-w-md"
    >
      <SummerbudAvatar
        size={"60"}
        className={"mr-auto"}
      />
      <div
        className="mt-8 font-sans text-left font-semibold text-sdm-cg-50 text-3xl"
      >
        {meetingTitle}
      </div>
      
      <div
        className="mt-6 font-sans text-left font-normal text-sdm-cg-200 text-lg"
      >
        {meetingDescription}
      </div>
      <div
        className="flex flex-row gap-x-4 mt-12"
      >
        <AlarmFillIcon className={"text-sdm-cg-200 h-6 w-6"} />
        <div
          className="font-sans text-sdm-cg-200 text-lg font-semibold"
        >
          {meetingTime}
        </div>
      </div>
      <div
        className="flex flex-row gap-x-4 mt-6"
      >
        <CameraVideoFillIcon className={"text-sdm-cg-200 h-6 w-6"} />
        <div
          className="font-sans text-sdm-cg-200 text-lg font-semibold"
        >
          {meetingPlace}
        </div>
      </div>
      
    </div>
  )
}

export default MeetingIntro