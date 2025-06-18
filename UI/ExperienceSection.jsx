import React from 'react';
import { Divider, Steps } from 'antd';

const ExperienceSection = () => {
  return (
    <div className="bg-[#0d0d0d] text-white px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Professional Experience</h2>

      <Steps
        progressDot
        direction="vertical"
        current={0}
        items={[
          {
            title: 'Associate Software Engineer – Biz Credence Inc',
            description: (
              <div className="text-gray-300 text-sm">
                <p className="mb-1 text-gray-400">2025 – Present | Hyderabad, India</p>
                <ul className="list-disc pl-5">
                  <li>Built modern, responsive web apps using React.js and component architecture.</li>
                  <li>Designed dynamic forms with React Hook Form, integrated REST APIs using Axios.</li>
                  <li>Managed state via React Query & Context API.</li>
                  <li>Styled UI with Tailwind CSS, wrote unit tests with Jest.</li>
                  <li>Worked in Agile teams using GitHub with Vite/Webpack build tools.</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Frontend Developer Intern – Dubtap Technologies LLP',
            description: (
              <div className="text-gray-300 text-sm">
                <p className="mb-1 text-gray-400">2024 | Bangalore, India</p>
                <ul className="list-disc pl-5">
                  <li>Built responsive UI components using React and Vite.</li>
                  <li>Developed sortable tables with AG Grid, HTML, and CSS.</li>
                  <li>Implemented login, wallet, and role-based authentication.</li>
                  <li>Integrated REST APIs and improved performance & Lighthouse scores.</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Frontend Developer Intern – Trade Brains',
            description: (
              <div className="text-gray-300 text-sm">
                <p className="mb-1 text-gray-400">2024 | Bangalore, India</p>
                <ul className="list-disc pl-5">
                  <li>Built CMS UI with Next.js, React.js, and Figma designs.</li>
                  <li>Worked with Supabase, Firebase, PostgreSQL, and Chart.js.</li>
                  <li>Used Ant Design, Shadcn UI, and Chakra UI for styling & data visualization.</li>
                  <li>Built reusable components, optimized performance, fixed UI/UX bugs.</li>
                  <li>Collaborated with cross-functional teams in Agile workflows.</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <Divider className="bg-gray-600" />
    </div>
  );
};

export default ExperienceSection;
