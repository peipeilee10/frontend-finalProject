<template>
  <div style="margin-top: 100px" class="px-15" id="carouselChange">
    <h1 class="h1 text-center mb-10">前台輪播圖置換</h1>
    <v-row>
      <v-col cols="12" lg="4">
        <!-- 新增彈跳視窗 -->
        <div class="add">
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <!-- 按鈕 -->

              <template v-slot:activator="{ on, attrs }">
                <v-card>
                  <v-btn large text v-bind="attrs" v-on="on" class="addbtn">
                    新增
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card>
              </template>

              <!-- 彈跳視窗 -->
              <v-card>
                <v-card-title>
                  <span class="text-h5">新增輪播圖圖片</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <img-inputer
                          theme="dark"
                          v-model="carouselImage"
                          bottom-text="點選或拖拽圖片以修改"
                          hover-text="點選或拖拽圖片以修改"
                          placeholder="點選或拖拽選擇圖片"
                          :max-size="2048"
                          exceed-size-text="檔案大小不能超過"
                        ></img-inputer>
                        <small>圖片尺寸 1920px*900px</small>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    關閉
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="addCarousel()">
                    新增
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12" lg="4" v-for="image in carousel" :key="image._id">
        <!-- 卡片區 -->
        <div>
          <v-card>
            <v-img class="carouselimg" :src="image.carouselImage"></v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon @click="deleteCarousel(image._id)">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        carousel: [],
        carouselImage: '',
        dialog: false
      }
    },
    methods: {
      // 新增輪播圖
      async addCarousel() {
        // 建立formdata
        const fd = new FormData()
        fd.append('image', this.carouselImage)

        try {
          const { data } = await this.api.post('/pages', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.dialog = false
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '新增輪播圖圖片成功'
          })
          this.getimage()
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: '新增輪播圖圖片失敗'
          })
        }
      },
      // 刪除
      async deleteCarousel(id) {
        try {
          await this.api.delete('/pages/' + id, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '刪除圖片成功'
          })
          this.getimage()
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '刪除商品失敗'
          })
        }
      },
      // 拿到最新輪播圖
      async getimage() {
        try {
          const { data } = await this.api.get('/pages')
          console.log(data.result)
          this.carousel = data.result
        } catch (error) {
          console.log(error.response.data.message)
        }
      }
    },
    created() {
      this.getimage()
    }
  }
</script>
