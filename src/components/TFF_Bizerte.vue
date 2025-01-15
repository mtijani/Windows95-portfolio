<template>
  <div class="win95-window">
    <div class="win95-content">
      <h3 class="title">TFF Bizerte Referees Project</h3>
      <p><strong>Title:</strong> Management System for Referees</p>
      <p>
        <strong>Technologies:</strong> PyQt, SQLite, Qt Designer
      </p>
      <p>
        <strong>Project Description:</strong>
        The project aimed to design and develop a desktop application for managing the data of football referees in the Bizerte region. The application allows users to add, modify, and delete referee information, view details, maintain accurate records, and calculate the salary of the referee per match. It also includes a user-friendly interface designed with Qt Designer to facilitate easy interaction with the database.
      </p>

      <h3 class="title">Development Phases</h3>
      <ul>
        <li><strong>Analysis:</strong> Understanding the needs of the TFF Bizerte and identifying the system requirements.</li>
        <li><strong>Design:</strong> Creating the UI layout using Qt Designer, planning the database schema, and establishing features.</li>
        <li><strong>Development:</strong> Implementing the PyQt application, creating CRUD operations, salary calculation feature, and ensuring system stability.</li>
      </ul>

      <p>
        During the design phase, the user interface was optimized for simplicity and usability, allowing the user to manage referees' data easily and efficiently. The database was designed using SQLite to store referees' personal details and match data, as well as the salary calculation logic.
      </p>

      <h3 class="title">Features</h3>
      <ul>
        <li>Referee data management: Add, edit, and delete referee records.</li>
        <li>Match assignment management: Track referees' match assignments and related information.</li>
        <li>Search functionality: Search for referees by name, ID, or other criteria.</li>
        <li>Salary calculation: Automatically calculates the referee's salary per match based on predefined rates.</li>
        <li>User-friendly interface: A dynamic and responsive layout designed with Qt Designer.</li>
        <li>Data storage: Referee data stored securely in an SQLite database.</li>
      </ul>

      <h3 class="title">Project Screenshot</h3>
      <div class="image-item">
        <img :src="require('@/assets/TFF.png')" alt="TFF Bizerte Referees App Screenshot" class="screenshot" />

        <p>Screenshot of the TFF Bizerte Referees Management System</p>
      </div>

      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "TFF_Bizerte",
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

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.screenshot {
  width: 100%;
  max-width: 500px; /* Adjust size as needed */
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
