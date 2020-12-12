var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.5503885061628, 127.07505152208913), //지도의 중심좌표.
  level: 4, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var foodPositions = [ 
  new kakao.maps.LatLng(37.54463551330266, 127.06992353415967),
  new kakao.maps.LatLng(37.543356624980845, 127.07077751087385),
  new kakao.maps.LatLng(37.54780850986535, 127.07230948018997),
  new kakao.maps.LatLng(37.54873267588706, 127.07246801087629),
  new kakao.maps.LatLng(37.54761378116078, 127.07065604245271),
  new kakao.maps.LatLng(37.54846566087297, 127.07269415409134),
  new kakao.maps.LatLng(37.548272842681136, 127.07155817128879)                
];

var cafePositions = [ 
  new kakao.maps.LatLng(37.554650165370596, 127.07466129553626),
  new kakao.maps.LatLng(37.55569020287363, 127.07857471882198),
  new kakao.maps.LatLng(37.54857708563519, 127.07264715565397),
  new kakao.maps.LatLng(37.54760833038878, 127.07210407535834),
  new kakao.maps.LatLng(37.5495472837528, 127.0731699964192),
  new kakao.maps.LatLng(37.54967643851612, 127.07509939827213)                
];

var etcPositions  = [ 
  new kakao.maps.LatLng(37.54966617130496, 127.07373839793893),
  new kakao.maps.LatLng(37.54861266913386, 127.08077094796582)         
];

var cafeMarkers = [],
    foodMarkers = [], 
    etcMarkers = []; 

    
createCafeMarkers(); 
createFoodMarkers(); 
createEtcMarkers(); 

changeMarker('all'); 

function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
}

function createMarker(position, image) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    
    return marker;  
}   
  
function createCafeMarkers() {
    
    for (var i = 0; i < cafePositions.length; i++) { 

        var imageSrc = 'images/icon_c_2.png',   
            imageSize = new kakao.maps.Size(40, 40), 
            imageOption = {offset: new kakao.maps.Point(20, 40)}; 
      
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
      
        var markerImage = createMarkerImage(imageSrc, imageSize, imageOption),    
            marker = createMarker(cafePositions[i], markerImage);  
        
        cafeMarkers.push(marker);
    }     
}

function setCafeMarkers(map) {        
    for (var i = 0; i < cafeMarkers.length; i++) {  
        cafeMarkers[i].setMap(map);
    }        
}

function createFoodMarkers() {
    
  for (var i = 0; i < foodPositions.length; i++) { 

      var imageSrc = 'images/icon_f_2.png',    
          imageSize = new kakao.maps.Size(40, 40), 
          imageOption = {offset: new kakao.maps.Point(20, 40)}; 
    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    
      var markerImage = createMarkerImage(imageSrc, imageSize, imageOption),    
          marker = createMarker(foodPositions[i], markerImage);  
      
      foodMarkers.push(marker);
  }     
}

function setFoodMarkers(map) {        
  for (var i = 0; i < foodMarkers.length; i++) {  
    foodMarkers[i].setMap(map);
  }        
}

function createEtcMarkers() {
    
  for (var i = 0; i < etcPositions.length; i++) { 

      var imageSrc = 'images/icon_e_2.png',   
          imageSize = new kakao.maps.Size(40, 40), 
          imageOption = {offset: new kakao.maps.Point(20, 40)}; 
    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    
      var markerImage = createMarkerImage(imageSrc, imageSize, imageOption),    
          marker = createMarker(etcPositions[i], markerImage);  
      
      etcMarkers.push(marker);
  }     
}

function setEtcMarkers(map) {        
  for (var i = 0; i < etcMarkers.length; i++) {  
    etcMarkers[i].setMap(map);
  }        
}


function changeMarker(type){
    
    var allMenu = document.getElementById('allMenu');
    var foodMenu = document.getElementById('foodMenu');
    var cafeMenu = document.getElementById('cafeMenu');
    var etcMenu = document.getElementById('etcMenu');
    
    if (type === 'food') {
    
        allMenu.className = '';
        foodMenu.className = 'menu_selected';
        cafeMenu.className = '';
        etcMenu.className = '';

        all_on.className = 'off';
        all_off.className = 'on';
        food_on.className = 'on';
        food_off.className = 'off';
        cafe_on.className = 'off';
        cafe_off.className = 'on';
        etc_on.className = 'off';
        etc_off.className = 'on';
        
        setFoodMarkers(map);
        setCafeMarkers(null);
        setEtcMarkers(null);
        
    } else if (type === 'cafe') { // cafe 카테고리가 클릭됐을 때
    
        allMenu.className = '';
        foodMenu.className = '';
        cafeMenu.className = 'menu_selected';
        etcMenu.className = '';
        
        all_on.className = 'off';
        all_off.className = 'on';
        food_on.className = 'off';
        food_off.className = 'on';
        cafe_on.className = 'on';
        cafe_off.className = 'off';
        etc_on.className = 'off';
        etc_off.className = 'on';

        setFoodMarkers(null);
        setCafeMarkers(map);
        setEtcMarkers(null);
        
    } 
    else if (type === 'etc') { // etc 카테고리가 클릭됐을 때
     
        allMenu.className = '';
        foodMenu.className = '';
        cafeMenu.className = '';
        etcMenu.className = 'menu_selected';

        all_on.className = 'off';
        all_off.className = 'on';
        food_on.className = 'off';
        food_off.className = 'on';
        cafe_on.className = 'off';
        cafe_off.className = 'on';
        etc_on.className = 'on';
        etc_off.className = 'off';
        
        setFoodMarkers(null);
        setCafeMarkers(null);
        setEtcMarkers(map);

    } else if (type === 'all') { 
     
      allMenu.className = 'menu_selected';
      foodMenu.className = '';
      cafeMenu.className = '';
      etcMenu.className = '';
      
      all_on.className = 'on';
      all_off.className = 'off';
      food_on.className = 'off';
      food_off.className = 'on';
      cafe_on.className = 'off';
      cafe_off.className = 'on';
      etc_on.className = 'off';
      etc_off.className = 'on';

      setFoodMarkers(map);
      setCafeMarkers(map);
      setEtcMarkers(map);
      
  }  
} 

var content00 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Persian Gulf Pizza</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo00"> </div>' +  
            '            <div class="datainfo00"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay00 = new kakao.maps.CustomOverlay({
    content: content00,
    position: foodPositions[0]
});

kakao.maps.event.addListener(foodMarkers[0], 'click', function() {
    overlay00.setMap(map);
});

var content01 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Alley to Alley</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo01"> </div>' +  
            '            <div class="datainfo01"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay01 = new kakao.maps.CustomOverlay({
    content: content01,
    position: foodPositions[1]
});

kakao.maps.event.addListener(foodMarkers[1], 'click', function() {
    overlay01.setMap(map);
});

var content02 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Udon-Yunga</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo02"> </div>' +  
            '            <div class="datainfo02"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay02 = new kakao.maps.CustomOverlay({
    content: content02,
    position: foodPositions[2]
});

kakao.maps.event.addListener(foodMarkers[2], 'click', function() {
    overlay02.setMap(map);
});

var content03 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Eunhye instant tteokbokki</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo03"> </div>' +  
            '            <div class="datainfo03"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay03 = new kakao.maps.CustomOverlay({
    content: content03,
    position: foodPositions[3]
});

kakao.maps.event.addListener(foodMarkers[3], 'click', function() {
    overlay03.setMap(map);
});

var content04 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Lee - Hang -Ah</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo04"> </div>' +  
            '            <div class="datainfo04"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay04 = new kakao.maps.CustomOverlay({
    content: content04,
    position: foodPositions[4]
});

kakao.maps.event.addListener(foodMarkers[4], 'click', function() {
    overlay04.setMap(map);
});

var content05 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Sushi -Boom</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo05"> </div>' +  
            '            <div class="datainfo05"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay05 = new kakao.maps.CustomOverlay({
    content: content05,
    position: foodPositions[5]
});

kakao.maps.event.addListener(foodMarkers[5], 'click', function() {
    overlay05.setMap(map);
});

var content06 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Bao - I -pu</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo06"> </div>' +  
            '            <div class="datainfo06"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay06 = new kakao.maps.CustomOverlay({
    content: content06,
    position: foodPositions[6]
});

kakao.maps.event.addListener(foodMarkers[6], 'click', function() {
    overlay06.setMap(map);
});

var content07 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Gi-li-ne</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo07"> </div>' +  
            '            <div class="datainfo07"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay07 = new kakao.maps.CustomOverlay({
    content: content07,
    position: cafePositions[0]
});

kakao.maps.event.addListener(cafeMarkers[0], 'click', function() {
    overlay07.setMap(map);
});

var content08 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Cherry coffee</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo08"> </div>' +  
            '            <div class="datainfo08"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay08 = new kakao.maps.CustomOverlay({
    content: content08,
    position: cafePositions[1]
});

kakao.maps.event.addListener(cafeMarkers[1], 'click', function() {
    overlay08.setMap(map);
});

var content09 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Rom-gok</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo09"> </div>' +  
            '            <div class="datainfo09"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay09 = new kakao.maps.CustomOverlay({
    content: content09,
    position: cafePositions[2]
});

kakao.maps.event.addListener(cafeMarkers[2], 'click', function() {
    overlay09.setMap(map);
});

var content10 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Sulbing</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo10"> </div>' +  
            '            <div class="datainfo10"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay10 = new kakao.maps.CustomOverlay({
    content: content10,
    position: cafePositions[3]
});

kakao.maps.event.addListener(cafeMarkers[3], 'click', function() {
    overlay10.setMap(map);
});

var content11 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Jeju Mol-bbang</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo11"> </div>' +  
            '            <div class="datainfo12"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay11 = new kakao.maps.CustomOverlay({
    content: content11,
    position: cafePositions[5]
});

kakao.maps.event.addListener(cafeMarkers[5], 'click', function() {
    overlay11.setMap(map);
});

var content12 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Coffenamu</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo12"> </div>' +  
            '            <div class="datainfo11"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay12 = new kakao.maps.CustomOverlay({
    content: content12,
    position: cafePositions[4]
});

kakao.maps.event.addListener(cafeMarkers[4], 'click', function() {
    overlay12.setMap(map);
});

var content13 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Woori bank</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo13"> </div>' +  
            '            <div class="datainfo13"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay13 = new kakao.maps.CustomOverlay({
    content: content13,
    position: etcPositions[0]
});

kakao.maps.event.addListener(etcMarkers[0], 'click', function() {
    overlay13.setMap(map);
});

var content14 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Childrens G. Park</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo14"> </div>' +  
            '            <div class="datainfo14"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';

var overlay14 = new kakao.maps.CustomOverlay({
    content: content14,
    position: etcPositions[1]
});

kakao.maps.event.addListener(etcMarkers[1], 'click', function() {
    overlay14.setMap(map);
});

function closeOverlay() {
    overlay00.setMap(null);
    overlay01.setMap(null);     
    overlay02.setMap(null);
    overlay03.setMap(null);
    overlay04.setMap(null);
    overlay05.setMap(null);     
    overlay06.setMap(null);
    overlay07.setMap(null);
    overlay08.setMap(null);
    overlay09.setMap(null);     
    overlay10.setMap(null);
    overlay11.setMap(null);
    overlay12.setMap(null);
    overlay13.setMap(null);  
    overlay14.setMap(null);     
}
