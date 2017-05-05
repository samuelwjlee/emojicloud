// $(function() {
// import d3 from 'd3';
// var d3 = require('d3');
// import emojione from 'https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js'
// import d3 from 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js'
// $(document).ready(function() {

let emojis;

fetchEmojis('world');

var width = 500;
var height = 500;
var nodes = [];
var links = [];

var svg = d3.select("#cloud")
    .attr("width", width)
    .attr("height", height)

function fetchEmojis(place) {
  // beginTransition();
  let streamPath = '/api/' + place + '_emojis';
  let staticPath = streamPath + '/1'

  d3.json(staticPath, function(data) {

    // initialize continent map with preset geo and zoom
    const continents = {
      world: [{lat: 48, lng: 67}, 2],
      africa: [{lat: 7, lng: 21}, 3],
      asia: [{lat: 34, lng: 109}, 3],
      europe: [{lat: 50, lng: 14}, 4],
      us: [{lat: 39, lng: -98}, 4]
    }
    initMap(continents[place][0], continents[place][1]);

    svg.selectAll("*").remove();
    while (nodes.length > 0) {
      nodes.pop();
    }

    emojis = getEmojis(data.emojis);
    addEmoji();
  })

}

function beginTransition() {
  // const $body = $('body')
  // const $pending = $("<div></div>")
  // $pending.text("FETCHING DATA ...")
  // $body.append($pending)
  // force.gravity(44)
  // .linkStrength(0.8)
  // .friction(0.9)
  // .linkDistance(2000)
  // .charge(-30)
  // .theta(0.8)
  // .alpha(.1);
}
function endTransition() {
  // $pending.text("")
  // force.gravity(.3)
  // .linkStrength(0.8)
  // .friction(0.9)
  // .linkDistance(2)
  // .charge(-100)
  // .theta(0.8)
  // .alpha(4.1);
}

// function getGravity() {
//   return gravity;
// }

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getEmojis(emojis) {
  let totalVolume = 0;
  let totalCount = 0;
  let minCount;
  let maxCount;
  Object.values(emojis).forEach((arr, idx) => {
    //assign coordinates to emojis from the world
    if (current_continent === 'world') {
       let coordinates = [
        {lat: 36, lng: 127}, //korea
        {lat: 36, lng: 138}, //japan
        {lat: 47, lng: 103}, //mongolia
        {lat: 20, lng: 79}, //india
        {lat: 14, lng: 100}, //bangkok
        {lat: 22, lng: 96}, //burma
        {lat: 13, lng: 121}, //philippines
        {lat: 1, lng: 103}, //singapore
        {lat: 6, lng: 106}, //jakarta
        {lat: 34, lng: 14}, //cape town
        {lat: 9, lng: 9}, //nigeria
        {lat: 26, lng: 28}, //johannesburg
        {lat: 4, lng: 21}, //congo
        {lat: 13, lng: 30}, //sudan
        {lat: 27, lng: 30}, //egypt
        {lat: 26, lng: 17}, //libya
        {lat: 28, lng: -2}, //algeria
        {lat: 19, lng: 47}, //madagascar
        {lat: 19, lng: 28}, //zimbabwe
        {lat: 13, lng: 34}, //malawi
        {lat: 8, lng: -1}, //ghana
        {lat: 50, lng: 14}, //praque
        {lat: 52, lng: 13}, //berlin
        {lat: 51, lng: -.1}, //london
        {lat: 40, lng: -3}, //madrid
        {lat: 42, lng: 13}, //los angeles
        {lat: 49, lng: 2}, //paris
        {lat: 47, lng: 19}, //budapest
        {lat: 52, lng: 21}, //warsaw
        {lat: 45, lng: 9}, //milan
        {lat: 41, lng: 28}, //istanbul
        {lat: 53, lng: -7}, //ireland
        {lat: 38, lng: 23} //athens
      ];
      shuffle(coordinates)
      arr[3] = [coordinates[0].lat, coordinates[0].lng]
    }

    let count = arr[0];
    totalVolume += ((1 + Math.log(count)) * (1 + Math.log(count)));
    totalCount += count;
    if (idx === 0) {
      minCount = count;
      maxCount = count;
    } else {
      if (count < minCount) minCount = count;
      if (count > maxCount) maxCount = count;
    }
  });

  let emojiScalingFactor = getScalingFactor(totalVolume, minCount, maxCount);

  return Object.keys(emojis).map(function(emoji) {
    return {
      emojiData: emojis[emoji],
      emojiFrequency: (emojis[emoji][0] * 100 / totalCount).toFixed(2),
      imageUrl: emojione.unicodeToImage(emoji).match(/src="(.*)"/) ? emojione.unicodeToImage(emoji).match(/src="(.*)"/)[1] :  "https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7",
      count: (1 + Math.log(emojis[emoji][0])) * emojiScalingFactor
    };
  });
}

function getScalingFactor(total, min, max) {
  let factor = Math.sqrt(width * height / total);
  return factor/2
}

var node = svg.selectAll(".node");


var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    .on("tick", tick)
    .linkStrength(1)
    .friction(0.9)
    .linkDistance(2)
    .charge(-100)
    .gravity(.1)
    .theta(0.8)
    .alpha(4.1);

function start() {
    node = node.data(force.nodes(), function(d) {
        return d.index;
    });
    node.enter()
        .append("svg:image")
        .attr("xlink:href", function (d) {
          return d.imageUrl;
        })
        .attr("height", function (d) {
          return d.count; // scaleEmoji(d.count);
        })
        .attr("class", function(d) {
            return "node";
        })
        .attr("emojiData", function(d) {
            return d.emojiData;
        })
        .attr("emojiFrequency", function(d) {
            return d.emojiFrequency;
        });

    node.exit().remove();
    node.call(force.drag)
        .on("mousedown", function(d) {
            // console.log("this is a node on mousedown:", node);
            d3.event.stopPropagation();

            //get coordinates from node and place marker
            deleteMarkers();
            let geo = {lat:d.emojiData[3][0], lng:d.emojiData[3][1]};
            placeMark(geo)
        });

    node.on("mouseover", function(d) {
      updateSidebar(d.emojiData, d.emojiFrequency);

      d3.select(this).transition()
          .ease("elastic")
          .duration("500")
          .attr("height", d.count * 1.5);
    });

    node.on("mouseout", function(d) {
      d3.select(this).transition()
          .ease("quad")
          .delay("100")
          .duration("200")
          .attr("height", d.count);
    });

    force.start();
}

let $tweets = $('#tweet-container');

function updateSidebar(emojiData, emojiFrequency){
  //console.log(tweets);
  $tweets.empty();

  let $tweetHeader = $(`<div></div>`);
  $tweetHeader.addClass("tweet-header");
  let $screenName = $(`<div>${emojiData[4]}</div>`);
  $screenName.addClass("tweet-screenname");
  let $tweetCount = $(`<div>Emoji Frequency: ${emojiFrequency}%</div>`);
  $tweetCount.addClass("tweet-count");
  $tweetHeader.append($screenName, $tweetCount);

  let $tweetBody = $(`<div>${emojiData[1]}</div>`);
  $tweetBody.addClass("tweet-body");

  // let $tweetFooter = $(`<div></div>`);

  $tweets.append($tweetHeader, $tweetBody);


  // screenname.text()

  // tweets.innerHTML = `${emojiData[4]}
  // ${emojiData[1]}
  // (${emojiData[0]})`
}


////////////////////////////////// COMMENT OUT FOR COLLISION DETECTION //////////////////////////////////

function tick(e) {
    node.attr("x", function(d) {
            if (d.x >= width - (d.count)) {
              return width - (d.count);
            } else if (d.x <= 0) {
              return 0;
            } else {return d.x;}
        })
        .attr("y", function(d) {
                if (d.y >= height - (d.count)) {
                  return height - (d.count);
                } else if (d.y <= 0) {
                  return 0;
                } else {return d.y;}
            });
}


////////////////////////////////// COLLISION DETECTION //////////////////////////////////

// force.on("tick", function(e) {
//   var q = d3.geom.quadtree(nodes),
//       i = 0,
//       n = nodes.length;
//   while (++i < n) {
//     q.visit(collide(nodes[i]));
//   }
//   // svg.selectAll("node")
//   //     .attr("x", function(d) { return d.x; })
//   //     .attr("y", function(d) { return d.y; });
//
//   node.attr("x", function(d) {
//           if (d.x >= width - (d.count)) {
//             return width - (d.count);
//           } else if (d.x <= 0) {
//             return 0;
//           } else {return d.x;}
//       })
//       .attr("y", function(d) {
//               if (d.y >= height - (d.count)) {
//                 return height - (d.count);
//               } else if (d.y <= 0) {
//                 return 0;
//               } else {return d.y;}
//           });
//
// })
//
//
// function collide(node) {
//   var r = node.count,
//       nx1 = node.x - r,
//       nx2 = node.x + r,
//       ny1 = node.y - r,
//       ny2 = node.y + r;
//       console.log(node.count, nx1, nx2, ny1, ny2);
//   return function(quad, x1, y1, x2, y2) {
//     if (quad.point && (quad.point !== node)) {
//       var x = node.x - quad.point.x,
//           y = node.y - quad.point.y,
//           l = Math.sqrt(x * x + y * y),
//           r = node.count + quad.point.radius;
//       if (l < r) {
//         l = (l - r) / l * .5;
//         node.x -= x *= l;
//         node.y -= y *= l;
//         quad.point.x += x;
//         quad.point.y += y;
//       }
//     }
//     return x1 > nx2
//         || x2 < nx1
//         || y1 > ny2
//         || y2 < ny1;
//   };
// }


////////////////////////////////// COLLISION DETECTION //////////////////////////////////









let padding = 15, // separation between same-color circles
    clusterPadding = 16, // separation between different-color circles
    maxRadius = 12;

// function getInitialPosition() {
//   var position = {};
//   var dir = Math.floor(Math.random() * 4);
//   if (dir === 1) {
//     position.x = Math.random() * width;
//     position.y = 0;
//   } else if (dir === 2) {
//     position.x = Math.random() * width;
//     position.y = height;
//   } else if (dir === 3) {
//     position.x = 0;
//     position.y = Math.random() * height;
//   } else if (dir === 4) {
//     position.x = width;
//     position.y = Math.random() * height;
//   }
//   return position;
// }
var delay = 0;
function addEmoji() {
  // emojis.forEach((emoji) => {
  //   emoji.x = width/2;
  //   emoji.y = width/2;
  //   nodes.push(emoji));
  // });
  // start();

    var emoji = emojis.pop();
    // var position = getInitialPosition();
    emoji.x = width/2;
    emoji.y = width/2;
    // feeling.x = position.x;
    // feeling.y = position.y;
    nodes.push(emoji);

    start();
    if (emojis.length > 0) {
      setTimeout(function () {
        addEmoji();
      }, delay);
        delay -= 1;
    }
}

// });
