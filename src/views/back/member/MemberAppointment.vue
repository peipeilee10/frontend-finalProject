<template>
  <div id="adminAppointment" class="container">
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>

        <!-- 月曆 -->
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <!-- 細項 -->
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <!-- {{ selectedEvent.appointment }} -->
                <p>預約人姓名：{{ selectedEvent.appointment.name }}</p>
                <p>預約人電話：{{ selectedEvent.appointment.phone }}</p>
                <p>預約人信箱：{{ selectedEvent.appointment.email }}</p>
                <p>預約人電話：{{ selectedEvent.appointment.pettype }}</p>
                <p>毛孩姓名：{{ selectedEvent.appointment.petname }}</p>
                <p>毛孩品種：{{ selectedEvent.appointment.petbreed }}</p>
                <p>服務項目：{{ selectedEvent.appointment.serviceitem }}</p>
                <p>備註：{{ selectedEvent.appointment.memo }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text @click="selectedOpen = false">close</v-btn>
                <v-btn text @click="cancleappointment(selectedEvent._id)">
                  取消預約
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days'
      },
      selectedEvent: {
        appointment: {
          memo: '',
          name: '',
          email: '',
          phone: '',
          pettype: '',
          petname: '',
          petbreed: '',
          serviceitem: '',
          appointmentdate: '',
          appointmenttime: ''
        }
      },
      selectedElement: null,
      selectedOpen: false,
      events: [],
      eventsAll: [],
      colors: ['blue', 'indigo', 'cyan', 'green', 'orange']
    }),
    mounted() {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor(event) {
        return event.color
      },
      setToday() {
        this.focus = ''
      },
      prev() {
        this.$refs.calendar.prev()
      },
      next() {
        this.$refs.calendar.next()
      },
      showEvent({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          this.selectedOpen = true
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange({ start, end }) {
        const min = new Date(`${start.date}T00:00:00`).getTime()
        const max = new Date(`${end.date}T23:59:59`).getTime()
        this.events = this.eventsAll.filter(appointment => {
          return appointment.start <= max && appointment.start >= min
        })
      },
      rnd(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      async cancleappointment(id) {
        console.log(id)
        try {
          await this.api.delete('/appointments/deleteappointment/' + id, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          // 重新呼叫最新的預約
          this.getappointment()
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '刪除預約成功'
          })
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '刪除預約失敗'
          })
        }
      },
      async getappointment() {
        try {
          const { data } = await this.api.get('/appointments/myappointment', {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.eventsAll = data.result.map(appointment => {
            appointment.start = new Date(
              appointment.appointment.appointmentdate +
                ' ' +
                appointment.appointment.appointmenttime
            )
            appointment.name =
              appointment.appointment.name +
              appointment.appointment.appointmenttime
            appointment.end = new Date(
              appointment.appointment.appointmentdate +
                ' ' +
                appointment.appointment.appointmenttime
            )
            appointment.color = this.colors[this.rnd(0, this.colors.length - 1)]
            appointment.timed = true
            return appointment
          })
          this.events = this.eventsAll
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: '取得預約訂單失敗'
          })
        }
      }
    },
    async created() {
      this.getappointment()
    }
  }
</script>
