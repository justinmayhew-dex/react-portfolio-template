import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const skillRefs = Array.from(document.querySelectorAll('.vertical-timeline-element-content'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skillRefs.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 1 }
    );

    skillRefs.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      skillRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  const timelineData = [
    {
      date: "2022 - present",
      title: "Computer Science",
      subtitle: "Manchester, UK",
      description: "Studied Computer Science BA at Manchester University",
    },
    {
      date: "2020 - 2022",
      title: "Carbless",
      subtitle: "Cairo, EG",
      description: "Doing Frontend Development, Backend Development and Operations as the CTO of Carbless Egypt",
    },
    {
      date: "2021 - 2021",
      title: "Infralayer",
      subtitle: "Cairo, EG",
      description: "Full-stack Development, API Development, User Experience",
    },
    {
      date: "2020 - 2020",
      title: "Hive Analytics",
      subtitle: "Chicago, IL",
      description: "Frontend Developer for Hive Analytics",
    },
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--work ${activeIndex === index ? 'hover' : ''}`}
              contentStyle={{ background: 'var(--card-bg)', color: '#FFF' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={item.date}
              iconStyle={{ background: '#fff', boxShadow: 'var(--bg-color) 0px 0px 0px 10px', width: '20px', height: '20px', marginTop: '35px' }}

            >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
