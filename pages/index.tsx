import * as React from 'react';
import DatePicker from '../components/DatePicker';
import MeetingIntro from '../components/MeetingIntro';
import { PageRootLayout } from '../components/PageRootLayou';
import SectionContainer from '../components/SectionContainer';
import dayjs, { Dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

interface Props {}

dayjs.extend(utc);
dayjs.extend(timezone);

const Index: React.FC<Props> = () => {
	return (
		<PageRootLayout>
			<SectionContainer>
				<div className="m-auto flex flex-col p-8 md:gap-x-16 md:flex-row min-h-xl border border-sdm-bronze-300 rounded-md bg-opacity-10 bg-sdm-cg-500 shadow-2xl">
					<MeetingIntro
						meetingTitle={'township user interview with Summerbud'}
						meetingDescription={
							'Hi, I am working on township, a community manage workflow tool built for discussion group or bookclub. We need to interview lots of host or attendee of these communities. \n If you are one of them, feel free to fill in the form. I am very willing to have a casual talk with you.'
						}
						meetingTime={'45 min'}
						meetingPlace={'Web conferencing details provided upon confirmation.'}
						neededSlots={5}
					/>
					<DatePicker weekStart={'Monday'} neededSlots={5} date={dayjs()} inviteeTimeZone={'America/New_York'} />
				</div>
			</SectionContainer>
		</PageRootLayout>
	);
};

export default Index;
