<template>
  <div class="ol-pop" id="ol-pop">
    <div class="pop-container">
      <h1 class="title">
        <span>{{attr.title}}</span>
        <span class="cha" @click="closePop"></span>
      </h1>
      <ul>
        <li v-for="(value,key) in attr" :key="key">
          <span>{{key}}</span>
          <span>{{value}}</span>
        </li>
      </ul>
      <div v-if="showMore" class="detail" @click="more">查看详情</div>
      <div class="pop-trangle"></div>
    </div>
  </div>
</template>

<script>
import Overlay from "ol/Overlay";
export default {
  name: "popup",
  props: {
    map: Object,
    coordinate: Array,
    attr: Object,
    showMore: Boolean
  },
  data() {
    return {
      overlay: null
    };
  },
  mounted() {
    console.log("mounted");
    if (this.overlay) {
      this.overlay.setPosition(undefined);
    }
    let ele = document.getElementById("ol-pop");
    this.overlay = new Overlay({
      positioning: "bottom-center",
      element: ele,
      autoPan: true
    });
    this.map.addOverlay(this.overlay);
    this.overlay.setPosition(this.coordinate);
  },
  computed: {},
  methods: {
    closePop() {
      this.overlay.setPosition(undefined);
    },
    more() {
      this.$emit("popMore");
    }
  },
  watch: {
    coordinate: {
      handler(newV) {
        this.overlay.setPosition(newV);
      }
    }
  }
};
</script>

<style scoped>
.ol-pop {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
  font-size: 12px;
  padding: 6px 10px;
  min-width: 250px;
  margin-bottom: 15px;
}
.pop-container::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-12px);

}
.ol-pop h1 {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  line-height: 18px;
  padding: 4px;
}
.ol-pop h1 > span:last-child {
  font-weight: normal;
  color: #4191e3;
  margin-left: 6px;
  
}
.cha{
	width: 18px;
	height: 18px;
	position: relative; 
}
.cha::before,
.cha::after{
  content: "";
  position: absolute;  /*方便进行定位*/
  height: 18px;
  width: 1.5px;
  top: 2px;
  right: 9px;  /*设置top和right使图像在20*20框中居中*/
 background: #4191e3;
}
.cha::before{
  transform: rotate(45deg);  /*进行旋转*/
}
.cha::after{
  transform: rotate(-45deg);
}
.ol-pop h1 > span:last-child:hover {
  opacity: 0.7;
  cursor: pointer;
}
ul,
li,
h1 {
  padding: 0;
  margin: 0;
  list-style: none;
}
.ol-pop ul {
  padding: 10px 0;
}
.ol-pop li {
  display: flex;
  justify-content: space-between;
  padding: 0 18px 0 14px;
  line-height: 24px;
}
.ol-pop li span:first-child {
  color: #666;
}
.ol-pop li span:last-child {
  color: #333;
  font-weight: bold;
}
.detail {
  height: 32px;
  line-height: 32px;
  text-align: center;
  background-color: #4191e3;
  border-radius: 3px;
  margin: 8px;
  color: #fff;
  cursor: pointer;
}
.detail:hover {
  opacity: 0.8;
}
</style>
