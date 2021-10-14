// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
	// just one example marker group
	{
		// id of the marker group, without spaces/other special chars
		"id" : "homes",
		// name of the marker group, displayed in the webinterface
		"name" : "Homes",
		// icon of the markers belonging to that group (optional)
		"icon" : "home.png",
		// size of that icon
		"iconSize" : [32, 32],
		// whether this marker group is shown by default (optional)
		"showDefault" : false,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"world" : [
				// example marker, pretty format:
				// {
					// // position ([x, z, y])
					// "pos" : [35, -21, 64],
					// // title when you hover over the marker
					// "title" : "Sign1",
					// // text in the marker popup window
					// "text" : "Hello.",
					// // override the icon of a single marker (optional)
					// // "icon" : "player.png",
					// // override the size of the marker icon (optional)
					// "iconSize" : [32, 32]
				// },
				// more markers:
				{"pos" : [-244, 22, 65], "title" : "Thomas"},
				{"pos" : [-334, -194, 64], "title" : "Logan"},
				{"pos" : [-968, 511, 69], "title" : "John"},
				{"pos" : [-1285, -1284, 156], "title" : "Kit"},
				// {"pos" : [-174, 143, 64], "title" : "????"},
				{"pos" : [3000, -75, 70], "title" : "Nick"},
				{"pos" : [2434, 1156, 190], "title" : "Griffith"},
				{"pos" : [2160, 1841, 84], "title" : "Cain"},
				{"pos" : [-195, -512, 70], "title" : "Sterling"},
				{"pos" : [-387, 166, 65], "title" : "Sand"},
			],
		},
	},
	{
  	"id" : "spawn",
  	"name" : "Spawn",
  	"icon" : "spawn.png",
  	"iconSize" : [32, 32],
  	"showDefault" : true,
  	"markers" : {
  		"world" : [
  			{"pos" : [-193, -83, 64], "title" : "World Spawn"},
  		],
  	},
  },
	{
  	"id" : "farms",
  	"name" : "Farms",
  	"icon" : "farm.png",
  	"iconSize" : [32, 32],
  	"showDefault" : false,
  	"markers" : {
  		"world" : [
  			{"pos" : [-1709, 201, 182], "title" : "Gunpowder Farm"},
				{"pos" : [-2886, -360, 70], "title" : "Pillager Base"},
  			{"pos" : [-101, -194, 64], "title" : "Tree/Misc Farm"},
  			{"pos" : [2248, 1815, 64], "title" : "Villager Hall and Melon/Pumpkin Farm"},
  			{"pos" : [2971, -61, 67], "title" : "Wheat/Carrot/Potato Farm"},
  			{"pos" : [-275, -309, 64], "title" : "Sugar Cane Farm"},
  		],
  	},
  },
	/*
	// you can also add more complicated markers using the Leaflet API
	// just specify a function which creates the Leaflet API marker objects
	{
		"id" : "test",
		"name" : "Test",
		"createMarker" : function(ui, groupInfo, markerInfo) {
			var latlngs = [];
			// use the ui.mcToLatLng-function to convert Minecraft coords to LatLngs
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p2[0], markerInfo.p2[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p3[0], markerInfo.p3[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p4[0], markerInfo.p4[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], 64));
			
			return L.polyline(latlngs, {"color" : markerInfo.color});
		},
		"markers" : {
			"world" : [
				{
					"p1" : [42, 0],
					"p2" : [0, 0],
					"p3" : [0, 42],
					"p4" : [42, 42],
					"color" : "red",
				},
				{
					"p1" : [73, -42],
					"p2" : [-42, -42],
					"p3" : [-42, 73],
					"p4" : [73, 73],
					"color" : "yellow",
				},
			],
		},
	},
	*/
];
