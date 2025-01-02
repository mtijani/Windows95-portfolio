<template>
    <div class="talend-ui">
      <h1>Talend Simulator</h1>
      <div class="input-section">
        <label>Database:</label>
        <input type="text" value="world" readonly />
        <label>Table:</label>
        <input type="text" value=" talend_developers" readonly />
      </div>
      <div class="query-section">
        <button @click="guessQuery">Guess Query</button>
        <div v-if="query" v-html="highlightedQuery" class="query-output"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: null,
      };
    },
    computed: {
      highlightedQuery() {
        if (!this.query) return "";
        // Replace SQL keywords with blue and `*` with red
        return this.query
          .replace(/\b(SELECT|FROM|WHERE|AND|OR)\b/g, '<span class="sql-keyword">$1</span>') // Blue for keywords
          .replace(/\*/g, '<span class="sql-asterisk">*</span>'); // Red for *
      },
    },
    methods: {
      guessQuery() {
        this.query = `SELECT * FROM talend_developers WHERE Name="M" AND Company="X"`;
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
    font-family: "Courier New", Courier, monospace; /* Monospace for code style */
    white-space: pre-wrap; /* Preserve whitespace */
  }
  
  .sql-keyword {
    color: #007ACC; /* Talend blue */
    font-weight: bold;
  }
  
  .sql-asterisk {
    color: #FF2C00; /* Talend red */
    font-weight: bold;
  }
  </style>
  