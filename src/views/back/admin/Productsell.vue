<template>
  <div id="productsell" class="mt-10">
    <div class="container">
      <v-data-table :headers="headers" :items="products" :disable-sort="abc">
        <template v-slot:item.image="{ item }">
          <!-- {{ item }} -->
          <img v-if="item.image" :src="item.image" style="height: 100px" />
        </template>
        <template v-slot:item.price="{ item }" style="width: 50%">
          $&nbsp;{{ new Intl.NumberFormat('en-IN').format(item.price) }}
        </template>
        <template v-slot:item.sell="{ item }">
          {{ item.sell ? 'v' : '' }}
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn
            color="warning white--text"
            class="mr-5"
            @click="editProduct(item._id)"
          >
            <v-icon>mdi-lead-pencil</v-icon>
          </v-btn>
          <v-btn color="red white--text" @click="deleteProduct(item._id)">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <!-- 彈出視窗 -->
      <v-row justify="end" class="mt-10">
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="cyan darken-1" dark v-bind="attrs" v-on="on">
              新增
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5 text-center" v-if="form._id">編輯商品</span>
              <span class="text-h5 text-center" v-else>新增商品</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.name"
                      label="商品名稱"
                      required
                      :rules="rules.nameRules"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="form.price"
                      type="number"
                      label="商品價格"
                      required
                      :rules="rules.priceRules"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      v-model="form.description"
                      filled
                      name="input-7-4"
                      label="商品說明"
                      :rules="rules.descriptionRules"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-label>商品分類</v-label>
                    <v-select
                      :items="categories"
                      label="分類"
                      v-model="form.category"
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <v-label>商品狀態</v-label>
                    <v-radio-group v-model="form.sell">
                      <v-radio label="上架" value="true">上架</v-radio>
                      <v-radio label="下架" value="false">下架</v-radio>
                    </v-radio-group>
                  </v-col>

                  <img-inputer
                    v-model="form.image"
                    theme="dark"
                    bottom-text="點選或拖拽圖片以修改"
                    hover-text="點選或拖拽圖片以修改"
                    placeholder="點選或拖拽選擇圖片"
                    :max-size="1024"
                    exceed-size-text="檔案大小不能超過"
                  ></img-inputer>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                type="cancel"
                @click="dialog = false"
              >
                關閉
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="submitModal"
                :disabled="isSaving"
              >
                保存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          { text: '圖片', value: 'image' },
          { text: '商品名', value: 'name' },
          { text: '價格', value: 'price' },
          { text: '產品介紹', value: 'description' },
          { text: '上架', value: 'sell' },
          { text: '分類', value: 'category' },
          { text: '操作', value: 'action' }
        ],
        categories: [
          { text: '請選擇分類', value: '' },
          '毛孩飼料',
          '沐浴用品',
          '毛孩玩具',
          '其他用品'
        ],
        products: [],
        form: {
          name: '',
          price: null,
          description: '',
          image: null,
          sell: false,
          _id: '',
          index: -1,
          category: ''
        },
        modalSubmitting: false,
        dialog: false,
        isSaving: false,
        abc: false
      }
    },
    computed: {
      rules() {
        return {
          nameRules: [
            v => !!v || '商品名為必填欄位',
            v => (v && v.length > 0) || '商品名為必填欄位'
          ],
          priceRules: [
            v => !!v || '價格為必填欄位',
            v => (v && v >= 0) || '價格不得低於零元'
          ],
          descriptionRules: [
            v => !!v || '商品介紹為必填欄位',
            v => (v && v.length > 0) || '商品介紹為必填欄位'
          ]
        }
      }
    },
    methods: {
      async submitModal(event) {
        this.isSaving = true
        event.preventDefault()
        if (
          !this.rules.nameRules ||
          !this.rules.priceRules ||
          !this.rules.descriptionRules
        ) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '缺少必填欄位'
          })
          return
        }
        // 建立formdata
        const fd = new FormData()
        for (const key in this.form) {
          if (key !== '_id') {
            fd.append(key, this.form[key])
          }
        }
        console.log(this.form)

        try {
          // id=0 =>增加品項
          if (!this.form._id) {
            console.log('增加商品')
            console.log()
            await this.api.post('/products', fd, {
              headers: {
                authorization: 'Bearer ' + this.user.token
              }
            })
            // this.products.push(data.result)
            // console.log(this.products)
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '新增商品成功'
            })
          } else {
            // 修改商品內容
            console.log('修改商品內容')
            const { data } = await this.api.patch(
              '/products/' + this.form._id,
              fd,
              {
                headers: {
                  authorization: 'Bearer ' + this.user.token
                }
              }
            )
            this.products[this.form.index] = {
              ...this.form,
              image: data.result.image
            }
          }

          this.isSaving = false
          this.dialog = false
          this.getProduct()
        } catch (error) {
          console.log(error)
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        }
      },
      editProduct(id) {
        const index = this.products.findIndex(product => product._id === id)
        this.form = {
          // ...this.products[index], index
          name: this.products[index].name,
          price: this.products[index].price,
          description: this.products[index].description,
          image: this.products[index].image,
          _id: this.products[index]._id,
          index: -1
        }
        this.dialog = true
      },
      async deleteProduct(id) {
        try {
          await this.api.delete('/products/' + id, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '刪除商品成功'
          })

          this.getProduct()
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '刪除商品失敗'
          })
        }
      },
      async getProduct() {
        try {
          const { data } = await this.api.get('/products/all', {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products = data.result
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '取得商品失敗'
          })
        }
      }
    },
    async created() {
      this.getProduct()
    }
  }
</script>
