import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans text-gray-800">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-900">About Me</h1>
        <p className="text-xl text-gray-600 mt-2">Aspiring Full-Stack Developer</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
        <p className="mt-4 text-lg text-gray-600">
          Hi! I'm Vadiraj Narayan Betageri, an aspiring full-stack developer with a passion for technology and coding.
          Currently, I am pursuing my Bachelor of Engineering in Electronics and Communication at Jain College of Engineering.
          I have gained practical experience through various internships and projects, and I'm always eager to learn and grow in the tech field.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">My Journey</h2>
        <p className="mt-4 text-lg text-gray-600">
          My journey into the world of technology began with a Diploma in Electronics & Communication, where I secured 86% and stood third in my class. During this time, I developed a strong interest in coding and technology, which led me to explore full-stack development.
          I have gained hands-on experience in various fields, including IoT, Arduino programming, CCNA routing, and web development.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I’ve been working on several tech projects, from building a Smart Refrigerator with IoT to developing an RFID-based Attendance System, and even a key management system for HAL. These projects have allowed me to dive deep into technologies like HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-600">
          <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS, Figma</li>
          <li>Backend: Node.js, Express.js, MongoDB, RESTful API development</li>
          <li>Version Control: Git, GitHub</li>
          <li>Networking: CCNA Routing and Switching</li>
          <li>Data Structures & Algorithms: Proficient in DSA, especially Binary Search</li>
          <li>Other: Arduino, IoT, PLC Programming, HMI, VFD</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Notable Projects</h2>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-600">
          <li><strong>Smart Refrigerator using IoT</strong> (Aug-Dec 2022): A project that detects temperature and humidity changes and sends the data to an IoT analytics platform.</li>
          <li><strong>RFID-Based Attendance System</strong> (June-Aug 2024): A system that automatically marks attendance using RFID tags, integrated with Google Sheets for data management.</li>
          <li><strong>HAL Key Management System</strong> (Ongoing): A full-stack system for key issuance and tracking, designed for HAL, incorporating role-based access and a security dashboard.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Interests</h2>
        <p className="mt-4 text-lg text-gray-600">
          I have a wide range of interests outside of coding, such as traveling to new places (I've visited Dandeli, Gokarn, and many waterfalls), playing Kabaddi, and reading. These activities help me stay balanced and inspire my creativity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Looking Ahead</h2>
        <p className="mt-4 text-lg text-gray-600">
          As I move forward in my career, I aim to continue growing as a full-stack developer and explore advanced technologies like DevOps, machine learning, and cloud computing. My goal is to contribute to impactful projects and collaborate with like-minded professionals in the tech industry.
        </p>
      </section>
    </div>
  );
};

export default About;
