<template>
  <div class="row">
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h4 class="card-title">제목~~</h4>
        <p class="card-category">
          카테고리
        </p>
      </template>
      <div class="content">
        <div class="hello">
          <h1>Weather Report</h1>
          <div>
            The temperature will be: {{ temperature }} 
            <!-- and the chance of {{ precip_type }} is {{ precip_chance }}! -->
          </div>
        </div>
      </div>
    </card>
  </div>
</div>
</template>
<script>

import axios from "axios";

export default {
name: 'HelloWorld',
props: {
  msg: String
},
data() {
  return {
    temperature: 0,
    precip_type: 'rain',
    precip_chance: 80
  };
},
async mounted() {
  await axios({ method: "GET", "url": "/gps-management" })
      .then(result => {
        this.temperature = result.data;
        console.log(result.data);
      }, error => {
        console.error(error);
      });

  // await axios({ method: "GET", "url": `http://localhost/precipitation?temp=${this.temperature}` })
  //     .then(result => {
  //       this.precip_chance = result.data['precip_chance'];
  //       this.precip_type = result.data['type'];
  //     }, error => {
  //       console.error(error);
  //     });
}
}
</script>

 
<style></style>
