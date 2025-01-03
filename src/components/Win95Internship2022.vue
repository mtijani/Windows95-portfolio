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

      <h2>Screenshots and Descriptions</h2>
      <div class="image-section">
        <div class="image-item">
          <img :src="require('@/assets/Internship2022/Search.png')" alt="Homepage" class="screenshot" />
          <p><strong>Homepage:</strong> This interface welcomes new users and invites them to join the community by creating an account.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/Internship2022/Authentication.png')" alt="Authentication" class="screenshot" />
          <p><strong>Authentication:</strong> Users log in to access their accounts and manage bookings.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/Internship2022/Login.png')" alt="Registration" class="screenshot" />
          <p><strong>Registration:</strong> New users can create an account to access the application features.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/Internship2022/room_description.png')" alt="Room Description" class="screenshot" />
          <p><strong>Room Description:</strong> Users can view detailed information about available rooms.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/Internship2022/booking.png')" alt="Booking" class="screenshot" />
          <p><strong>Booking:</strong> After selecting a preferred room, users confirm their booking in this final step.</p>
        </div>
        <div class="image-item">
          <img :src="require('@/assets/Internship2022/admin_platform.png')" alt="Administrator Platform" class="screenshot" />
          <br>
          <img :src="require('@/assets/Internship2022/admin_platform2.png')" alt="Administrator Platform" class="screenshot" />

          <p><strong>Administrator Platform:</strong> Administrators manage accounts, rooms, and pricing plans through this interface.</p>
        </div>
      </div>
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
