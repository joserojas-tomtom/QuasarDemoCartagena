/* eslint-disable quote-props */
/* eslint-disable quotes */
export default function getDefaultStyle () {
  return mystyle
}

const mystyle = {
  "version": 8,
  "name": "cartagenastyle",
  "metadata": {},
  "sources": {
    "poiTiles": {
      "type": "vector",
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/map/1/tile/poi/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://b.api.tomtom.com/map/1/tile/poi/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://c.api.tomtom.com/map/1/tile/poi/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://d.api.tomtom.com/map/1/tile/poi/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG"
      ]
    },
    "vectorTiles": {
      "type": "vector",
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://b.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://c.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://d.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG"
      ]
    },
    "vectorTilesFlow": {
      "type": "vector",
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://b.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://c.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://d.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG"
      ]
    },
    "vectorTilesIncidents": {
      "type": "vector",
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://b.api.tomtom.com/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://c.api.tomtom.com/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
        "https://d.api.tomtom.com/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG"
      ]
    }
  },
  "sprite": "https://api.tomtom.com/style/1/sprite/20.4.5-10/sprite?map=basic_main&traffic_incidents=incidents_day&traffic_flow=flow_relative0&poi=poi_main&key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
  "glyphs": "https://api.tomtom.com/style/1/glyph/20.4.5-10/{fontstack}/{range}.pbf?key=jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "metadata": "group:area",
      "paint": { "background-color": "rgba(242, 242, 193, 1)" }
    },
    {
      "id": "National park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "National park",
      "minzoom": 4,
      "paint": { "fill-color": "rgba(234,226,183,1)" }
    },
    {
      "id": "Regional park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Regional park",
      "minzoom": 4,
      "paint": { "fill-color": "rgba(250,243,221,1)" }
    },
    {
      "id": "Park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Park",
      "paint": {
        "fill-color": {
          "stops": [[7, "rgba(195,216,216,0.5)"], [8, "rgba(193,193,71,1)"]]
        }
      }
    },
    {
      "id": "National or state park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "National or state park",
      "minzoom": 4,
      "paint": { "fill-color": "rgba(252,191,73,1)" }
    },
    {
      "id": "State or province park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "State or province park",
      "minzoom": 4,
      "paint": {
        "fill-color": {
          "stops": [[4, "rgba(84,201,197,0.5)"], [8, "rgba(136,193,100,1)"]]
        }
      }
    },
    {
      "id": "Forest",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Forest",
      "paint": {
        "fill-color": {
          "stops": [[7, "rgba(234,226,183,0.3)"], [10, "rgba(250,243,221,1)"]]
        }
      }
    },
    {
      "id": "Beach or dune",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Beach or dune",
      "paint": {
        "fill-color": {
          "stops": [
            [6, "rgba(195,216,216,0.51)"],
            [14, "rgba(242, 242, 193, 1)"]
          ]
        }
      }
    },
    {
      "id": "Woodland",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Woodland",
      "minzoom": 6,
      "paint": {
        "fill-color": {
          "stops": [
            [7, "rgba(252,191,73,0.3)"],
            [8, "rgba(84,201,197,1)"],
            [9, "rgba(136,193,100,1)"],
            [14, "rgba(234,226,183,1)"]
          ]
        }
      }
    },
    {
      "id": "Built-up area",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Built-up area",
      "minzoom": 6,
      "paint": { "fill-color": "rgba(238, 242, 230, 1)" }
    },
    {
      "id": "County park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "County park",
      "paint": { "fill-color": "rgba(250,243,221,1)" }
    },
    {
      "id": "Sand",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Sand",
      "paint": { "fill-color": "rgba(195,216,216,1)" }
    },
    {
      "id": "Moor or heathland",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Moor or heathland",
      "paint": {
        "fill-color": {
          "stops": [[10, "rgba(193,193,71,1)"], [12, "rgba(252,191,73,0.8)"]]
        }
      }
    },
    {
      "id": "Military",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Military",
      "paint": { "fill-color": "rgba(148, 159, 143, 1)" }
    },
    {
      "id": "Town railway ground",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town railway ground",
      "paint": { "fill-color": "rgba(136,193,100,1)" }
    },
    {
      "id": "City park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "City park",
      "paint": {
        "fill-color": {
          "stops": [[7, "rgba(234,226,183,0.5)"], [14, "rgba(250,243,221,1)"]]
        }
      }
    },
    {
      "id": "Cemetery",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Cemetery",
      "paint": {
        "fill-color": {
          "stops": [[13, "rgba(195,216,216,0.3)"], [18, "rgba(193,193,71,1)"]]
        }
      }
    },
    {
      "id": "Industrial area",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Industrial area",
      "paint": {
        "fill-color": {
          "stops": [[12, "rgba(252,191,73,1)"], [14, "rgba(84,201,197,1)"]]
        }
      }
    },
    {
      "id": "Industrial harbor area",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Industrial harbor area",
      "paint": {
        "fill-color": {
          "stops": [[12, "rgba(136,193,100,1)"], [14, "rgba(234,226,183,1)"]]
        }
      }
    },
    {
      "id": "Hospital",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Hospital",
      "paint": { "fill-color": "rgba(250,243,221,1)" }
    },
    {
      "id": "Town greens",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town greens",
      "paint": {
        "fill-color": {
          "stops": [[12, "rgba(195,216,216,0.5)"], [14, "rgba(193,193,71,1)"]]
        }
      }
    },
    {
      "id": "Golf",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Golf",
      "paint": {
        "fill-color": {
          "stops": [[12, "rgba(252,191,73,0.4)"], [16, "rgba(84,201,197,1)"]]
        }
      }
    },
    {
      "id": "Shopping",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Shopping",
      "paint": { "fill-color": "rgba(136,193,100,0.5)" }
    },
    {
      "id": "Airport",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Airport",
      "paint": { "fill-color": "rgba(234,226,183,1)" }
    },
    {
      "id": "Runway",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Runway",
      "paint": { "fill-color": "rgba(171, 170, 166, 1)" }
    },
    {
      "id": "Town paved area",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town paved area",
      "paint": { "fill-color": "rgba(195,216,216,1)" }
    },
    {
      "id": "Town garden path",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town garden path",
      "paint": {
        "fill-color": {
          "stops": [[14, "rgba(193,193,71,0.5)"], [16, "rgba(252,191,73,1)"]]
        }
      }
    },
    {
      "id": "Town school ground",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town school ground",
      "paint": { "fill-color": "rgba(84,201,197,1)" }
    },
    {
      "id": "University",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "University",
      "paint": { "fill-color": "rgba(230, 209, 166, 1)" }
    },
    {
      "id": "School",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "School",
      "paint": { "fill-color": "rgba(234,226,183,1)" }
    },
    {
      "id": "Pool",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Pool",
      "paint": { "fill-color": "rgba(250,243,221,1)" }
    },
    {
      "id": "Zoo",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Zoo",
      "paint": { "fill-color": "rgba(195,216,216,1)" }
    },
    {
      "id": "Stadium",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Stadium",
      "paint": { "fill-color": "rgba(193,193,71,1)" }
    },
    {
      "id": "Sports hall",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Sports hall",
      "paint": { "fill-color": "rgba(252,191,73,1)" }
    },
    {
      "id": "Amusement park",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Amusement park",
      "paint": { "fill-color": "rgba(84,201,197,1)" }
    },
    {
      "id": "Town grass",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town grass",
      "paint": { "fill-color": "rgba(136,193,100,1)" }
    },
    {
      "id": "Town swimming pool",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town swimming pool",
      "paint": { "fill-color": "rgba(234,226,183,1)" }
    },
    {
      "id": "Town walkway",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town walkway",
      "paint": { "fill-color": "rgba(250,243,221,1)" }
    },
    {
      "id": "Town factory ground",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town factory ground",
      "paint": { "fill-color": "rgba(195,216,216,1)" }
    },
    {
      "id": "Town water body",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town water body",
      "paint": { "fill-color": "rgba(193,193,71,1)" }
    },
    {
      "id": "Place of worship",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Place of worship",
      "paint": {
        "fill-color": "rgba(252,191,73,0.49)",
        "fill-outline-color": "rgb(232, 218, 201)"
      }
    },
    {
      "id": "Railway Station",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Railway Station",
      "minzoom": 16,
      "paint": {
        "fill-color": "rgba(84,201,197,1)",
        "fill-outline-color": "rgb(199, 216, 224)"
      }
    },
    {
      "id": "Parking area",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Parking area",
      "paint": { "fill-color": "rgba(136,193,100,1)" }
    },
    {
      "id": "Subway Station",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Subway Station",
      "minzoom": 16,
      "paint": {
        "fill-color": "rgba(234,226,183,1)",
        "fill-outline-color": "rgb(199, 216, 224)"
      }
    },
    {
      "id": "Town hospital ground",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town hospital ground",
      "paint": { "fill-color": "rgba(250,243,221,1)" }
    },
    {
      "id": "Town shore",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Town shore",
      "paint": { "fill-color": "rgba(195,216,216,1)" }
    },
    {
      "id": "Meridian",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Meridian",
      "paint": { "fill-color": "rgba(193,193,71,1)" }
    },
    {
      "id": "Sidewalk",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Sidewalk",
      "paint": { "fill-color": "rgba(252,191,73,1)" }
    },
    {
      "id": "Breakwater",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Breakwater",
      "paint": { "fill-color": "rgba(84,201,197,1)" }
    },
    {
      "id": "Other water",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Other water",
      "paint": {
        "fill-color": {
          "stops": [[0, "rgb(144, 208, 242)"], [6, "rgb(158, 223, 252)"]]
        },
        "fill-outline-color": {
          "stops": [
            [4, "rgba(144, 208, 242, 0.3)"],
            [6, "rgba(158, 223, 252, 1)"]
          ]
        }
      }
    },
    {
      "id": "Intermittent water",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Intermittent water",
      "paint": { "fill-color": "rgba(136,193,100,1)" }
    },
    {
      "id": "Lake",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Lake",
      "paint": {
        "fill-color": {
          "stops": [[0, "rgb(144, 208, 242)"], [6, "rgb(158, 223, 252)"]]
        }
      }
    },
    {
      "id": "Ocean or sea",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Ocean or sea",
      "paint": {
        "fill-color": {
          "stops": [[0, "rgb(144, 208, 242)"], [6, "rgb(158, 223, 252)"]]
        }
      }
    },
    {
      "id": "Ocean",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Ocean",
      "paint": {
        "fill-color": {
          "stops": [[0, "rgba(234,226,183,1)"], [6, "rgba(250,243,221,1)"]]
        },
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "Sea",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Sea",
      "paint": {
        "fill-color": {
          "stops": [[0, "rgba(195,216,216,1)"], [6, "rgba(193,193,71,1)"]]
        }
      }
    },
    {
      "id": "River",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "River",
      "paint": { "fill-color": "rgba(252,191,73,1)" }
    },
    {
      "id": "Government Administration Office",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Government Administration Office",
      "paint": {
        "fill-color": "rgba(84,201,197,0.49)",
        "fill-outline-color": "rgb(232, 218, 201)"
      }
    },
    {
      "id": "Other building",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Other building",
      "paint": {
        "fill-color": "rgba(136,193,100,0.5)",
        "fill-outline-color": "rgba(220, 220, 220, 0.49)"
      }
    },
    {
      "id": "School building",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "School building",
      "paint": {
        "fill-color": "rgba(234,226,183,1)",
        "fill-outline-color": "rgba(202, 202, 181, 0.51)"
      }
    },
    {
      "id": "Institution",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Institution",
      "paint": {
        "fill-color": "rgba(250,243,221,0.49)",
        "fill-outline-color": "rgb(232, 218, 201)"
      }
    },
    {
      "id": "Pedestrian Deck",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Pedestrian Deck",
      "paint": { "fill-color": "rgba(195,216,216,1)" }
    },
    {
      "id": "Other town block",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Other town block",
      "paint": { "fill-color": "rgba(193,193,71,1)" }
    },
    {
      "id": "Factory building",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Factory building",
      "paint": {
        "fill-color": "rgba(252,191,73,0.51)",
        "fill-outline-color": "rgba(195, 195, 195, 0.5)"
      }
    },
    {
      "id": "Hospital building",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Hospital building",
      "paint": {
        "fill-color": "rgba(84,201,197,1)",
        "fill-outline-color": "rgba(214, 198, 190, 0.5)"
      }
    },
    {
      "id": "Hotel building",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Hotel building",
      "paint": {
        "fill-color": "rgba(136,193,100,1)",
        "fill-outline-color": "rgb(218, 214, 180)"
      }
    },
    {
      "id": "Cultural Facility",
      "type": "fill",
      "metadata": "group:area",
      "source": "vectorTiles",
      "source-layer": "Cultural Facility",
      "paint": {
        "fill-color": "rgba(234,226,183,1)",
        "fill-outline-color": "rgb(218, 214, 180)"
      }
    },
    {
      "id": "Water line",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Water line",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[11, 0.6], [15, 1.2], [18, 1.8]] }
      }
    },
    {
      "id": "Ferry road outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": [
          "match",
          ["get", "category"],
          "Rail",
          "rgb(169, 169, 123)",
          "rgba(0, 0, 0, 0)"
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 18, 4]
      }
    },
    {
      "id": "Ferry road default",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "filter": ["!=", ["get", "category"], "Rail"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-dasharray": [2, 3],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1, 16, 2]
      }
    },
    {
      "id": "Ferry road rail",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "filter": ["==", ["get", "category"], "Rail"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-dasharray": [3, 4],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.5, 16, 2.5]
      }
    },
    {
      "id": "Toll local road t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[12, 4], [18, 20]] }
      }
    },
    {
      "id": "Toll major local road t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[12, 4], [18, 20]] }
      }
    },
    {
      "id": "Toll connecting road t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[10, 4], [13, 9], [18, 22]] }
      }
    },
    {
      "id": "Toll secondary road t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 4], [13, 9], [18, 22]] }
      }
    },
    {
      "id": "Toll major road t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[9, 5], [13, 9], [18, 23]] }
      }
    },
    {
      "id": "Toll international road t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[10, 8], [13, 10], [18, 25]] }
      }
    },
    {
      "id": "Toll motorway t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[8, 7], [13, 11], [18, 26]] }
      }
    },
    {
      "id": "Toll minor local road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[15, 10], [18, 19]] }
      }
    },
    {
      "id": "Toll local road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[12, 4], [18, 20]] }
      }
    },
    {
      "id": "Toll major local road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[12, 4], [18, 20]] }
      }
    },
    {
      "id": "Toll connecting road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 4], [13, 9], [18, 22]] }
      }
    },
    {
      "id": "Toll secondary road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[10, 4], [13, 9], [18, 22]] }
      }
    },
    {
      "id": "Toll major road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[9, 5], [13, 9], [18, 23]] }
      }
    },
    {
      "id": "Toll international road tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[10, 8], [13, 10], [18, 25]] }
      }
    },
    {
      "id": "Toll motorway tunnel t",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "minzoom": 7,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[7, 3], [8, 7], [13, 11], [18, 26]] }
      }
    },
    {
      "id": "Toll minor local road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(190, 191, 250)",
        "line-width": [
          "step",
          ["zoom"],
          2,
          14,
          4,
          15,
          10,
          16,
          14,
          17,
          16,
          18,
          18
        ]
      }
    },
    {
      "id": "Toll local road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 14,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(204, 204, 201)",
        "line-width": { "stops": [[14, 1.5], [18, 19]] }
      }
    },
    {
      "id": "Minor local road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Local road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": ["==", ["get", "z_level"], -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 4, 15, 8, 16, 10, 17, 14, 18, 17]
      }
    },
    {
      "id": "Major local road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 8,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway outline - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 11,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[13, 0.5], [14, 1.5], [18, 14]] }
      }
    },
    {
      "id": "Non public road dots - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 15,
      "filter": ["==", "z_level", -2],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[15, 1], [18, 5]] }
      }
    },
    {
      "id": "Pedestrian road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 14,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "minzoom": 14,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road dots - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["==", "z_level", -2],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[14, 0.5], [18, 5]] }
      }
    },
    {
      "id": "Parking road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "minzoom": 14,
      "filter": ["==", "z_level", -2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[14, 1], [18, 6]] }
      }
    },
    {
      "id": "Toll minor local road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": ["step", ["zoom"], 1, 14, 2, 15, 5, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Toll minor local road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[14, 2], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -2],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -2],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -2],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -2],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway under construction - level-2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway arrow - level-2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll minor local road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(190, 191, 250)",
        "line-width": [
          "step",
          ["zoom"],
          2,
          14,
          4,
          15,
          10,
          16,
          14,
          17,
          16,
          18,
          18
        ]
      }
    },
    {
      "id": "Toll local road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 14,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(204, 204, 201)",
        "line-width": { "stops": [[14, 1.5], [18, 19]] }
      }
    },
    {
      "id": "Minor local road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Local road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": ["==", ["get", "z_level"], -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 4, 15, 8, 16, 10, 17, 14, 18, 17]
      }
    },
    {
      "id": "Major local road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 8,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway outline - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 11,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[13, 0.5], [14, 1.5], [18, 14]] }
      }
    },
    {
      "id": "Non public road dots - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 15,
      "filter": ["==", "z_level", -1],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[15, 1], [18, 5]] }
      }
    },
    {
      "id": "Pedestrian road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 14,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "minzoom": 14,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road dots - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["==", "z_level", -1],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[14, 0.5], [18, 5]] }
      }
    },
    {
      "id": "Parking road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "minzoom": 14,
      "filter": ["==", "z_level", -1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[14, 1], [18, 6]] }
      }
    },
    {
      "id": "Toll minor local road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": ["step", ["zoom"], 1, 14, 2, 15, 5, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Toll minor local road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[14, 2], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -1],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -1],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -1],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], -1],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway under construction - level-1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway arrow - level-1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", -1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll minor local road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(184, 184, 180)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Toll local road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(184, 184, 180)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(184, 176, 162)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(173, 158, 134)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "minzoom": 8,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "minzoom": 8,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(184, 154, 116)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "minzoom": 7,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(176, 116, 76)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Minor local road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Local road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Major local road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(184, 176, 162)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(179, 163, 139)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "minzoom": 8,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "minzoom": 8,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(184, 154, 116)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway tunnel outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "minzoom": 7,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(176, 116, 76)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Toll minor local road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "minzoom": 14,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[13, 1], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "minzoom": 14,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 1], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "minzoom": 14,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[13, 1], [18, 12]] }
      }
    },
    {
      "id": "Minor local road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "minzoom": 14,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 1], [18, 12]] }
      }
    },
    {
      "id": "Minor local road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "minzoom": 14,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "minzoom": 14,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "minzoom": 14,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Local road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "minzoom": 14,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Local road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "minzoom": 12,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "minzoom": 12,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "minzoom": 12,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "minzoom": 12,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "minzoom": 11,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "minzoom": 11,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "minzoom": 11,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "minzoom": 11,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "minzoom": 10,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "minzoom": 10,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "minzoom": 9,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "minzoom": 9,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "minzoom": 8,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "minzoom": 8,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "minzoom": 8,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "minzoom": 8,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "minzoom": 8,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "minzoom": 8,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road tunnel road arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "minzoom": 8,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "minzoom": 8,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "minzoom": 6,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "minzoom": 6,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway tunnel",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "minzoom": 6,
      "filter": ["!=", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway tunnel under construction",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "minzoom": 6,
      "filter": ["==", "under_construction", true],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway tunnel arrow",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "minzoom": 15,
      "filter": [
        "all",
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Railway outline",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Railway",
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(143, 149, 185)",
        "line-width": { "stops": [[13, 2], [18, 4]] }
      }
    },
    {
      "id": "Railway",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Railway",
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-dasharray": [3, 4],
        "line-width": { "stops": [[13, 1.5], [18, 2.5]] }
      }
    },
    {
      "id": "Toll minor local road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 12,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(190, 191, 250)",
        "line-width": [
          "step",
          ["zoom"],
          2,
          14,
          4,
          15,
          10,
          16,
          14,
          17,
          16,
          18,
          18
        ]
      }
    },
    {
      "id": "Toll local road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 8,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 6,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 14,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(204, 204, 201)",
        "line-width": { "stops": [[14, 1.5], [18, 19]] }
      }
    },
    {
      "id": "Minor local road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 8, 16, 11, 17, 13, 18, 16]
      }
    },
    {
      "id": "Local road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": ["!", ["has", "z_level"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 8, 16, 10, 17, 14, 18, 17]
      }
    },
    {
      "id": "Major local road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 8,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 8,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway outline - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 8,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 11,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[13, 0.5], [14, 1.5], [18, 14]] }
      }
    },
    {
      "id": "Non public road dots - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 15,
      "filter": ["!has", "z_level"],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[15, 1], [18, 5]] }
      }
    },
    {
      "id": "Pedestrian road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 14,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "minzoom": 14,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road dots - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["!has", "z_level"],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[14, 0.5], [18, 5]] }
      }
    },
    {
      "id": "Parking road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "minzoom": 14,
      "filter": ["!has", "z_level"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[14, 1], [18, 6]] }
      }
    },
    {
      "id": "Toll minor local road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!", ["has", "z_level"]],
        ["!", ["has", "under_construction"]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": ["step", ["zoom"], 1, 14, 2, 15, 5, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Toll minor local road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[14, 2], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!", ["has", "z_level"]],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!", ["has", "z_level"]],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!", ["has", "z_level"]],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!", ["has", "z_level"]],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 8,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 8,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 8,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 8,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 6,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 6,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway under construction - level0",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway arrow - level0",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["!has", "z_level"],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll minor local road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(190, 191, 250)",
        "line-width": [
          "step",
          ["zoom"],
          2,
          14,
          4,
          15,
          10,
          16,
          14,
          17,
          16,
          18,
          18
        ]
      }
    },
    {
      "id": "Toll local road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 14,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(204, 204, 201)",
        "line-width": { "stops": [[14, 1.5], [18, 19]] }
      }
    },
    {
      "id": "Minor local road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Local road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": ["==", ["get", "z_level"], 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 4, 15, 8, 16, 10, 17, 14, 18, 17]
      }
    },
    {
      "id": "Major local road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 8,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway outline - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 11,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[13, 0.5], [14, 1.5], [18, 14]] }
      }
    },
    {
      "id": "Non public road dots - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 15,
      "filter": ["==", "z_level", 1],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[15, 1], [18, 5]] }
      }
    },
    {
      "id": "Pedestrian road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 14,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "minzoom": 14,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road dots - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["==", "z_level", 1],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[14, 0.5], [18, 5]] }
      }
    },
    {
      "id": "Parking road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "minzoom": 14,
      "filter": ["==", "z_level", 1],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[14, 1], [18, 6]] }
      }
    },
    {
      "id": "Toll minor local road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": ["step", ["zoom"], 1, 14, 2, 15, 5, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Toll minor local road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[14, 2], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 1],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 1],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 1],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 1],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway under construction - level+1",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway arrow - level+1",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 1],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll minor local road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(190, 191, 250)",
        "line-width": [
          "step",
          ["zoom"],
          2,
          14,
          4,
          15,
          10,
          16,
          14,
          17,
          16,
          18,
          18
        ]
      }
    },
    {
      "id": "Toll local road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 14,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(204, 204, 201)",
        "line-width": { "stops": [[14, 1.5], [18, 19]] }
      }
    },
    {
      "id": "Minor local road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Local road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": ["==", ["get", "z_level"], 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 4, 15, 8, 16, 10, 17, 14, 18, 17]
      }
    },
    {
      "id": "Major local road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 8,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway outline - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 11,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[13, 0.5], [14, 1.5], [18, 14]] }
      }
    },
    {
      "id": "Non public road dots - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 15,
      "filter": ["==", "z_level", 2],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[15, 1], [18, 5]] }
      }
    },
    {
      "id": "Pedestrian road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 14,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "minzoom": 14,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road dots - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["==", "z_level", 2],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[14, 0.5], [18, 5]] }
      }
    },
    {
      "id": "Parking road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "minzoom": 14,
      "filter": ["==", "z_level", 2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[14, 1], [18, 6]] }
      }
    },
    {
      "id": "Toll minor local road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": ["step", ["zoom"], 1, 14, 2, 15, 5, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Toll minor local road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[14, 2], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 2],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 2],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 2],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 2],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway under construction - level+2",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway arrow - level+2",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 2],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll minor local road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(190, 191, 250)",
        "line-width": [
          "step",
          ["zoom"],
          2,
          14,
          4,
          15,
          10,
          16,
          14,
          17,
          16,
          18,
          18
        ]
      }
    },
    {
      "id": "Toll local road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 17]] }
      }
    },
    {
      "id": "Toll major local road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Toll connecting road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Toll secondary road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Toll major road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "Toll international road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Toll motorway outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 14,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(204, 204, 201)",
        "line-width": { "stops": [[14, 1.5], [18, 19]] }
      }
    },
    {
      "id": "Minor local road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": { "stops": [[15, 8], [18, 16]] }
      }
    },
    {
      "id": "Local road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": ["==", ["get", "z_level"], 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(194, 194, 194)",
        "line-width": ["step", ["zoom"], 4, 15, 8, 16, 10, 17, 14, 18, 17]
      }
    },
    {
      "id": "Major local road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(191, 187, 178)",
        "line-width": { "stops": [[12, 2.5], [18, 17]] }
      }
    },
    {
      "id": "Connecting road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(209, 201, 184)",
        "line-width": { "stops": [[10, 3], [13, 7], [18, 18]] }
      }
    },
    {
      "id": "Secondary road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(212, 194, 167)",
        "line-width": { "stops": [[10, 3], [13, 6], [18, 18]] }
      }
    },
    {
      "id": "Major road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(201, 193, 143)",
        "line-width": { "stops": [[8, 2.5], [13, 6], [18, 19]] }
      }
    },
    {
      "id": "International road outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 8,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 173, 130)",
        "line-width": { "stops": [[5, 1], [13, 7], [18, 19]] }
      }
    },
    {
      "id": "Motorway outline - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 8,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgb(207, 148, 109)",
        "line-width": { "stops": [[8, 4], [13, 7], [18, 21]] }
      }
    },
    {
      "id": "Non public road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 11,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[13, 0.5], [14, 1.5], [18, 14]] }
      }
    },
    {
      "id": "Non public road dots - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "minzoom": 15,
      "filter": ["==", "z_level", 3],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[15, 1], [18, 5]] }
      }
    },
    {
      "id": "Pedestrian road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 14,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "minzoom": 14,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[14, 1], [18, 7]] }
      }
    },
    {
      "id": "Walkway road dots - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["==", "z_level", 3],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-dasharray": [0.1, 3],
        "line-width": { "stops": [[14, 0.5], [18, 5]] }
      }
    },
    {
      "id": "Parking road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "minzoom": 14,
      "filter": ["==", "z_level", 3],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[14, 1], [18, 6]] }
      }
    },
    {
      "id": "Toll minor local road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": ["step", ["zoom"], 1, 14, 2, 15, 5, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Toll minor local road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[14, 2], [18, 12]] }
      }
    },
    {
      "id": "Toll minor local road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Minor local road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 3],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 3],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 1, 14, 3, 15, 6, 16, 8, 17, 10, 18, 12]
      }
    },
    {
      "id": "Minor local road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll local road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[13, 2], [18, 13]] }
      }
    },
    {
      "id": "Toll local road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Local road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 3],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", ["get", "z_level"], 3],
        ["==", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-pattern": "under-construction",
        "line-width": ["step", ["zoom"], 2, 14, 3, 15, 6, 16, 8, 17, 10, 18, 13]
      }
    },
    {
      "id": "Local road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major local road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Toll major local road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major local road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[12, 1], [18, 13]] }
      }
    },
    {
      "id": "Major local road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll connecting road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll connecting road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Connecting road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Connecting road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll secondary road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Toll secondary road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Secondary road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[10, 0.5], [13, 4], [18, 15]] }
      }
    },
    {
      "id": "Secondary road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll major road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll major road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Major road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[8, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Major road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll international road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "Toll international road road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "International road - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(193,193,71,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 16]] }
      }
    },
    {
      "id": "International road arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "International road",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Toll motorway - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(136,193,100,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Toll motorway arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "Motorway - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(234,226,183,1)",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway under construction - level+3",
      "type": "line",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["==", "under_construction", true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(250,243,221,1)",
        "line-pattern": "under-construction",
        "line-width": { "stops": [[5, 0.5], [13, 4], [18, 18]] }
      }
    },
    {
      "id": "Motorway arrow - level+3",
      "type": "symbol",
      "metadata": "group:road",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "z_level", 3],
        ["has", "direction"],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "direction"],
          1,
          "arrow",
          -1,
          "arrow-revers",
          "arrow"
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 100
      }
    },
    {
      "id": "State border background",
      "type": "line",
      "metadata": "group:border",
      "source": "vectorTiles",
      "source-layer": "State border",
      "minzoom": 7,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(195,216,216,1)",
        "line-width": { "stops": [[7, 2.7], [8, 3], [18, 3]] }
      }
    },
    {
      "id": "State border",
      "type": "line",
      "metadata": "group:border",
      "source": "vectorTiles",
      "source-layer": "State border",
      "minzoom": 3,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": {
          "stops": [
            [3, "rgba(193,193,71,1)"],
            [6, "rgba(252,191,73,1)"],
            [7, "rgba(84,201,197,1)"],
            [9, "rgba(136,193,100,1)"]
          ]
        },
        "line-dasharray": { "stops": [[3, [2, 3]], [6, [2, 4]], [7, [2, 4]]] },
        "line-width": { "stops": [[3, 1], [6, 1.3], [7, 1.3], [8, 1.6], [18, 2]] }
      }
    },
    {
      "id": "Country border background",
      "type": "line",
      "metadata": "group:border",
      "source": "vectorTiles",
      "source-layer": "Country border",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": {
          "stops": [[6, "rgba(234,226,183,1)"], [10, "rgba(250,243,221,0.4)"]]
        },
        "line-width": {
          "stops": [
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 2],
            [5, 3],
            [6, 4],
            [8, 8],
            [18, 24]
          ]
        }
      }
    },
    {
      "id": "Country border",
      "type": "line",
      "metadata": "group:border",
      "source": "vectorTiles",
      "source-layer": "Country border",
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": {
          "stops": [[5, "rgba(195,216,216,1)"], [8, "rgba(193,193,71,1)"]]
        },
        "line-dasharray": [2, 6],
        "line-width": { "stops": [[6, 0.5], [10, 1.5], [20, 4]] }
      }
    },
    {
      "id": "Treaty country border",
      "type": "line",
      "metadata": "group:border",
      "source": "vectorTiles",
      "source-layer": "Treaty country border",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(252,191,73,1)",
        "line-dasharray": { "stops": [[3, [2, 3]], [6, [2, 4]], [7, [2, 4]]] },
        "line-width": { "stops": [[3, 1], [6, 1.3], [7, 1.3], [8, 1.6], [18, 2]] }
      }
    },
    {
      "id": "Disputed country border",
      "type": "line",
      "metadata": "group:border",
      "source": "vectorTiles",
      "source-layer": "Disputed country border",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "rgba(84,201,197,1)",
        "line-dasharray": { "stops": [[3, [2, 3]], [6, [2, 4]], [7, [2, 4]]] },
        "line-width": { "stops": [[3, 1], [6, 1.3], [7, 1.3], [8, 1.6], [18, 2]] }
      }
    },
    {
      "id": "Traffic flow Outline Parking road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(136,193,100,1)"],
            [0.15, "rgba(234,226,183,1)"],
            [0.35, "rgba(250,243,221,1)"],
            [0.75, "rgba(195,216,216,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -0.525, 0.525],
          18,
          ["case", ["has", "left_hand_traffic"], -1.05, 1.05]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 0.7875, 18, 2.1]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Parking road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(193,193,71,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -0.7, 0.7],
          18,
          ["case", ["has", "left_hand_traffic"], -1.86667, 1.86667]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          1.75,
          18,
          4.66667
        ]
      }
    },
    {
      "id": "Traffic flow  Parking road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(252,191,73,1)"],
            [0.15, "rgba(84,201,197,1)"],
            [0.35, "rgba(136,193,100,1)"],
            [0.75, "rgba(234,226,183,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -0.525, 0.525],
          18,
          ["case", ["has", "left_hand_traffic"], -1.05, 1.05]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 0.5625, 18, 1.5]
      }
    },
    {
      "id": "Traffic flow Pattern Parking road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -0.525, 0.525],
          18,
          ["case", ["has", "left_hand_traffic"], -1.05, 1.05]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 0.5625, 18, 1.5]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Parking road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -0.7, 0.7],
          18,
          ["case", ["has", "left_hand_traffic"], -1.86667, 1.86667]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          1.25,
          18,
          3.33333
        ]
      }
    },
    {
      "id": "Traffic flow Outline Non public road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(250,243,221,1)"],
            [0.15, "rgba(195,216,216,1)"],
            [0.35, "rgba(193,193,71,1)"],
            [0.75, "rgba(252,191,73,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.07917, 1.07917],
          18,
          ["case", ["has", "left_hand_traffic"], -2.45, 2.45]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          1.61875,
          18,
          4.9
        ]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Non public road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(84,201,197,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.43889, 1.43889],
          18,
          ["case", ["has", "left_hand_traffic"], -4.35556, 4.35556]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          3.59722,
          18,
          10.8889
        ]
      }
    },
    {
      "id": "Traffic flow  Non public road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(136,193,100,1)"],
            [0.15, "rgba(234,226,183,1)"],
            [0.35, "rgba(250,243,221,1)"],
            [0.75, "rgba(195,216,216,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.07917, 1.07917],
          18,
          ["case", ["has", "left_hand_traffic"], -2.45, 2.45]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          1.15625,
          18,
          3.5
        ]
      }
    },
    {
      "id": "Traffic flow Pattern Non public road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.07917, 1.07917],
          18,
          ["case", ["has", "left_hand_traffic"], -2.45, 2.45]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          1.15625,
          18,
          3.5
        ]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Non public road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.43889, 1.43889],
          18,
          ["case", ["has", "left_hand_traffic"], -4.35556, 4.35556]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          2.56944,
          18,
          7.77778
        ]
      }
    },
    {
      "id": "Traffic flow Outline Minor local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(193,193,71,1)"],
            [0.15, "rgba(252,191,73,1)"],
            [0.35, "rgba(84,201,197,1)"],
            [0.75, "rgba(136,193,100,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.26, 1.26],
          18,
          ["case", ["has", "left_hand_traffic"], -2.1, 2.1]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.89, 18, 4.2]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Minor local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(234,226,183,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.68, 1.68],
          18,
          ["case", ["has", "left_hand_traffic"], -3.73333, 3.73333]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          4.2,
          18,
          9.33333
        ]
      }
    },
    {
      "id": "Traffic flow  Minor local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(250,243,221,1)"],
            [0.15, "rgba(195,216,216,1)"],
            [0.35, "rgba(193,193,71,1)"],
            [0.75, "rgba(252,191,73,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.26, 1.26],
          18,
          ["case", ["has", "left_hand_traffic"], -2.1, 2.1]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.35, 18, 3]
      }
    },
    {
      "id": "Traffic flow Pattern Minor local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.26, 1.26],
          18,
          ["case", ["has", "left_hand_traffic"], -2.1, 2.1]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.35, 18, 3]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Minor local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.68, 1.68],
          18,
          ["case", ["has", "left_hand_traffic"], -3.73333, 3.73333]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 3, 18, 6.66667]
      }
    },
    {
      "id": "Traffic flow Outline Local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(84,201,197,1)"],
            [0.15, "rgba(136,193,100,1)"],
            [0.35, "rgba(234,226,183,1)"],
            [0.75, "rgba(250,243,221,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.49333, 1.49333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.275, 2.275]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 2.24, 18, 4.55]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(195,216,216,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.99111, 1.99111],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          4.97778,
          18,
          10.1111
        ]
      }
    },
    {
      "id": "Traffic flow  Local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(193,193,71,1)"],
            [0.15, "rgba(252,191,73,1)"],
            [0.35, "rgba(84,201,197,1)"],
            [0.75, "rgba(136,193,100,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.49333, 1.49333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.275, 2.275]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.6, 18, 3.25]
      }
    },
    {
      "id": "Traffic flow Pattern Local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.49333, 1.49333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.275, 2.275]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.6, 18, 3.25]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.99111, 1.99111],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          3.55556,
          18,
          7.22222
        ]
      }
    },
    {
      "id": "Traffic flow Outline Major local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(234,226,183,1)"],
            [0.15, "rgba(250,243,221,1)"],
            [0.35, "rgba(195,216,216,1)"],
            [0.75, "rgba(193,193,71,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.63333, 1.63333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.275, 2.275]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 2.45, 18, 4.55]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Major local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(252,191,73,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -2.17778, 2.17778],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          5.44444,
          18,
          10.1111
        ]
      }
    },
    {
      "id": "Traffic flow  Major local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(84,201,197,1)"],
            [0.15, "rgba(136,193,100,1)"],
            [0.35, "rgba(234,226,183,1)"],
            [0.75, "rgba(250,243,221,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.63333, 1.63333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.275, 2.275]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.75, 18, 3.25]
      }
    },
    {
      "id": "Traffic flow Pattern Major local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.63333, 1.63333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.275, 2.275]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 1.75, 18, 3.25]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Major local road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -2.17778, 2.17778],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          3.88889,
          18,
          7.22222
        ]
      }
    },
    {
      "id": "Traffic flow Outline Connecting road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(195,216,216,1)"],
            [0.15, "rgba(193,193,71,1)"],
            [0.35, "rgba(252,191,73,1)"],
            [0.75, "rgba(84,201,197,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.96, 1.96],
          18,
          ["case", ["has", "left_hand_traffic"], -2.625, 2.625]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 2.94, 18, 5.25]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Connecting road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(136,193,100,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -2.61333, 2.61333],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          6.53333,
          18,
          11.6667
        ]
      }
    },
    {
      "id": "Traffic flow  Connecting road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(234,226,183,1)"],
            [0.15, "rgba(250,243,221,1)"],
            [0.35, "rgba(195,216,216,1)"],
            [0.75, "rgba(193,193,71,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.96, 1.96],
          18,
          ["case", ["has", "left_hand_traffic"], -2.625, 2.625]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 2.1, 18, 3.75]
      }
    },
    {
      "id": "Traffic flow Pattern Connecting road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -1.96, 1.96],
          18,
          ["case", ["has", "left_hand_traffic"], -2.625, 2.625]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 15, 2.1, 18, 3.75]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Connecting road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["case", ["has", "left_hand_traffic"], -2.61333, 2.61333],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          4.66667,
          18,
          8.33333
        ]
      }
    },
    {
      "id": "Traffic flow Outline Secondary road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(252,191,73,1)"],
            [0.15, "rgba(84,201,197,1)"],
            [0.35, "rgba(136,193,100,1)"],
            [0.75, "rgba(234,226,183,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.933333, 0.933333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.625, 2.625]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.4, 18, 5.25]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Secondary road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(250,243,221,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          3.11111,
          18,
          11.6667
        ]
      }
    },
    {
      "id": "Traffic flow  Secondary road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(195,216,216,1)"],
            [0.15, "rgba(193,193,71,1)"],
            [0.35, "rgba(252,191,73,1)"],
            [0.75, "rgba(84,201,197,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.933333, 0.933333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.625, 2.625]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1, 18, 3.75]
      }
    },
    {
      "id": "Traffic flow Pattern Secondary road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.933333, 0.933333],
          18,
          ["case", ["has", "left_hand_traffic"], -2.625, 2.625]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1, 18, 3.75]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Secondary road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          2.22222,
          18,
          8.33333
        ]
      }
    },
    {
      "id": "Traffic flow Outline Major road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(136,193,100,1)"],
            [0.15, "rgba(234,226,183,1)"],
            [0.35, "rgba(250,243,221,1)"],
            [0.75, "rgba(195,216,216,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.77, 0.77],
          18,
          ["case", ["has", "left_hand_traffic"], -2.8, 2.8]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          1.155,
          13,
          1.4,
          18,
          5.6
        ]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Major road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(193,193,71,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -1.02667, 1.02667],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          2.56667,
          13,
          3.11111,
          18,
          12.4444
        ]
      }
    },
    {
      "id": "Traffic flow  Major road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(252,191,73,1)"],
            [0.15, "rgba(84,201,197,1)"],
            [0.35, "rgba(136,193,100,1)"],
            [0.75, "rgba(234,226,183,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.77, 0.77],
          18,
          ["case", ["has", "left_hand_traffic"], -2.8, 2.8]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.825, 18, 4]
      }
    },
    {
      "id": "Traffic flow Pattern Major road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.77, 0.77],
          18,
          ["case", ["has", "left_hand_traffic"], -2.8, 2.8]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.825, 18, 4]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Major road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -1.02667, 1.02667],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          1.83333,
          13,
          2.22222,
          18,
          8.88889
        ]
      }
    },
    {
      "id": "Traffic flow Outline International road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(250,243,221,1)"],
            [0.15, "rgba(195,216,216,1)"],
            [0.35, "rgba(193,193,71,1)"],
            [0.75, "rgba(252,191,73,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.320833, 0.320833],
          18,
          ["case", ["has", "left_hand_traffic"], -2.8, 2.8]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          0.48125,
          13,
          1.4,
          18,
          5.6
        ]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline International road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(84,201,197,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.427778, 0.427778],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          1.06944,
          13,
          3.11111,
          18,
          12.4444
        ]
      }
    },
    {
      "id": "Traffic flow  International road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(136,193,100,1)"],
            [0.15, "rgba(234,226,183,1)"],
            [0.35, "rgba(250,243,221,1)"],
            [0.75, "rgba(195,216,216,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.320833, 0.320833],
          18,
          ["case", ["has", "left_hand_traffic"], -2.8, 2.8]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 7, 0.34375, 18, 4]
      }
    },
    {
      "id": "Traffic flow Pattern International road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.320833, 0.320833],
          18,
          ["case", ["has", "left_hand_traffic"], -2.8, 2.8]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 7, 0.34375, 18, 4]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern International road",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.427778, 0.427778],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          0.763889,
          13,
          2.22222,
          18,
          8.88889
        ]
      }
    },
    {
      "id": "Traffic flow Outline Motorway",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(193,193,71,1)"],
            [0.15, "rgba(252,191,73,1)"],
            [0.35, "rgba(84,201,197,1)"],
            [0.75, "rgba(136,193,100,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.320833, 0.320833],
          18,
          ["case", ["has", "left_hand_traffic"], -3.15, 3.15]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          0.48125,
          13,
          1.4,
          18,
          6.3
        ]
      }
    },
    {
      "id": "Traffic flow Road Closure Outline Motorway",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [[0, "rgba(234,226,183,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.427778, 0.427778],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          1.06944,
          13,
          3.11111,
          18,
          14
        ]
      }
    },
    {
      "id": "Traffic flow  Motorway",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "traffic_level",
          "stops": [
            [0, "rgba(250,243,221,1)"],
            [0.15, "rgba(195,216,216,1)"],
            [0.35, "rgba(193,193,71,1)"],
            [0.75, "rgba(252,191,73,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.320833, 0.320833],
          18,
          ["case", ["has", "left_hand_traffic"], -3.15, 3.15]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          0.34375,
          13,
          1,
          18,
          4.5
        ]
      }
    },
    {
      "id": "Traffic flow Pattern Motorway",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["<=", "traffic_level", 0.75],
        ["!has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.320833, 0.320833],
          18,
          ["case", ["has", "left_hand_traffic"], -3.15, 3.15]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [
            [0, "traffic-flow-stationary"],
            [0.15, "traffic-flow-queueing"],
            [0.35, "traffic-flow-slow"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          0.34375,
          13,
          1,
          18,
          4.5
        ]
      }
    },
    {
      "id": "Traffic flow Road Closure Pattern Motorway",
      "type": "line",
      "metadata": "group:flow",
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 7,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["<=", "traffic_level", 0.75],
        ["has", "road_closure"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["case", ["has", "left_hand_traffic"], -0.427778, 0.427778],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-pattern": {
          "property": "traffic_level",
          "stops": [[0, "traffic-diagonal-closed"]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          0.763889,
          13,
          2.22222,
          18,
          10
        ]
      }
    },
    {
      "id": "Traffic incident POI Parking road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "maxzoom": 14,
      "filter": ["all", ["==", "road_type", "Parking road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 3,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Non public road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 12,
      "maxzoom": 13,
      "filter": ["all", ["==", "road_type", "Non public road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 3,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Minor local road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 12,
      "maxzoom": 13,
      "filter": ["all", ["==", "road_type", "Minor local road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 3,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Local road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 12,
      "maxzoom": 13,
      "filter": ["all", ["==", "road_type", "Local road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 3,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Major local road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 11,
      "maxzoom": 12,
      "filter": ["all", ["==", "road_type", "Major local road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 3,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Connecting road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 9,
      "maxzoom": 10,
      "filter": ["all", ["==", "road_type", "Connecting road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 3,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Secondary road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 9,
      "maxzoom": 10,
      "filter": ["all", ["==", "road_type", "Secondary road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 4,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Major road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 7,
      "maxzoom": 8,
      "filter": ["all", ["==", "road_type", "Major road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 4,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI International road",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 5,
      "maxzoom": 6,
      "filter": ["all", ["==", "road_type", "International road"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 5,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident POI Motorway",
      "type": "circle",
      "metadata": "group:incidents_dot",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 5,
      "maxzoom": 6,
      "filter": ["all", ["==", "road_type", "Motorway"]],
      "layout": { "visibility": "none" },
      "paint": {
        "circle-color": {
          "property": "magnitude",
          "stops": [
            [0, "#b2b2b2"],
            [1, "#ffce43"],
            [2, "#ff8939"],
            [3, "#f40000"],
            [4, "#c1272d"]
          ],
          "type": "interval"
        },
        "circle-radius": 6,
        "circle-stroke-color": {
          "property": "magnitude",
          "stops": [
            [0, "#ffffff"],
            [1, "#f58240"],
            [2, "#eb4c13"],
            [3, "#ab0000"],
            [4, "#f2f2f2"]
          ],
          "type": "interval"
        },
        "circle-stroke-width": 1
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Parking road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(84,201,197,1)"], [4, "rgba(136,193,100,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          ["case", ["has", "left_hand_traffic"], -0.311111, 0.311111],
          18,
          ["case", ["has", "left_hand_traffic"], -1.86667, 1.86667]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          0.777778,
          18,
          4.66667
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Parking road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(234,226,183,1)"],
            [2, "rgba(250,243,221,1)"],
            [3, "rgba(195,216,216,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          ["case", ["has", "left_hand_traffic"], -0.42, 0.42],
          18,
          ["case", ["has", "left_hand_traffic"], -2.1, 2.1]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 0.7, 18, 4.2]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Parking road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          ["case", ["has", "left_hand_traffic"], -0.311111, 0.311111],
          18,
          ["case", ["has", "left_hand_traffic"], -1.86667, 1.86667]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          0.555556,
          18,
          3.33333
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Parking road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          ["case", ["has", "left_hand_traffic"], -0.42, 0.42],
          18,
          ["case", ["has", "left_hand_traffic"], -2.1, 2.1]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 0.5, 18, 3]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Non public road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(193,193,71,1)"], [4, "rgba(252,191,73,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          14,
          ["case", ["has", "left_hand_traffic"], -0.466667, 0.466667],
          18,
          ["case", ["has", "left_hand_traffic"], -4.35556, 4.35556]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.388889,
          14,
          1.16667,
          18,
          10.8889
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Non public road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(84,201,197,1)"],
            [2, "rgba(136,193,100,1)"],
            [3, "rgba(234,226,183,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.221053, 0.221053],
          14,
          ["case", ["has", "left_hand_traffic"], -0.63, 0.63],
          18,
          ["case", ["has", "left_hand_traffic"], -4.9, 4.9]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.35,
          14,
          1.05,
          18,
          9.8
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Non public road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          14,
          ["case", ["has", "left_hand_traffic"], -0.466667, 0.466667],
          18,
          ["case", ["has", "left_hand_traffic"], -4.35556, 4.35556]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.277778,
          14,
          0.833333,
          18,
          7.77778
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Non public road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.221053, 0.221053],
          14,
          ["case", ["has", "left_hand_traffic"], -0.63, 0.63],
          18,
          ["case", ["has", "left_hand_traffic"], -4.9, 4.9]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.25,
          14,
          0.75,
          18,
          7
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Minor local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(250,243,221,1)"], [4, "rgba(195,216,216,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.311111, 0.311111],
          18,
          ["case", ["has", "left_hand_traffic"], -3.73333, 3.73333]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.777778,
          18,
          9.33333
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Minor local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(193,193,71,1)"],
            [2, "rgba(252,191,73,1)"],
            [3, "rgba(84,201,197,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.442105, 0.442105],
          18,
          ["case", ["has", "left_hand_traffic"], -4.2, 4.2]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 0.7, 18, 8.4]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Minor local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.311111, 0.311111],
          18,
          ["case", ["has", "left_hand_traffic"], -3.73333, 3.73333]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.555556,
          18,
          6.66667
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Minor local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.442105, 0.442105],
          18,
          ["case", ["has", "left_hand_traffic"], -4.2, 4.2]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 0.5, 18, 6]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(136,193,100,1)"], [4, "rgba(234,226,183,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.622222, 0.622222],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          1.55556,
          18,
          10.1111
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(250,243,221,1)"],
            [2, "rgba(195,216,216,1)"],
            [3, "rgba(193,193,71,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.88421, 0.88421],
          18,
          ["case", ["has", "left_hand_traffic"], -4.55, 4.55]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.4, 18, 9.1]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.622222, 0.622222],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          1.11111,
          18,
          7.22222
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          ["case", ["has", "left_hand_traffic"], -0.88421, 0.88421],
          18,
          ["case", ["has", "left_hand_traffic"], -4.55, 4.55]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1, 18, 6.5]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Major local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(252,191,73,1)"], [4, "rgba(84,201,197,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.311111, 0.311111],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          0.777778,
          18,
          10.1111
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Major local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(136,193,100,1)"],
            [2, "rgba(234,226,183,1)"],
            [3, "rgba(250,243,221,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.466667, 0.466667],
          18,
          ["case", ["has", "left_hand_traffic"], -4.55, 4.55]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.7, 18, 9.1]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Major local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.311111, 0.311111],
          18,
          ["case", ["has", "left_hand_traffic"], -4.04444, 4.04444]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          0.555556,
          18,
          7.22222
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Major local road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "left_hand_traffic"], -0.466667, 0.466667],
          18,
          ["case", ["has", "left_hand_traffic"], -4.55, 4.55]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 18, 6.5]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Connecting road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(195,216,216,1)"], [4, "rgba(193,193,71,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.388889,
          13,
          3.11111,
          18,
          11.6667
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Connecting road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(252,191,73,1)"],
            [2, "rgba(84,201,197,1)"],
            [3, "rgba(136,193,100,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.233333, 0.233333],
          18,
          ["case", ["has", "left_hand_traffic"], -5.25, 5.25]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.35,
          13,
          2.8,
          18,
          10.5
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Connecting road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.277778,
          13,
          2.22222,
          18,
          8.33333
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Connecting road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.233333, 0.233333],
          18,
          ["case", ["has", "left_hand_traffic"], -5.25, 5.25]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.25,
          13,
          2,
          18,
          7.5
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Secondary road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(234,226,183,1)"], [4, "rgba(250,243,221,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.388889,
          13,
          3.11111,
          18,
          11.6667
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Secondary road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(195,216,216,1)"],
            [2, "rgba(193,193,71,1)"],
            [3, "rgba(252,191,73,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.225, 0.225],
          18,
          ["case", ["has", "left_hand_traffic"], -5.25, 5.25]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.35,
          13,
          2.8,
          18,
          10.5
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Secondary road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          18,
          ["case", ["has", "left_hand_traffic"], -4.66667, 4.66667]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.277778,
          13,
          2.22222,
          18,
          8.33333
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Secondary road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          ["case", ["has", "left_hand_traffic"], -0.225, 0.225],
          18,
          ["case", ["has", "left_hand_traffic"], -5.25, 5.25]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          0.25,
          13,
          2,
          18,
          7.5
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Major road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(84,201,197,1)"], [4, "rgba(136,193,100,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          0.388889,
          13,
          3.11111,
          18,
          12.4444
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Major road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(234,226,183,1)"],
            [2, "rgba(250,243,221,1)"],
            [3, "rgba(195,216,216,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          ["case", ["has", "left_hand_traffic"], -0.233333, 0.233333],
          13,
          ["case", ["has", "left_hand_traffic"], -1.6, 1.6],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          0.35,
          13,
          2.8,
          18,
          11.2
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Major road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          ["case", ["has", "left_hand_traffic"], -0.155556, 0.155556],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          0.277778,
          13,
          2.22222,
          18,
          8.88889
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Major road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          ["case", ["has", "left_hand_traffic"], -0.233333, 0.233333],
          13,
          ["case", ["has", "left_hand_traffic"], -1.6, 1.6],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          0.25,
          13,
          2,
          18,
          8
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline International road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(193,193,71,1)"], [4, "rgba(252,191,73,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.291667, 0.291667],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.729167,
          13,
          3.11111,
          18,
          12.4444
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline International road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(84,201,197,1)"],
            [2, "rgba(136,193,100,1)"],
            [3, "rgba(234,226,183,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.4375, 0.4375],
          13,
          ["case", ["has", "left_hand_traffic"], -1.56279, 1.56279],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.65625,
          13,
          2.8,
          18,
          11.2
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern International road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.291667, 0.291667],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -4.97778, 4.97778]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.520833,
          13,
          2.22222,
          18,
          8.88889
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern International road",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.4375, 0.4375],
          13,
          ["case", ["has", "left_hand_traffic"], -1.56279, 1.56279],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.46875,
          13,
          2,
          18,
          8
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Outline Motorway",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [[0, "rgba(250,243,221,1)"], [4, "rgba(195,216,216,1)"]],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.291667, 0.291667],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.729167,
          13,
          3.11111,
          18,
          14
        ]
      }
    },
    {
      "id": "Traffic incident flow Outline Motorway",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": {
          "property": "magnitude",
          "stops": [
            [1, "rgba(193,193,71,1)"],
            [2, "rgba(252,191,73,1)"],
            [3, "rgba(84,201,197,1)"]
          ],
          "type": "interval"
        },
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.4375, 0.4375],
          13,
          ["case", ["has", "left_hand_traffic"], -1.56279, 1.56279],
          18,
          ["case", ["has", "left_hand_traffic"], -6.3, 6.3]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.65625,
          13,
          2.8,
          18,
          12.6
        ]
      }
    },
    {
      "id": "Traffic incident flow Style L Pattern Motorway",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.291667, 0.291667],
          13,
          ["case", ["has", "left_hand_traffic"], -1.24444, 1.24444],
          18,
          ["case", ["has", "left_hand_traffic"], -5.6, 5.6]
        ],
        "line-opacity": {
          "property": "magnitude",
          "stops": [[0, 0.3], [4, 1]],
          "type": "interval"
        },
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [0, "traffic-diagonal-unknown"],
            [4, "traffic-diagonal-closed"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.520833,
          13,
          2.22222,
          18,
          10
        ]
      }
    },
    {
      "id": "Traffic incident flow Pattern Motorway",
      "type": "line",
      "metadata": "group:incidents_tube",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "magnitude", 1, 2, 3]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-offset": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["has", "left_hand_traffic"], -0.4375, 0.4375],
          13,
          ["case", ["has", "left_hand_traffic"], -1.56279, 1.56279],
          18,
          ["case", ["has", "left_hand_traffic"], -6.3, 6.3]
        ],
        "line-pattern": {
          "property": "magnitude",
          "stops": [
            [1, "traffic-incidents-slow"],
            [2, "traffic-incidents-queueing"],
            [3, "traffic-incidents-stationary"]
          ],
          "type": "interval"
        },
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          0.46875,
          13,
          2,
          18,
          9
        ]
      }
    },
    {
      "id": "ShieldFerry_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldFerry_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldFerry_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_minor_local_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_minor_local_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_minor_local_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMinor_local_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMinor_local_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMinor_local_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_local_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_local_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_local_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldLocal_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldLocal_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldLocal_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_local_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_local_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_local_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_local_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_local_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_local_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_connecting_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_connecting_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_connecting_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldConnecting_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldConnecting_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldConnecting_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_secondary_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_secondary_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_secondary_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldSecondary_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldSecondary_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldSecondary_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_international_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_international_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_international_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldInternational_road_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldInternational_road_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldInternational_road_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_motorway_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_motorway_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_motorway_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway_tunnel2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway_tunnel1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway_tunnel0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldNon_public_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldNon_public_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldNon_public_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldPedestrian_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldPedestrian_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldPedestrian_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldWalkway_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldWalkway_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldWalkway_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldParking_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldParking_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldParking_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldRailway2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Railway",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldRailway1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Railway",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldRailway0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Railway",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldCountry_border2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Country border",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldCountry_border1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Country border",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldCountry_border0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Country border",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldState_border2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "State border",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldState_border1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "State border",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldState_border0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "State border",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_minor_local_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_minor_local_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_minor_local_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_local_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_local_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_local_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_local_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_local_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_local_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_connecting_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_connecting_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_connecting_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_secondary_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_secondary_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_secondary_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_major_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_international_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_international_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_international_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_motorway2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_motorway1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldToll_motorway0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMinor_local_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMinor_local_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMinor_local_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldLocal_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldLocal_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldLocal_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_local_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_local_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_local_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldConnecting_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldConnecting_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldConnecting_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldSecondary_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldSecondary_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldSecondary_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMajor_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldInternational_road2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "International road",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldInternational_road1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "International road",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldInternational_road0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "International road",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway3",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "filter": ["has", "shield_icon_3"],
      "layout": {
        "icon-image": "{shield_icon_3}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{icon_text_3}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_3",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway2",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "filter": ["has", "shield_icon_2"],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway1",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "filter": ["has", "shield_icon_1"],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-field": "{icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "ShieldMotorway0",
      "type": "symbol",
      "metadata": "group:shield",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "filter": ["has", "shield_icon_0"],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "Non public road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Non public road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Walkway road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Walkway road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Parking road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Parking road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Service road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Service road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Pedestrian road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Pedestrian road",
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Minor local road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Minor local road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Ferry road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Ferry road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": ["match", ["get", "category"], "Rail", 14, 12]
      },
      "paint": {
        "text-color": "rgb(74, 151, 191)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": ["match", ["get", "category"], "Rail", 3, 1]
      }
    },
    {
      "id": "Local road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Local road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Major local road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Major local road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [17, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Connecting road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Connecting road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [15, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Secondary road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Secondary road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[9, 8], [10, 12], [14, 13], [15, 14]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Major road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Major road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "International road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "International road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Motorway label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Motorway",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 550,
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Minor local road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Minor local road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Local road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Local road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Major local road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Major local road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [17, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Connecting road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Connecting road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [15, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Secondary road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Secondary road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[9, 8], [10, 12], [14, 13], [15, 14]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Major road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Major road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "International road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "International road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Motorway tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Motorway tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll minor local road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Toll local road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll local road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Toll major local road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll major local road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [17, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Toll connecting road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [15, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll secondary road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [14, 13], [15, 14]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll major road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll major road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll international road label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll international road",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll motorway label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll motorway",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll minor local road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll minor local road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Toll local road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll local road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Toll major local road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll major local road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [17, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Toll connecting road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll connecting road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [15, 13]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll secondary road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll secondary road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [14, 13], [15, 14]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll major road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll major road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll international road tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll international road tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Toll motorway tunnel label",
      "type": "symbol",
      "metadata": "group:road_label",
      "source": "vectorTiles",
      "source-layer": "Toll motorway tunnel",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [10, 12], [13, 13], [14, 14], [15, 15]] }
      },
      "paint": {
        "text-color": "rgb(0, 0, 0)",
        "text-halo-color": "rgba(255, 255, 255, 0.75)",
        "text-halo-width": { "stops": [[0, 1], [16, 1.5], [17, 2]] }
      }
    },
    {
      "id": "Subway Station 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Subway Station",
      "minzoom": 16,
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(136,193,100,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Factory building 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Factory building",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(234,226,183,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Place of worship 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Place of worship",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(250,243,221,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Hospital building 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Hospital building",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(195,216,216,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "School building 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "School building",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(193,193,71,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Hotel building 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Hotel building",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(252,191,73,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Cultural Facility 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Cultural Facility",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(84,201,197,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Railway Station 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Railway Station",
      "minzoom": 16,
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(136,193,100,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Government Administration Office 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Government Administration Office",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(234,226,183,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Other building 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Other building",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(250,243,221,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "Other town block 3D",
      "type": "fill-extrusion",
      "metadata": "group:area_3d",
      "source": "vectorTiles",
      "source-layer": "Other town block",
      "filter": ["has", "height"],
      "paint": {
        "fill-extrusion-color": "rgba(195,216,216,1)",
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "POI",
      "type": "symbol",
      "metadata": "group:extra_POI",
      "source": "poiTiles",
      "source-layer": "Point of Interest",
      "filter": [
        "all",
        [
          "any",
          ["all", ["<=", ["zoom"], 9], ["<=", ["get", "priority"], 109]],
          ["all", ["==", ["zoom"], 10], ["<=", ["get", "priority"], 119]],
          ["all", ["==", ["zoom"], 11], ["<=", ["get", "priority"], 129]],
          ["all", ["==", ["zoom"], 12], ["<=", ["get", "priority"], 139]],
          ["all", ["==", ["zoom"], 13], ["<=", ["get", "priority"], 149]],
          ["all", ["==", ["zoom"], 14], ["<=", ["get", "priority"], 159]],
          ["all", ["==", ["zoom"], 15], ["<=", ["get", "priority"], 169]],
          ["all", ["==", ["zoom"], 16], ["<=", ["get", "priority"], 179]],
          ["all", [">=", ["zoom"], 17], ["<=", ["get", "priority"], 189]]
        ],
        [
          "any",
          ["==", ["get", "category"], "Automotive Dealer"],
          ["==", ["get", "category"], "Car Wash"],
          ["==", ["get", "category"], "Electric Vehicle Station"],
          ["==", ["get", "category"], "Motoring Organization Office"],
          ["==", ["get", "category"], "Open Parking Area"],
          ["==", ["get", "category"], "Parking Garage"],
          ["==", ["get", "category"], "Gas Station"],
          ["==", ["get", "category"], "Rent-a-Car Facility"],
          ["==", ["get", "category"], "Rent-a-Car-Parking"],
          ["==", ["get", "category"], "Repair Facility"],
          ["==", ["get", "category"], "Rest Area"],
          ["==", ["get", "category"], "Toll Gate"],
          ["==", ["get", "category"], "Truck Stop"],
          ["==", ["get", "category"], "Weigh Station"],
          ["==", ["get", "category"], "Agriculture Business"],
          ["==", ["get", "category"], "Bank"],
          ["==", ["get", "category"], "Business Park"],
          ["==", ["get", "category"], "ATM"],
          ["==", ["get", "category"], "Commercial Building"],
          ["==", ["get", "category"], "Company"],
          ["==", ["get", "category"], "Emergency Medical Service"],
          ["==", ["get", "category"], "Exchange"],
          ["==", ["get", "category"], "Exhibition & Convention Center"],
          ["==", ["get", "category"], "Industrial Building"],
          ["==", ["get", "category"], "Manufacturing Facility"],
          ["==", ["get", "category"], "Media Facility"],
          ["==", ["get", "category"], "Research Facility"],
          ["==", ["get", "category"], "Café/Pub"],
          ["==", ["get", "category"], "Restaurant"],
          ["==", ["get", "category"], "Restaurant Area"],
          ["==", ["get", "category"], "College/University"],
          ["==", ["get", "category"], "Courthouse"],
          ["==", ["get", "category"], "Embassy"],
          ["==", ["get", "category"], "Fire Station/Brigade"],
          ["==", ["get", "category"], "Government Office"],
          ["==", ["get", "category"], "Library"],
          ["==", ["get", "category"], "Military Installation"],
          ["==", ["get", "category"], "Native Reservation"],
          ["==", ["get", "category"], "Non Governmental Organization"],
          ["==", ["get", "category"], "Police Station"],
          ["==", ["get", "category"], "Post Office"],
          ["==", ["get", "category"], "Primary Resource/Utility"],
          ["==", ["get", "category"], "Prison/Correctional Facility"],
          ["==", ["get", "category"], "Public Amenity"],
          ["==", ["get", "category"], "School"],
          ["==", ["get", "category"], "Traffic Service Center"],
          [
            "==",
            ["get", "category"],
            "Transport Authority/Vehicle Registration"
          ],
          ["==", ["get", "category"], "Welfare Organization"],
          ["==", ["get", "category"], "Dentist"],
          ["==", ["get", "category"], "Doctor"],
          ["==", ["get", "category"], "EmergencyRoom"],
          ["==", ["get", "category"], "Health Care Service"],
          ["==", ["get", "category"], "Hospital"],
          ["==", ["get", "category"], "Pharmacy"],
          ["==", ["get", "category"], "Veterinarian"],
          ["==", ["get", "category"], "Amusement Park"],
          ["==", ["get", "category"], "Casino"],
          ["==", ["get", "category"], "Movie Theater"],
          ["==", ["get", "category"], "Club & Association"],
          ["==", ["get", "category"], "Community Center"],
          ["==", ["get", "category"], "Cultural Center"],
          ["==", ["get", "category"], "Entertainment"],
          ["==", ["get", "category"], "Leisure Center"],
          ["==", ["get", "category"], "Marina"],
          ["==", ["get", "category"], "Museum"],
          ["==", ["get", "category"], "Nightlife"],
          ["==", ["get", "category"], "Park & Recreation Area"],
          ["==", ["get", "category"], "Theater"],
          ["==", ["get", "category"], "Trail System"],
          ["==", ["get", "category"], "Winery"],
          ["==", ["get", "category"], "Zoo, Arboreta & Botanical Garden"],
          ["==", ["get", "category"], "Camping Ground"],
          ["==", ["get", "category"], "Vacation Rental"],
          ["==", ["get", "category"], "Hotel/Motel"],
          ["==", ["get", "category"], "Residential Accommodations"],
          ["==", ["get", "category"], "Department Store"],
          ["==", ["get", "category"], "Market"],
          ["==", ["get", "category"], "Shop"],
          ["==", ["get", "category"], "Shopping Center"],
          ["==", ["get", "category"], "Golf Course"],
          ["==", ["get", "category"], "Ice Skating Rink"],
          ["==", ["get", "category"], "Sports Center"],
          ["==", ["get", "category"], "Stadium"],
          ["==", ["get", "category"], "Swimming Pool"],
          ["==", ["get", "category"], "Tennis Court"],
          ["==", ["get", "category"], "Water Sport"],
          ["==", ["get", "category"], "Adventure Sports Venue"],
          ["==", ["get", "category"], "Beach"],
          ["==", ["get", "category"], "Tourist Attraction"],
          ["==", ["get", "category"], "Place of Worship"],
          ["==", ["get", "category"], "Scenic/Panoramic View"],
          ["==", ["get", "category"], "Tourist Information Office"],
          ["==", ["get", "category"], "Access Gateway"],
          ["==", ["get", "category"], "Airport"],
          ["==", ["get", "category"], "Ferry Terminal"],
          ["==", ["get", "category"], "Frontier Crossing"],
          ["==", ["get", "category"], "Helipad"],
          ["==", ["get", "category"], "Mountain Pass"],
          ["==", ["get", "category"], "Port/Warehouse Facility"],
          ["==", ["get", "category"], "Public Transportation Stop"],
          ["==", ["get", "category"], "Railroad Station"],
          ["==", ["get", "category"], "Geographic Feature"],
          ["==", ["get", "category"], "Courier Drop Box"],
          ["==", ["get", "category"], "Checkpoint"]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-padding": 5,
        "icon-size": { "stops": [[10, 0.7], [18, 1]] },
        "symbol-placement": "point",
        "symbol-sort-key": ["get", "priority"],
        "symbol-z-order": "auto",
        "text-field": "{name}\n{subText}",
        "text-font": ["Noto-Regular"],
        "text-justify": "auto",
        "text-letter-spacing": 0.1,
        "text-radial-offset": { "stops": [[10, 1], [18, 1.3]] },
        "text-size": [
          "step",
          ["zoom"],
          ["/", 16, ["log10", ["max", ["length", ["get", "name"]], 30]]],
          15,
          ["/", 15, ["log10", ["max", ["length", ["get", "name"]], 30]]],
          18,
          ["/", 14, ["log10", ["max", ["length", ["get", "name"]], 30]]]
        ],
        "text-variable-anchor": ["top", "left", "bottom", "right"]
      },
      "paint": {
        "text-color": {
          "property": "category",
          "stops": [
            ["Automotive Dealer", "#235082"],
            ["Car Wash", "#235082"],
            ["Electric Vehicle Station", "#235082"],
            ["Motoring Organization Office", "#235082"],
            ["Open Parking Area", "#0E7EC3"],
            ["Parking Garage", "#0E7EC3"],
            ["Gas Station", "#235082"],
            ["Rent-a-Car Facility", "#7e4a87"],
            ["Rent-a-Car-Parking", "#0E7EC3"],
            ["Repair Facility", "#7e4a87"],
            ["Rest Area", "#215242"],
            ["Toll Gate", "#235082"],
            ["Truck Stop", "#235082"],
            ["Weigh Station", "#235082"],
            ["Agriculture Business", "#46475c"],
            ["Bank", "#61525b"],
            ["Business Park", "#7e4a87"],
            ["ATM", "#7e4a87"],
            ["Commercial Building", "#7e4a87"],
            ["Company", "#7e4a87"],
            ["Emergency Medical Service", "#7a281c"],
            ["Exchange", "#7e4a87"],
            ["Exhibition & Convention Center", "#73375b"],
            ["Industrial Building", "#46475c"],
            ["Manufacturing Facility", "#46475c"],
            ["Media Facility", "#7e4a87"],
            ["Research Facility", "#61525b"],
            ["Café/Pub", "#CE6213"],
            ["Restaurant", "#CE6213"],
            ["Restaurant Area", "#CE6213"],
            ["College/University", "#5e452a"],
            ["Courthouse", "#61525b"],
            ["Embassy", "#61525b"],
            ["Fire Station/Brigade", "#61525b"],
            ["Government Office", "#61525b"],
            ["Library", "#61525b"],
            ["Military Installation", "#61525b"],
            ["Native Reservation", "#215242"],
            ["Non Governmental Organization", "#61525b"],
            ["Police Station", "#61525b"],
            ["Post Office", "#7e4a87"],
            ["Primary Resource/Utility", "#797979"],
            ["Prison/Correctional Facility", "#61525b"],
            ["Public Amenity", "#61525b"],
            ["School", "#5e452a"],
            ["Traffic Service Center", "#7e4a87"],
            ["Transport Authority/Vehicle Registration", "#61525b"],
            ["Welfare Organization", "#7a281c"],
            ["Dentist", "#7a281c"],
            ["Doctor", "#7a281c"],
            ["EmergencyRoom", "#7a281c"],
            ["Health Care Service", "#7a281c"],
            ["Hospital", "#7a281c"],
            ["Pharmacy", "#7a281c"],
            ["Veterinarian", "#7a281c"],
            ["Amusement Park", "#73375b"],
            ["Casino", "#7e4a87"],
            ["Movie Theater", "#73375b"],
            ["Club & Association", "#73375b"],
            ["Community Center", "#61525b"],
            ["Cultural Center", "#73375b"],
            ["Entertainment", "#73375b"],
            ["Leisure Center", "#73375b"],
            ["Marina", "#215242"],
            ["Museum", "#73375b"],
            ["Nightlife", "#73375b"],
            ["Park & Recreation Area", "#215242"],
            ["Theater", "#73375b"],
            ["Trail System", "#215242"],
            ["Winery", "#CE6213"],
            ["Zoo, Arboreta & Botanical Garden", "#73375b"],
            ["Camping Ground", "#463ca3"],
            ["Vacation Rental", "#463ca3"],
            ["Hotel/Motel", "#463ca3"],
            ["Residential Accommodations", "#797979"],
            ["Department Store", "#7e4a87"],
            ["Market", "#7e4a87"],
            ["Shop", "#7e4a87"],
            ["Shopping Center", "#7e4a87"],
            ["Golf Course", "#215242"],
            ["Ice Skating Rink", "#215242"],
            ["Sports Center", "#215242"],
            ["Stadium", "#73375b"],
            ["Swimming Pool", "#73375b"],
            ["Tennis Court", "#215242"],
            ["Water Sport", "#215242"],
            ["Adventure Sports Venue", "#215242"],
            ["Beach", "#215242"],
            ["Tourist Attraction", "#215242"],
            ["Place of Worship", "#61525b"],
            ["Scenic/Panoramic View", "#215242"],
            ["Tourist Information Office", "#46475c"],
            ["Access Gateway", "#235082"],
            ["Airport", "#235082"],
            ["Ferry Terminal", "#235082"],
            ["Frontier Crossing", "#235082"],
            ["Helipad", "#235082"],
            ["Mountain Pass", "#215242"],
            ["Port/Warehouse Facility", "#7e4a87"],
            ["Public Transportation Stop", "#235082"],
            ["Railroad Station", "#235082"],
            ["Geographic Feature", "#215242"],
            ["Courier Drop Box", "#C272D0"],
            ["Checkpoint", "#A9909E"]
          ],
          "type": "categorical"
        },
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1
      }
    },
    {
      "id": "River label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "River label",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map",
        "text-size": { "stops": [[0, 8], [12, 12], [16, 16]] }
      },
      "paint": {
        "text-color": "#5d95bf",
        "text-halo-color": "#e0ebf3",
        "text-halo-width": 1
      }
    },
    {
      "id": "Woodland label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Woodland label",
      "filter": ["!=", "name", " "],
      "layout": {
        "icon-image": "169",
        "symbol-placement": "point",
        "text-anchor": "top",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.1,
        "text-offset": [0, 1.3],
        "text-size": { "stops": [[12, 9], [17, 13]] }
      },
      "paint": {
        "text-color": "rgb(96, 111, 78)",
        "text-halo-color": "rgb(255, 255, 255)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Other water body label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Other water body label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.4,
        "text-size": { "stops": [[12, 9], [17, 14]] }
      },
      "paint": {
        "text-color": "rgb(48, 144, 189)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 2
      }
    },
    {
      "id": "Lake label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Lake label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.4,
        "text-size": { "stops": [[12, 11], [17, 18]] }
      },
      "paint": {
        "text-color": "rgb(48, 144, 189)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 2
      }
    },
    {
      "id": "Island label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Island label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.25,
        "text-size": { "stops": [[12, 11], [17, 24]] }
      },
      "paint": {
        "text-color": "rgb(77, 77, 77)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 2
      }
    },
    {
      "id": "Intermittent water label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Intermittent water label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.4,
        "text-size": { "stops": [[12, 9], [17, 18]] }
      },
      "paint": {
        "text-color": "rgb(48, 144, 189)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 2
      }
    },
    {
      "id": "Other label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Other label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-size": { "stops": [[12, 9], [17, 13]] }
      },
      "paint": {
        "text-color": "rgb(77, 77, 77)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 2
      }
    },
    {
      "id": "Hamlet",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Village",
      "minzoom": 14,
      "maxzoom": 17,
      "filter": ["all", ["!=", "name", " "], ["==", "category", "hamlet"]],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-size": 14.4
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.92
      }
    },
    {
      "id": "Neighborhood",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Village",
      "minzoom": 11,
      "maxzoom": 17,
      "filter": [
        "all",
        ["!=", "name", " "],
        ["==", "category", "neighborhood"]
      ],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-size": 14.4
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.92
      }
    },
    {
      "id": "Village",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Village",
      "minzoom": 11,
      "maxzoom": 17,
      "filter": ["!has", "category"],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-size": ["interpolate", ["linear"], ["zoom"], 8, 10, 15, 17]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Town",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Town",
      "minzoom": 9,
      "maxzoom": 17,
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-padding": 10,
        "text-size": ["interpolate", ["linear"], ["zoom"], 8, 11, 15, 18]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Small city icon",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Small city",
      "minzoom": 7,
      "maxzoom": 8,
      "filter": ["<=", "city_priority", 102],
      "layout": {
        "icon-image": "{icon}",
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-justify": "auto",
        "text-offset": [0, 0],
        "text-padding": 8,
        "text-size": 12,
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Small city",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Small city",
      "minzoom": 8,
      "maxzoom": 17,
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-padding": 10,
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          ["match", ["get", "display_class"], 9, 13, 10, 12, 12],
          15,
          ["match", ["get", "display_class"], 9, 20, 10, 19, 19]
        ]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Medium city poprank8",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Medium city",
      "minzoom": 6,
      "maxzoom": 8,
      "filter": [
        "all",
        ["!=", "name", " "],
        ["has", "icon"],
        ["==", "display_class", 8]
      ],
      "layout": {
        "icon-image": "{icon}",
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-justify": "auto",
        "text-offset": [0, 0],
        "text-padding": 10,
        "text-size": ["step", ["zoom"], 12, 7, 13],
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Medium city poprank67",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Medium city",
      "minzoom": 5,
      "maxzoom": 8,
      "filter": [
        "all",
        ["!=", "name", " "],
        ["has", "icon"],
        ["any", ["==", "display_class", 6], ["==", "display_class", 7]]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-size": 1,
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-justify": "auto",
        "text-padding": 10,
        "text-radial-offset": 0,
        "text-size": ["step", ["zoom"], 12, 6, 14, 7, 15],
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Medium city",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Medium city",
      "minzoom": 8,
      "maxzoom": 16,
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-padding": 10,
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          ["match", ["get", "display_class"], 6, 16, 7, 16, 8, 14, 14],
          15,
          ["match", ["get", "display_class"], 6, 22, 7, 22, 8, 20, 14]
        ]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Large city popRank5",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Large city",
      "minzoom": 5,
      "maxzoom": 8,
      "filter": [
        "all",
        ["!=", "name", " "],
        ["has", "icon"],
        ["==", "display_class", 5]
      ],
      "layout": {
        "icon-image": "{icon}",
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": [
          "step",
          ["zoom"],
          ["literal", ["Noto-Medium"]],
          5,
          ["literal", ["Noto-Bold"]]
        ],
        "text-justify": "auto",
        "text-radial-offset": ["step", ["zoom"], 0.3375, 8, 0.45],
        "text-size": ["step", ["zoom"], 12, 6, 15, 7, 16],
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255,255,255, 0.80)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Large city popRank234",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Large city",
      "minzoom": 4,
      "maxzoom": 8,
      "filter": [
        "all",
        ["!=", "name", " "],
        ["has", "icon"],
        [
          "any",
          ["==", "display_class", 2],
          ["==", "display_class", 3],
          ["==", "display_class", 4]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": [
          "step",
          ["zoom"],
          ["literal", ["Noto-Medium"]],
          5,
          ["literal", ["Noto-Bold"]]
        ],
        "text-justify": "auto",
        "text-radial-offset": ["step", ["zoom"], 0.3375, 8, 0.45],
        "text-size": ["step", ["zoom"], 12, 5, 13, 6, 16, 7, 17],
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255,255,255, 0.80)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "Large city",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Large city",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Bold"],
        "text-padding": 10,
        "text-size": ["interpolate", ["linear"], ["zoom"], 8, 18, 15, 25]
      },
      "paint": {
        "text-color": "#4D4D4D",
        "text-halo-color": "rgba(255,255,255, 0.80)",
        "text-halo-width": 2.04
      }
    },
    {
      "id": "State name short",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "State name short",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-padding": 3,
        "text-size": { "stops": [[0, 10], [4, 11], [5, 12], [7, 14], [8, 16]] }
      },
      "paint": {
        "text-color": "rgb(143, 146, 125)",
        "text-halo-color": "rgb(238, 246, 236)",
        "text-halo-width": 2
      }
    },
    {
      "id": "State name",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "State name",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.3,
        "text-padding": 10,
        "text-size": { "stops": [[0, 10], [4, 11], [5, 12], [7, 14], [8, 16]] }
      },
      "paint": {
        "text-color": "rgb(143, 146, 125)",
        "text-halo-color": "rgb(238, 246, 236)",
        "text-halo-width": 2
      }
    },
    {
      "id": "Capital city node",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Capital city",
      "minzoom": 4,
      "maxzoom": 8,
      "filter": ["all", ["!=", "name", " "], ["has", "icon"]],
      "layout": {
        "icon-image": "{icon}",
        "icon-size": ["step", ["zoom"], 0.8, 5, 0.9, 6, 1],
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Bold"],
        "text-justify": "auto",
        "text-offset": [0.5, 0.75],
        "text-size": ["step", ["zoom"], 12, 5, 14, 6, 17, 7, 17],
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "#A4382E",
        "text-halo-color": "rgba(255,255,255, 0.80)",
        "text-halo-width": 2.16
      }
    },
    {
      "id": "Capital city",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Capital city",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "city_priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Bold"],
        "text-size": ["interpolate", ["linear"], ["zoom"], 8, 18, 15, 25]
      },
      "paint": {
        "text-color": "#A4382E",
        "text-halo-color": "rgba(255,255,255, 0.80)",
        "text-halo-width": 2.16
      }
    },
    {
      "id": "Country name",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Country name",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Medium"],
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-padding": 2,
        "text-size": {
          "stops": [[0, 10], [4, 14], [5, 16], [6, 18], [7, 20], [8, 24]]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [1, "rgb(130, 132, 94)"],
            [6, "rgb(51, 51, 51)"],
            [10, "rgb(102, 103, 74)"]
          ]
        },
        "text-halo-color": "rgb(255, 255, 255)",
        "text-halo-width": { "stops": [[1, 0.5], [5, 2]] }
      }
    },
    {
      "id": "Sea label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Sea label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.1,
        "text-padding": 1,
        "text-size": { "stops": [[0, 8], [3, 9], [4, 11], [5, 15]] }
      },
      "paint": {
        "text-color": "rgb(48, 144, 189)",
        "text-halo-color": "rgba(202, 240, 253, 0.5)",
        "text-halo-width": { "stops": [[1, 1], [5, 2]] }
      }
    },
    {
      "id": "Ocean label",
      "type": "symbol",
      "metadata": "group:label",
      "source": "vectorTiles",
      "source-layer": "Ocean label",
      "filter": ["!=", "name", " "],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.25,
        "text-size": { "stops": [[0, 8], [3, 9], [4, 11], [5, 15]] }
      },
      "paint": {
        "text-color": "rgb(48, 144, 189)",
        "text-halo-color": "rgba(202, 240, 253, 0.5)",
        "text-halo-width": { "stops": [[1, 1], [5, 2]] }
      }
    },
    {
      "id": "Traffic Incidents Markers Parking road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Parking road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Parking road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Parking road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Parking road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Non public road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Non public road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Non public road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Non public road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Non public road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Minor local road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Minor local road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Minor local road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Minor local road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Minor local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Local road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Local road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Local road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Local road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Major local road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Major local road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Major local road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Major local road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major local road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Connecting road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Connecting road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Connecting road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Connecting road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Connecting road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Secondary road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Secondary road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Secondary road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Secondary road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Secondary road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Major road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Major road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Major road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Major road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Major road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers International road road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers International road all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers International road no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers International road jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "International road"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    },
    {
      "id": "Traffic Incidents Markers Motorway road closed",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_road_closed",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Motorway all",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["!in", "icon_category_0", 6, 8]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": [
          "match",
          ["concat", ["get", "icon_category_0"], ["get", "magnitude"]],
          "00",
          "traffic_no_delay_info",
          "01",
          "traffic_slow_info",
          "02",
          "traffic_queueing_info",
          "03",
          "traffic_stationary_info",
          "04",
          "traffic_no_delay_info",
          "10",
          "traffic_no_delay_accident",
          "11",
          "traffic_slow_accident",
          "12",
          "traffic_queueing_accident",
          "13",
          "traffic_stationary_accident",
          "14",
          "traffic_no_delay_accident",
          "20",
          "traffic_no_delay_weather_fog",
          "21",
          "traffic_slow_weather_fog",
          "22",
          "traffic_queueing_weather_fog",
          "23",
          "traffic_stationary_weather_fog",
          "24",
          "traffic_no_delay_weather_fog",
          "30",
          "traffic_no_delay_danger",
          "31",
          "traffic_slow_danger",
          "32",
          "traffic_queueing_danger",
          "33",
          "traffic_stationary_danger",
          "34",
          "traffic_no_delay_danger",
          "40",
          "traffic_no_delay_weather_rain",
          "41",
          "traffic_slow_weather_rain",
          "42",
          "traffic_queueing_weather_rain",
          "43",
          "traffic_stationary_weather_rain",
          "44",
          "traffic_no_delay_weather_rain",
          "50",
          "traffic_no_delay_weather_frost",
          "51",
          "traffic_slow_weather_frost",
          "52",
          "traffic_queueing_weather_frost",
          "53",
          "traffic_stationary_weather_frost",
          "54",
          "traffic_no_delay_weather_frost",
          "70",
          "traffic_no_delay_lane_closed",
          "71",
          "traffic_slow_lane_closed",
          "72",
          "traffic_queueing_lane_closed",
          "73",
          "traffic_stationary_lane_closed",
          "74",
          "traffic_no_delay_lane_closed",
          "90",
          "traffic_no_delay_roadworks",
          "91",
          "traffic_slow_roadworks",
          "92",
          "traffic_queueing_roadworks",
          "93",
          "traffic_stationary_roadworks",
          "94",
          "traffic_no_delay_roadworks",
          "100",
          "traffic_no_delay_weather_wind",
          "101",
          "traffic_slow_weather_wind",
          "102",
          "traffic_queueing_weather_wind",
          "103",
          "traffic_stationary_weather_wind",
          "104",
          "traffic_no_delay_weather_wind",
          "110",
          "traffic_no_delay_flooding",
          "111",
          "traffic_slow_flooding",
          "112",
          "traffic_queueing_flooding",
          "113",
          "traffic_stationary_flooding",
          "114",
          "traffic_no_delay_flooding",
          "120",
          "traffic_no_delay_jam",
          "121",
          "traffic_slow_jam",
          "122",
          "traffic_queueing_jam",
          "123",
          "traffic_stationary_jam",
          "124",
          "traffic_no_delay_jam",
          "140",
          "traffic_no_delay_stationary_vehicle",
          "141",
          "traffic_slow_stationary_vehicle",
          "142",
          "traffic_queueing_stationary_vehicle",
          "143",
          "traffic_stationary_stationary_vehicle",
          "144",
          "traffic_no_delay_stationary_vehicle",
          ""
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Motorway no delay jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": "traffic_no_delay_jam",
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "visibility": "none"
      }
    },
    {
      "id": "Traffic Incidents Markers Motorway jam",
      "type": "symbol",
      "metadata": "group:incidents_marker",
      "source": "vectorTilesIncidents",
      "source-layer": "Traffic incident POI",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "road_type", "Motorway"],
        ["in", "poi_type", "start_poi", "standalone_poi"],
        ["==", "icon_category_0", 6],
        ["!in", "magnitude", 0, 4]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-anchor": "bottom",
        "icon-ignore-placement": true,
        "icon-image": {
          "property": "magnitude",
          "stops": [
            [1, "traffic_slow_bg_base"],
            [2, "traffic_queueing_bg_base"],
            [3, "traffic_stationary_bg_base"]
          ],
          "type": "interval"
        },
        "symbol-avoid-edges": true,
        "symbol-placement": "point",
        "text-allow-overlap": true,
        "text-anchor": "bottom",
        "text-field": [
          "format",
          ["to-string", ["ceil", ["/", ["get", "delay"], 60]]],
          { "text-size": 1 }
        ],
        "text-font": ["Noto-Bold"],
        "text-letter-spacing": 0.05,
        "text-offset": [-0.03, -0.5],
        "text-size": 20,
        "visibility": "none"
      },
      "paint": { "text-color": "white" }
    }
  ],
  "id": "c83w14x0o"
}
