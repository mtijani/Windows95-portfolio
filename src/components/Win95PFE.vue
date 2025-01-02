<template>
  <div class="win95-window">
      <div class="win95-content">
          <h3 class="title">Project Overview</h3>
          <p><strong>Project Title:</strong> Dashboarding and Monitoring of the TMC Platform</p>
          <p>
              <strong>Description:</strong> Developed a comprehensive decision-support tool for Talend developers. The project leveraged web technologies, Talend, and MySQL to monitor the Talend Management Cloud (TMC), ensure efficient server surveillance, and provide insights using interactive dashboards.
          </p>
          <p><strong>Technologies:</strong> Talend, MySQL, JavaScript, Vue.js, Flask, Prometheus, Grafana, Python, Large Language Models (LLMs), VANNA AI</p>
          <p><strong>Duration:</strong> 6 months</p>

          <h3 class="title">Key Features</h3>
          <ul>
              <li>Real-time server metrics collection and visualization using Prometheus and Grafana.</li>
              <li>Interactive Vue.js dashboards providing decision-making insights, such as identifying the most executed jobs and resource usage trends.</li>
              <li>Integration of text-to-SQL LLM functionality to query data stored in the data warehouse effortlessly.</li>
              <li>Custom APIs designed with Flask for backend communication and automation of data retrieval tasks.</li>
              <li>Data warehousing capabilities to structure and consolidate datasets for efficient reporting.</li>
              <li>Monitoring job execution frequency, failure rates, and system performance to optimize the TMC platform.</li>
          </ul>

          <h3 class="title">Challenges and Solutions</h3>
          <p><strong>Challenge:</strong> Ensuring seamless integration between various tools and technologies for end-to-end data monitoring and analysis.</p>
          <p><strong>Solution:</strong> Utilized Talend for robust ETL processes, Prometheus and Grafana for server metrics visualization, and APIs to connect the backend and frontend efficiently.</p>
          <p><strong>Challenge:</strong> Building intuitive dashboards to assist decision-making.</p>
          <p><strong>Solution:</strong> Developed interactive dashboards with Vue.js that provide actionable insights such as execution statistics, performance anomalies, and resource usage patterns.</p>

          <h3 class="title">Learning Outcomes</h3>
          <ul>
              <li>In-depth understanding of data integration, ETL processes, and data warehousing using Talend and MySQL.</li>
              <li>Enhanced skills in building interactive dashboards with Vue.js and Grafana.</li>
              <li>Experience in designing APIs with Flask for efficient data communication.</li>
              <li>Proficiency in implementing server surveillance and monitoring solutions with Prometheus and Grafana.</li>
              <li>Hands-on experience with LLMs and VANNA AI for automating SQL query generation and enhancing data accessibility.</li>
              <br>
              <br>
              <br>
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
