<template>
    <div class="win95-window">
      <div class="win95-content">
        <h3 class="title">Internship 2021</h3>
        <p><strong>Title:</strong> Development of an E-Learning Platform</p>
        <p>
          <strong>Technologies:</strong> Node.js, Angular, MongoDB
        </p>
        <p>
          <strong>Project Description:</strong>
          The goal was to design and develop an online course platform offering personalized and simplified learning spaces for students. This platform is based on a web interface to ensure compatibility across operating systems, with features emphasizing speed, ease of use, and an ergonomic design.
        </p>
        
        <h3 class="title">Development Phases</h3>
        <ul>
          <li><strong>Analysis:</strong> Study of the existing system and specification of needs.</li>
          <li><strong>Design:</strong> Creation of system architecture and UI/UX planning.</li>
          <li><strong>Development:</strong> Implementation of functionalities and system optimization.</li>
        </ul>
  
        <p>
          During the analysis phase, existing issues were identified and addressed by proposing the creation of a private online course platform. The platform aims to:
        </p>
        <ul>
          <li>Offer a web-based e-learning solution compatible with different operating systems.</li>
          <li>Provide fast response times for a seamless user experience.</li>
          <li>Ensure simplicity and ergonomic interface design despite the wide range of features.</li>
        </ul>
  
        <h3 class="title">Features</h3>
        <ul>
          <li>User authentication.</li>
          <li>Homepage with accessible course details.</li>
          <li>Management of learners by administrators.</li>
          <li>Courses browsing: Learners can view course titles and descriptions and enroll in courses with a single click.</li>
          <li>Access to enrolled courses: Learners can view the list of courses they are registered for and access associated video content.</li>
        </ul>
        <br>
        <br>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Win95Internship2021",
  };
  </script>
  
  <style scoped>
  .win95-window {
    width: 100%;
    height: 100vh; /* Ensure full screen height for the container */
    background-color: #c0c0c0;
    font-family: "MS Sans Serif", sans-serif;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .win95-header {
    background: linear-gradient(to bottom, #000080, #0000a0);
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    text-shadow: 1px 1px #a51c1c;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .win95-content {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto; /* Ensure scroll when content overflows */
    background-color: #ffffff;
    height: 100%; /* Ensure full height inside the window */
    scrollbar-width: thin;
    scrollbar-color: #888 #e0e0e0;
  }
  
  .win95-content::-webkit-scrollbar {
    width: 16px; /* Increased width for thicker scrollbar */
  }
  
  .win95-content::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px; /* Optional: More rounded thumb */
  }
  
  .win95-content::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  
  .win95-content h3.title {
    font-size: 16px;
    margin-bottom: 10px;
    color: #000080;
  }
  
  .win95-content p {
    margin: 5px 0;
    line-height: 1.6;
  }
  
  .win95-content ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .win95-content ul li {
    margin-bottom: 5px;
  }
  </style>