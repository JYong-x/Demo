<template>
  <div class="wrapper">
    <div id="container" ref="wrap"></div>
    <div class="location-wrap"></div>
  </div>
</template>

<script>
import AMap from 'AMap'

export default {
  name: 'HelloAMap',
  data () {
    return {
      map: {}
    }
  },
  methods: {
    createMap () {
      let _this = this
      _this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 15
      })
      AMap.plugin('AMap.Geolocation', function () {
        // 异步加载插件
        _this.map.geolocation = new AMap.Geolocation({
          // 定位插件
          enableHighAccuracy: true,
          timeout: 10000,
          buttonPosition: 'RB',
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true,
          showMarker: true
        })
        _this.map.geolocation.getCurrentPosition(function (status, result) {
          if (status === 'complete') {
            console.log(result)
            // addMarker(result.position)
          } else {
            // onError(result)
            console.log('定位失败')
          }
        })
      })
      _this.map.addControl(_this.map.geolocation)
      _this.map.addMarker = function (position) {
        // 创建marker
        let marker = new AMap.Marker({
          position: position
        })
        _this.map.add(marker)
        _this.map.showLocation(position)
      }
      _this.map.showLocation = function (pos) {
        // 显示经纬度
        console.log(pos)
        let locationWrap = document.querySelector('.location-wrap')
        locationWrap.innerHTML = `<p>纬度：${pos.lat}</p><p>经度：${pos.lng}</p>`
      }
      _this.map.mapClick = function (e) {
        // map.remove('marker')
        _this.map.clearMap() // 清除地图上的所有覆盖层
        _this.map.addMarker(e.lnglat)
        console.log(_this.map.getAllOverlays('marker')) // 获取所有marker覆盖层
      }
      AMap.event.addListener(_this.map, 'click', _this.map.mapClick)
    }
  },
  mounted () {
    this.createMap()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  position: relative;
  width: 800px;
  height: 600px;
  margin: 50px auto;
}
#container {
  width: 100%;
  height: 100%;
}
.location-wrap {
  position: absolute;
  /* display: none; */
  width: 150px;
  height: 80px;
  top: 0;
  right: 0;
  padding: 0 10px 0;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  z-index: 20;
}
</style>
