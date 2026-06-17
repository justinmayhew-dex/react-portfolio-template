import React, { useEffect, useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function applyObserver() {
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
    }

    applyObserver()
  }, []);

  const timelineData = [
    {
      date: "Jun 2024 - Present",
      title: "Frontend Developer",
      subtitle: "Hive Analytics · Freelance (Hybrid)",
      description: "Own the full frontend lifecycle translating Figma designs to production. Built custom themes, JS plugins, and analytics pipelines that optimized conversion and reduced bounce rates by 40%.",
    },
    {
      date: "Mar 2023 - Mar 2024",
      title: "Software Engineer",
      subtitle: "Infralayer · Full-time (On-site)",
      description: "Full-stack startup role spanning frontend, tooling, and infrastructure. Built mobile webview feeds and engineered a custom Node.js/Bash AST JavaScript obfuscator from scratch.",
    },
    {
      date: "May 2021 - Apr 2023",
      title: "Chief Operations Officer",
      subtitle: "Carbless.Egypt · Full-time (Cairo, EG)",
      description: "Managed startup operations while self-teaching development. Engineered internal Python tools and custom automated WhatsApp pipelines to streamline delivery logistics at scale.",
    },
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline animate={false}>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--work ${activeIndex === index ? 'hover' : ''}`}
              contentStyle={{ background: 'var(--card-bg)', color: 'var(--input-color)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={item.date}
              dateClassName={"vertical-timeline-element-date"}
              iconStyle={{ background: 'var(--input-color)', boxShadow: 'var(--bg-color) 0px 0px 0px 10px', width: '20px', height: '20px', marginTop: '35px' }}
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
