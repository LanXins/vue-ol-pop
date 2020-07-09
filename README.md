# vue-ol-pop

> openlayers 使用的简洁信息弹窗 主要用于展示 feature 的  key value 形式属性信息

## 使用方法

``` bash
# install dependencies
npm install vue-ol-pop -S


# main.js
import popup from 'vue-ol-pop'
Vue.use(popup)


# component.vue 在项目中引用
<template>
  <div id="app">
    <div id="map"></div>
    <popup 
      :showMore="true" 
      :map="map" 
      :coordinate="coordinate" 
      :attr="attr" 
      @closePop="closePop" 
      @popMore="popMore">
    </popup>
  </div>
</template>
```

## 组件参数

``` bash
showMore   非必须   控制 more 按钮显示  Boolean
map        必须     ol 的 map 实例     Object
coordinate 必须     弹窗显示坐标        Array
attr       必须     featrue 属性信息   Object
```

## 组件方法

``` bash
closePop 弹窗关闭的回调
popMore  弹窗更多按钮点击的回调
```