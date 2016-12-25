
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	$("#end").val("盐城师范学院通榆校区");
	map.centerAndZoom(new BMap.Point(120.160,33.390), 15);
	//三种驾车策略：最少时间，最短距离，避开高速
	var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
	$("#result").click(function(){		
		var start = $("#start").val();
		var end = $("#end").val();
		map.clearOverlays(); 
		var i=$("#driving_way select").val();
		search(start,end,routePolicy[i]); 
		function search(start,end,route){ 
			var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
			driving.search(start,end);
		}
	});
	
	 function initMap(){
      setMapEvent();
      addMapControl();
      addMapOverlay();
   }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
    }
    
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
      initMap();
	
