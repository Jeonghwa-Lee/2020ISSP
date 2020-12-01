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
  new kakao.maps.LatLng(37.54761378116078, 127.07065604245271),
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

var content01 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <h1>Persian Gulf Pizza</h1>' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="imginfo"> </div>' +  
            '            <div class="datainfo"> </div>' +  
            '        </div>' + 
            '    </div>' +    
            '</div>';


var markerPositions = foodPositions[0];
var markerData = foodMarkers[0]

var overlay = new kakao.maps.CustomOverlay({
    content: content01,
    position: foodPositions[0]
});

kakao.maps.event.addListener(foodMarkers[0], 'click', function() {
    overlay.setMap(map);
});

function closeOverlay() {
    overlay.setMap(null);     
}
