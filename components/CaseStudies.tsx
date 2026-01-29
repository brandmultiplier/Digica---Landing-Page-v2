import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight, Cpu, Eye, Activity, Wifi } from 'lucide-react';

const projects = [
  {
    client: "TOY FACTORY",
    title: "Hidden quality defects exposed",
    problem: "Manual inspection was missing printing errors that led to customer returns.",
    solution: "We built an automated system that detects three types of defects invisible to the human eye, with clear accept/reject thresholds.",
    tech: "Computer Vision, Real-time Analysis",
    icon: <Eye className="w-6 h-6" />,
    result: "Eliminated subjective QA decisions. Defect escape rate reduced to near-zero."
  },
  {
    client: "BAE Systems",
    title: "Real-time process visibility",
    problem: "Energy and resource consumption varied wildly with no clear explanation.",
    solution: "We created real-time visibility into process efficiency, showing exactly where waste was occurring and how to eliminate it.",
    tech: "Process Analytics, Optimisation Engine",
    icon: <Activity className="w-6 h-6" />,
    result: "Operators now see optimal scheduling in real-time. Resource waste identified and eliminated."
  },
  {
    client: "Anybotics",
    title: "Remote equipment monitoring",
    problem: "Critical equipment in hostile environments couldn't be inspected safely.",
    solution: "We enabled remote visibility into gauges, liquid levels, and thermal anomalies — without putting people at risk.",
    tech: "Remote Inspection, Anomaly Detection",
    icon: <Cpu className="w-6 h-6" />,
    result: "24/7 visibility in hazardous areas. Issues caught before they become failures."
  },
  {
    client: "Ayla Networks",
    title: "Predicting failures before they happen",
    problem: "Device reboots were causing customer complaints but happening without warning.",
    solution: "We built a system that sees the patterns leading to failure — 12 hours before it happens.",
    tech: "Predictive Analytics, Root Cause Analysis",
    icon: <Wifi className="w-6 h-6" />,
    result: "12-hour advance warning with >85% accuracy. Proactive intervention now possible."
  },
  {
    client: "Medical Imaging Silicon",
    title: "Finding defects before assembly",
    problem: "Faulty silicon was being assembled into expensive equipment, discovered only at final test.",
    solution: "We built visibility into wafer quality at the slice level — catching defects before they become costly.",
    tech: "Defect Detection, Quality Analytics",
    icon: <Activity className="w-6 h-6" />,
    result: "100% of defective slices identified before assembly. Rework costs eliminated."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>Case Studies</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 hover:border-digica-red hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-gray-100 rounded-sm text-digica-dark group-hover:bg-digica-red group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{project.client}</span>
              </div>

              <h3 className="text-xl font-bold text-digica-dark mb-3">{project.title}</h3>
              <div className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                <p className="mb-4">{project.problem}</p>
                <p className="font-bold text-digica-dark">{project.solution}</p>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="mb-3">
                  <span className="text-xs font-bold text-digica-red uppercase">Result:</span>
                  <p className="text-xs text-gray-700 mt-1">{project.result}</p>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
