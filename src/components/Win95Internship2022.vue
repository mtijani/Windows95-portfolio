<template>
    <div class="win95-window">
      <div class="win95-content">
        <h1>Internship 2022</h1>
        <p><strong>Title:</strong> Creation of a Web Application for Hotel Reservation Management</p>
        <p><strong>Technologies:</strong> Node.js, Angular, MongoDB</p>
        <p>
          <strong>Project Description:</strong>
          A full-stack web application allowing hotel clients to view available rooms, check prices based on selected dates, and make reservations.
        </p>
        <h2>Actors and Use Cases</h2>
        <h3>Administrator</h3>
        <ul>
          <li>Authenticate</li>
          <li>Manage clients</li>
          <li>Manage rooms</li>
          <li>Manage pricing plans</li>
          <li>View statistics</li>
        </ul>
        <h3>Client</h3>
        <ul>
          <li>Authenticate</li>
          <li>Register on the platform</li>
          <li>View rooms</li>
          <li>Make reservations</li>
          <li>Search rooms</li>
        </ul>
        <h3>Visitor</h3>
        <ul>
          <li>View rooms</li>
          <li>Search rooms</li>
        </ul>
        <br>
        <br>
        <br>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "win95Internship2022",
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
  
  