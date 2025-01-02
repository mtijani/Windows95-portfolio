<!-- <template>
  <div class="talend-ui">
    <h1>Talend</h1>
    <div class="input-section">
      <label>Database:</label>
      <input type="text" value="world" readonly />
      <label>Table:</label>
      <input type="text" value="talend_developers" readonly />
    </div>
    <div class="query-section">
      <button @click="guessQuery">Guess Query</button>
      <button v-if="query" @click="executeQuery">Execute</button>
      <div v-if="query" v-html="highlightedQuery" class="query-output"></div>
    </div>
    <div v-if="queryResult" class="result-section">
      <h2>Query Result</h2>
      <div class="result-table">
        <div class="table-header">
          <span v-for="header in headers" :key="header" class="table-cell">{{ header }}</span>
        </div>
        <div v-for="row in queryResult" :key="row.id" class="table-row">
          <span v-for="value in row" :key="value" class="table-cell">{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: null,
      queryResult: null, // To hold the executed query results
      headers: ["First_Name", "Last_Name", "Age", "Company", "Technologies"], // Table headers
    };
  },
  computed: {
    highlightedQuery() {
      if (!this.query) return "";
      return this.query
        .replace(/\b(SELECT|FROM|WHERE|AND|OR)\b/g, '<span class="sql-keyword">$1</span>')
        .replace(/\*/g, '<span class="sql-asterisk">*</span>');
    },
  },
  methods: {
    guessQuery() {
      this.query = `SELECT * FROM talend_developers WHERE First_Name="Mohamed Tijani" AND Company="Dataraise"`;
    },
    executeQuery() {
      // Simulating a query result
      this.queryResult = [
        { First_Name: "Mohamed Tijani", Last_Name: "KHAMMOUMA", Age: 25, Company: "Dataraise", Technologies: "Java, Python, SQL, Talend, VueJS, LLMs " },
      ];
    },
  },
};
</script>

<style>
.talend-ui {
  font-family: "Arial", sans-serif;
  padding: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
}

.input-section input {
  margin: 5px 0;
  width: 100%;
}

.query-section .query-output {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  font-family: "Courier New", Courier, monospace;
  white-space: pre-wrap;
}

.sql-keyword {
  color: #007ACC; /* Talend blue */
  font-weight: bold;
}

.sql-asterisk {
  color: #FF2C00; /* Talend red */
  font-weight: bold;
}

/* Query Result Table */
.result-section {
  margin-top: 20px;
}

.result-table {
  width: 100%;
  border: 1px solid #ccc;
  font-family: "Courier New", Courier, monospace;
}

.table-header {
  display: flex;
  background-color: #007ACC;
  color: white;
  font-weight: bold;
  padding: 5px;
}

.table-row {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.table-cell {
  flex: 1;
  padding: 5px;
  text-align: center;
}
</style> -->
<template>
  <div class="talend-ui">
    <h1>tdbOutput</h1>
    <div class="input-section">
      <label>Database:</label>
      <input type="text" value="world" readonly />
      <label>Table:</label>
      <input type="text" value="talend_developers" readonly />
    </div>
    <div class="query-section">
      <button @click="guessQuery">Guess Query</button>
      <button v-if="query" @click="executeQuery">Execute</button>
      <button v-if="queryResult" @click="clearOutput">Clear</button>
      <div v-if="query" v-html="highlightedQuery" class="query-output"></div>
    </div>
    <div v-if="queryResult" class="result-section">
      <h2>Query Result</h2>
      <div class="result-table">
        <div class="table-header">
          <span v-for="header in headers" :key="header" class="table-cell">{{ header }}</span>
        </div>
        <div v-for="row in queryResult" :key="row.id" class="table-row">
          <span v-for="value in row" :key="value" class="table-cell">{{ value }}</span>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: null,
      queryResult: null, // Holds the executed query results
      headers: ["First_Name", "Last_Name", "Age", "Company", "Technologies"], // Table headers
    };
  },
  computed: {
    highlightedQuery() {
      if (!this.query) return "";
      return this.query
        .replace(/\b(SELECT|FROM|WHERE|AND|OR)\b/g, '<span class="sql-keyword">$1</span>')
        .replace(/\*/g, '<span class="sql-asterisk">*</span>');
    },
  },
  methods: {
    guessQuery() {
      this.query = `SELECT * FROM talend_developers WHERE First_Name="Mohamed Tijani" AND Company="Dataraise"`;
    },
    executeQuery() {
      // Simulating a query result
      this.queryResult = [
      { First_Name: "Mohamed Tijani", Last_Name: "KHAMMOUMA", Age: 25, Company: "Dataraise", Technologies: "Java, Python, SQL, Talend, VueJS, LLMs " },

      ];
    },
    clearOutput() {
      this.queryResult = null; // Clear the query result
    },
  },
};
</script>

<style>
.talend-ui {
  font-family: "Arial", sans-serif;
  padding: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
}

.input-section input {
  margin: 5px 0;
  width: 100%;
}

.query-section .query-output {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  font-family: "Courier New", Courier, monospace;
  white-space: pre-wrap;
}

.sql-keyword {
  color: #007ACC; /* Talend blue */
  font-weight: bold;
}

.sql-asterisk {
  color: #FF2C00; /* Talend red */
  font-weight: bold;
}

/* Query Result Table */
.result-section {
  margin-top: 20px;
}

.result-table {
  width: 100%;
  border: 1px solid #ccc;
  font-family: "Courier New", Courier, monospace;
}

.table-header {
  display: flex;
  background-color: #007ACC;
  color: white;
  font-weight: bold;
  padding: 5px;
}

.table-row {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.table-cell {
  flex: 1;
  padding: 5px;
  text-align: center;
}
</style>
