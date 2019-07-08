let option = {
  resizeEnable: true,
  zoom: 15, //级别
  // center: [116.397428, 39.90923],//中心点坐标
  // viewMode:'3D'//使用3D视图
}
let url = 'https://webapi.amap.com/maps?v=1.4.15&key=e120edfbc1b1a93916d1c84fcaa12c44&callback=createMap';
let jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
createMap = function () {
  let map = new AMap.Map('container', option);
  // var trafficLayer = new AMap.TileLayer.Traffic({ 
  //   zIndex: 10
  // });
  // map.add(trafficLayer)
  // var isVisible = true;
  // let oBtn = document.getElementsByTagName('button')[0]
  // oBtn.addEventListener('click', toggle)

  // function toggle() { // 实时交通显示开关
  //   if (isVisible) {
  //     trafficLayer.hide();
  //     isVisible = false;
  //   } else {
  //     trafficLayer.show();
  //     isVisible = true;
  //   }
  // }
  AMap.plugin('AMap.Geolocation', function () { //异步加载插件
    let geolocation = new AMap.Geolocation({ // 定位插件
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 10000, //超过10秒后停止定位，默认：5s
      buttonPosition: 'RB', //定位按钮的停靠位置
      buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
      showMarker: true
    })
    map.addControl(geolocation);
    geolocation.getCurrentPosition(function (status, result) {
      if (status == 'complete') {
        console.log(result)
        // addMarker(result.position)
      } else {
        // onError(result)
      }
    });
  })
  let addMarker = function (position) { // 创建marker
    let marker = new AMap.Marker({
      position: position
    })
    map.add(marker)
    showLocation(position)
  }
  let showLocation = function (pos) { // 显示经纬度
    console.log(pos)
    let locationWrap = document.querySelector('.location-wrap')
    locationWrap.innerHTML = `<p>纬度：${pos.lat}</p><p>经度：${pos.lng}</p>`
  }
  let mapClick = function (e) {
    // map.remove('marker')
    map.clearMap() // 清除地图上的所有覆盖层
    addMarker(e.lnglat)
    console.log(map.getAllOverlays('marker')) // 获取所有marker覆盖层
  }
  AMap.event.addListener(map, 'click', mapClick)
}