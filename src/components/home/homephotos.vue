<template>
  <div id="homephotos">
    <div class="container">
      <v-row>
        <v-col>
          <img src="../../assets/image/photoleft.jpg" />
        </v-col>
        <v-col>
          <v-row class="d-flex flex-column middle">
            <v-col>
              <img src="../../assets/image/photomiddle.jpg" alt="" />
            </v-col>
            <v-col>
              <img src="../../assets/image/photomiddledown.jpg" alt="" />
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <img src="../../assets/image/photoright.jpg" />
        </v-col>
      </v-row>
    </div>
    <v-btn to="/appointment" class="appointmentbtn">立即預約</v-btn>
  </div>
</template>
