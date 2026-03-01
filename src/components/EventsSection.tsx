import SectionBlock from "./SectionBlock";

const events = [
    {
        role: "Chief Operating Officer (COO)",
        organization: "TNPS Forge Club",
        year: "2026",
        points: [
            "Managed day-to-day operations and coordination of hostel-related activities.",
            "Led planning and execution of student engagement programs.",
            "Coordinated between student teams, faculty, and administration.",
            "Supervised volunteers and ensured smooth functioning of club initiatives.",
            "Contributed as a founding member to establish club structure and processes.",
        ],
    },
    {
        role: "Discipline Head",
        organization: "IGNITE Forum, CSBS Department",
        year: "2025",
        points: [
            "Led discipline and coordination for departmental activities.",
            "Supported academic and technical events.",
            "Ensured smooth conduct of student programs.",
        ],
    },
    {
        role: "Co-Coordinator",
        organization: "RATAN Business Case Study Competition",
        year: "2025",
        points: [
            "Organized and managed inter-college business case competition.",
            "Handled registrations, scheduling, and participant coordination.",
            "Worked closely with faculty and student teams.",
        ],
    },
];

const EventsSection = () => (
    <SectionBlock id="events" title="Events & Forums">
        <div className="space-y-12">
            {events.map((event) => (
                <div
                    key={event.role + event.organization}
                    className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
                >
                    {/* Left: Year + Org */}
                    <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
                        <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-full bg-black" />
                        <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-full bg-black" />
                        <h4 className="font-mono text-sm tracking-widest text-foreground/60 uppercase mb-1">
                            {event.year}
                        </h4>
                        <h3 className="font-bold text-lg md:text-xl">{event.organization}</h3>
                    </div>

                    {/* Right: Role + Points */}
                    <div className="mt-2 md:mt-0">
                        <h3 className="text-xl font-bold text-foreground mb-3">{event.role}</h3>
                        <ul className="space-y-1">
                            {event.points.map((point, i) => (
                                <li key={i} className="body-text text-sm md:text-base flex gap-2">
                                    <span className="text-foreground/40 shrink-0">—</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </SectionBlock>
);

export default EventsSection;
