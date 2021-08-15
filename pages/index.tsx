import * as React from "react";
import MeetingIntro from "../components/MeetingIntro";
import { PageRootLayout } from "../components/PageRootLayou";
import SectionContainer from "../components/SectionContainer";

interface Props { }

const Index: React.FC<Props> = () => {
  return (
    <PageRootLayout>
      <SectionContainer>
        <div
          className="m-auto flex flex-col p-8 md:flex-row min-h-xl border-2 border-sdm-bronze-300 rounded-md bg-opacity-5 bg-sdm-cg-500 shadow-xl"
        >
          <MeetingIntro 
            meetingTitle={"Township user interview with Summerbud"}
            meetingDescription={"Hi, I am working on township, a community manage workflow tool built for discussion group or bookclub. We need to interview lots of host or attendee of these communities. \n If you are one of them, feel free to fill in the form. I am very willing to have a casual talk with you."}
            meetingTime={"45 min"}
            meetingPlace={"Web conferencing details provided upon confirmation."}
          />
        </div>
      </SectionContainer>
    </PageRootLayout>
  )
};

export default Index
