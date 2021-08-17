import * as React from "react";
import { AlarmFillIcon } from "./icon/AlarmFillIcon";
import { AlarmIcon } from "./icon/AlarmIcon";
import { CalendarCheckIcon } from "./icon/CalendarCheckIcon";
import { CameraVideoFillIcon } from "./icon/CameraVideoFillIcon";
import { CameraVideoIcon } from "./icon/CameraVideoIcon";
import SummerbudAvatar from "./SummerbudAvatar";

interface Props {
  meetingTitle: string;
  meetingDescription: string;
  meetingTime: string;
  meetingPlace: string
  neededSlots: number;
}

const MeetingIntro: React.FC<Props> = ({ meetingTitle, meetingDescription, meetingTime, meetingPlace, neededSlots }) => {
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
        <AlarmIcon className={"text-sdm-cg-200 h-6 w-6"} />
        <div
          className="font-sans text-sdm-cg-200 text-lg font-semibold"
        >
          {meetingTime}
        </div>
      </div>
      <div
        className="flex flex-row gap-x-4 mt-6"
      >
        <CameraVideoIcon className={"text-sdm-cg-200 h-7 w-7"} />
        <div
          className="font-sans text-sdm-cg-200 text-lg font-semibold"
        >
          {meetingPlace}
        </div>
      </div>
      <div
        className="flex flex-row gap-x-4 mt-6"
      >
        <CalendarCheckIcon className={"text-sdm-cg-200 h-6 w-6"} />
        <div
          className="font-sans text-sdm-cg-200 text-lg font-semibold"
        >
          {neededSlots + " time slots needed"}
        </div>
      </div>
      
    </div>
  )
}

export default MeetingIntro