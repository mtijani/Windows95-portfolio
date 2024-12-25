<template>
    <div class="win95-window">
      
      <div class="win95-content">
        <h3 class="title">Project Overview</h3>
        <p><strong>Project Title:</strong> Dashboarding and Monitoring of the TMC Platform</p>
        <p>
          <strong>Description:</strong> Developed a decision-support tool for Talend developers, 
          leveraging web technologies, Talend, and MySQL to analyze descriptive and predictive data 
          and monitor the Talend Management Cloud (TMC).
        </p>
        <p><strong>Technologies:</strong> Talend, MySQL, JavaScript, Vue.js, Flask</p>
        <p><strong>Duration:</strong> 6 months</p>
  
        <h3 class="title">Key Features</h3>
        <ul>
          <li>Real-time data analysis for descriptive and predictive data.</li>
          <li>Custom dashboard to monitor the Talend Management Cloud platform's performance.</li>
          <li>Seamless integration with Talend components for enhanced data management.</li>
        </ul>
  
        <h3 class="title">Challenges and Solutions</h3>
        <p><strong>Challenge:</strong> Implementing predictive analytics within the platform.</p>
        <p><strong>Solution:</strong> Leveraged machine learning algorithms for predictive insights, combined with Talend's powerful data integration capabilities.</p>
  
        <h3 class="title">Learning Outcomes</h3>
        <ul>
          <li>Enhanced understanding of data integration using Talend and MySQL.</li>
          <li>Improved skills in JavaScript and Vue.js for building interactive dashboards.</li>
          <li>Experience in working with Flask for backend development.</li>
          
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Win95PFE",
  };
  </script>
  
  <style scoped>
  .win95-window {
    width: 100%; /* Allow full width in the parent container */
    height: 100%; /* Allow full height in the parent container */
    background-color: #c0c0c0;
    font-family: "MS Sans Serif", sans-serif;
    box-shadow: 2px 2px 0 #fff, -2px -2px 0 #000;
    border: 2px solid #808080;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .win95-header {
    background: linear-gradient(to bottom, #000080, #0000a0);
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    text-shadow: 1px 1px #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .win95-content {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    background-color: #ffffff;
    scrollbar-width: thin;
    scrollbar-color: #888 #e0e0e0;
  }
  
  .win95-content::-webkit-scrollbar {
    width: 10px;
  }
  
  .win95-content::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
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
  