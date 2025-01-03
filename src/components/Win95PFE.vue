<template>
  <div class="win95-window">
    <div class="win95-content">
      <h1>Dashboarding and Monitoring of the TMC Platform</h1>
      <p><strong>Title:</strong> Comprehensive Decision-Support Tool for Talend Developers</p>
      <p><strong>Technologies:</strong> Talend, MySQL, JavaScript, Vue.js, Flask, Prometheus, Grafana, Python, VANNA AI</p>
      <p>
        <strong>Project Description:</strong>
        Developed a platform that enables Talend developers to monitor job performance, server health, and system metrics, providing real-time insights and interactive dashboards for decision-making.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Real-time monitoring of server and job execution metrics using Prometheus and Grafana.</li>
        <li>Interactive dashboards built with Vue.js for visualizing performance trends and anomalies.</li>
        <li>Integration of LLMs for text-to-SQL querying, simplifying data analysis tasks.</li>
        <li>Custom APIs developed in Flask for efficient backend communication.</li>
      </ul>

      <h2>Screenshots and Descriptions</h2>
      <div class="image-section">
        <div class="image-item">
          <img :src="require('@/assets/PFE/Dashboard.png')" alt="Dashboard Overview" class="screenshot" />
          <img :src="require('@/assets/PFE/Dashboard2.png')" alt="Dashboard Overview" class="screenshot" />

          <p><strong>Dashboard Overview:</strong> Displays key performance indicators, including job execution stats and resource utilization.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/PFE/Grafana1.png')" alt="Server Monitoring" class="screenshot" />
          <img :src="require('@/assets/PFE/Grafana2.png')" alt="Server Monitoring" class="screenshot" />

          <p><strong>Server Monitoring:</strong> Real-time insights into CPU, memory, and disk usage across the infrastructure.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/PFE/JobDetails.png')" alt="Job Execution Details" class="screenshot" />
          <p><strong>Job Execution Details:</strong> Visualizes job performance, success rates, and common errors.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/PFE/Chatbot.png')" alt="LLM Integration" class="screenshot" />
          <p><strong>LLM Integration:</strong> Simplifies SQL query generation for data analysis through natural language inputs.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/PFE/Admin.png')" alt="Administrator Platform" class="screenshot" />
          <p><strong>Administrator Platform:</strong> Controls which dashboards are accessible to specific users based on their roles and permissions.</p>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "TMCPlatformDashboard",
};
</script>

<style scoped>
.win95-window {
  width: 100%;
  height: 100vh;
  background-color: #c0c0c0;
  font-family: "MS Sans Serif", sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.win95-content {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #ffffff;
  height: 100%;
  scrollbar-width: thin;
  scrollbar-color: #888 #e0e0e0;
}

.win95-content::-webkit-scrollbar {
  width: 16px;
}

.win95-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
}

.win95-content::-webkit-scrollbar-track {
  background: #e0e0e0;
}

.image-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.image-item {
  flex: 1 1 calc(50% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.screenshot {
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 2px solid #000080;
  margin-bottom: 10px;
}

.image-item p {
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}
</style>
