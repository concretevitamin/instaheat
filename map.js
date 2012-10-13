var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);
var shenZhen = new google.maps.LatLng(22.562025, 114.029846);
var map, heatmap, pointArray;

// Returns google maps points from a list of raw points.
function getCoord(points) {
    var mapPts = [];
    for (var i = 0; i < points.length; ++i) {
        mapPts.push(new google.maps.LatLng(points[i].lon, points[i].lat));
    }
    return mapPts;
}

// Fetches raw data containing points info.
function fetchRawPts() {
    // TODO
}

// Initializes and renders the heat map.
function initialize() {

    // the options of the heat map
    var mapOptions = {
        zoom: 10,
        center: shenZhen,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var pointsData = getCoord([{lon: 22.489065, lat: 113.912812}, {lon: 22.485591, lat: 113.917026}]); // my home ;)
    //var pointsData = getCoord(fetchRawPts());

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    pointArray = new google.maps.MVCArray(pointsData);
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });

    heatmap.setMap(map);
}
