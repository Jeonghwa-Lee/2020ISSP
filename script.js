var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

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

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            세종대학교 광개토관' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="images/logo.png" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">내용을 이곳에 입력하세요</div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

            // 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var overlay = new kakao.maps.CustomOverlay({
  content: content,
  map: map,
  position: marker.getPosition()       
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, 'click', function() {
  overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
function closeOverlay() {
  overlay.setMap(null);     
}