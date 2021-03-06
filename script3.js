var container = document.getElementById("map_main"); //지도를 담을 영역의 DOM 레퍼런스

var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.550444, 127.073139), //지도의 중심좌표.
  level: 4, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var markerPosition = new kakao.maps.LatLng(37.550444, 127.073139);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

