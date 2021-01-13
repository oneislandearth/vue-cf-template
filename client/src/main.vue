<template>
  <section class="container">
      <h1>Vue-CF-Template</h1>
      <h2>{{ time.hours }}:{{ time.minutes }}:{{ time.seconds }}</h2>
    </section>
</template>

<script>

  // Export the main intefface
  export default {

    // Name the module
    name: 'application',

    // Define the data properties
    data() {
      return {
        timestamp: Date.now()
      }
    },

    // Define computed properties
    computed: {

      // Compute the time as a string
      time() {

        // Get the time from the date
        const date = new Date(this.timestamp); 

        // Return the time components
        return {
          hours: String(date.getHours()).padStart(2, '0'),
          minutes: String(date.getMinutes()).padStart(2, '0'),
          seconds: String(date.getSeconds()).padStart(2, '0')
        }
      }
    },

    // Define the mounted function
    mounted() {

      // Start an interval every second updating the time
      setInterval(() => this.timestamp += 1000, 1000);
    }
  }

</script>
