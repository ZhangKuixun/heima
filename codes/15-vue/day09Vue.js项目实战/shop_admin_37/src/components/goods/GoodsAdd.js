/* eslint-disable */
export default {
  data () {
    return {
      // 步骤条
      activeIndex: 1,
      // 竖直标签页
      activeName: 'three',
      addGoodsForm: {
        goods_name: '',
        goods_cat: [],// 分类
        goods_price: '',
        goods_number: '',
        goods_weight: '',
        goods_introduce: '',
        goods_pics: [],// 图片
        radio: '1',// 是否促销
      },
      // 级联选择器
      options: [],
      // 级联选择器的配置对象
      defaultProps: {
        value: 'cat_id',
        label: 'cat_name'
      },
      // 上传图片
      dialogImageUrl: '',
      dialogVisible: false,
      headers: {
        Authorization: localStorage.getItem("token")
      },
      //富文本编辑器设置
      editorOption: {
        placeholder: '请输入您的密码给我'
      }
    };
  },
  created () {
    this.loadCatName();
  },
  methods: {
    // 点击标签页的标签
    handleTableClick (tab) {
      // tab.index 值是字符串类型，在字符串类型前面用'+tab.index'
      this.activeIndex = +tab.index + 1;
    },
    // 点击下一页
    handleNextClick (index, name) {
      this.activeIndex = index;
      this.activeName = name;
    },
    // 点击确定，添加商品
    async AddGoods () {
      // 1.获取数据
      const {
        goods_name,
        goods_cat,
        goods_price,
        goods_number,
        goods_weight,
        goods_introduce,
        goods_pics } = this.addGoodsForm
      // let res = await this.$axios.post('goods', {
      //   goods_name,
      //   goods_cat: goods_cat.join(','),
      //   goods_price,
      //   goods_number,
      //   goods_weight,
      //   goods_introduce,
      //   goods_pics
      // });
      this.$router.push('/goods')
    },
    // 加载分类数据
    async loadCatName () {
      // let res = await this.$axios.get('categories');
      this.options = [{
        cat_id: 'zhinan',
        cat_name: '指南',
        children: [{
          cat_id: 'shejiyuanze',
          cat_name: '设计原则',
          children: [{
            cat_id: 'yizhi',
            cat_name: '一致'
          }, {
            cat_id: 'kekong',
            cat_name: '可控'
          }]
        }, {
          cat_id: 'daohang',
          cat_name: '导航',
          children: [{
            cat_id: 'cexiangdaohang',
            cat_name: '侧向导航'
          }, {
            cat_id: 'dingbudaohang',
            cat_name: '顶部导航'
          }]
        }]
      }]
    },
    // 上传图片
    // 删除图片
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传图片
    uploadImgSuccess (res) {
      console.log(res.data.tmp_path);
      this.addGoodsForm.goods_pics.push({
        pic: res.data.tmp_path
      })
    },
    // 编辑器
    onEditorChange ({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
    },
  },
};
