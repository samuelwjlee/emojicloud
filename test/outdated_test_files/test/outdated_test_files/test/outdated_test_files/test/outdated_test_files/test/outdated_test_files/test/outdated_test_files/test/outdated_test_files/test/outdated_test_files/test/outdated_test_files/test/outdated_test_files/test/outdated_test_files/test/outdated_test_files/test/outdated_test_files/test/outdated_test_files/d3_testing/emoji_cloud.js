


import emojione from 'emojione';
// import * as d3 from 'd3';

// let emojis = {
//   '1f60f': 44, '1f61f': 2, '1f62f': 25, '1f63f': 33, '1f64f': 55,
//   '1f10f': 44, '1f11f': 2, '1f12f': 25, '1f13f': 33, '1f14f': 55,
//   '1f20f': 44, '1f21f': 2, '1f22f': 25, '1f23f': 33, '1f24f': 55,
//   '1f30f': 44, '1f31f': 2, '1f32f': 25, '1f33f': 33, '1f34f': 55,
//   '1f40f': 44, '1f41f': 2, '1f42f': 25, '1f43f': 33, '1f44f': 55
// };
//
// test

let unicodeTest2 = {
  '😄': randomSize(), '😁': randomSize()
};

var unicodeTest3 = {':grinning:': randomSize(), ':banana:': randomSize(), ':grin:': randomSize(), ':joy:': randomSize(), ':smiley:': randomSize(), ':smile:': randomSize(), ':sweat_smile:': randomSize(), ':laughing:': randomSize(), ':tomato:': randomSize(), ':wink:': randomSize(), ':blush:': randomSize(), ':slight_smile:': randomSize(), ':upside_down:': randomSize(), ':relaxed:': randomSize(), ':yum:': randomSize(), ':relieved:': randomSize(), ':heart_eyes:': randomSize(), ':kissing_heart:': randomSize(), ':kissing:': randomSize()};

var unicodeTest4 = {':grinning:': randomSize(), ':banana:': randomSize()};

function randomSize() {
  let min = 15;
  let max = 70;
  return Math.random() * (max - min) + min;
}

function getEmojis() {
  return Object.keys(unicodeTest3).map(function(emoji) {
    return {
      emojiType: emoji,
      imageUrl: emojione.shortnameToImage(emoji).match(/src="(.*)"/)[1],
      size: unicodeTest3[emoji]
    };
  });
}

// Object.keys(emojis).map(function(emoji) {
//   return {
//     url: 'http://cdn.jsdelivr.net/emojione/assets/png/' + emoji + '.png?v=2.1.4',
//     weight: emojis[emoji]
//   };
// });


let emojis = getEmojis();



var width = 500;
var height = 500;

var nodes = [];
var links = [];

var svg = d3.select("#cloud")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black");

// var tweets = d3.select("#tweets")
//     .attr("width", 300)
//     .attr("height", 300)
//     .style("border", "1px solid black");

var node = svg.selectAll(".node");

var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    .on("tick", tick)
    .linkStrength(0.8)
    .friction(0.9)
    .linkDistance(40)
    .charge(-400)
    .gravity(0.1)
    .theta(0.8)
    .alpha(0.1);


function start() {
    node = node.data(force.nodes(), function(d) {
        return d.index;
    });

    node.enter()
        .append("svg:image")
        .attr("xlink:href", function (d) {
          return d.imageUrl;
        })
        // .attr("width", function (d) {
        //   return d.width;
        // })
        .attr("height", function (d) {
          return d.size;
        })
        .attr("class", function(d) {
            return "node";
        })
        .attr("emojiType", function(d) {
            return d.emojiType;
        });
        // .on("mouseover", fade(.1, true));
        // .attr("width", 120)
        // .attr("height", 120)

    node.exit().remove();

    node.call(force.drag)
        .on("mousedown", function() {
            console.log(node);
            d3.event.stopPropagation();
        });

    node.on("mousedown", function() {
            console.log(node);
        });

    node.on("mouseover", function(d) {
      console.log(d.emojiType);
      updateSidebar(d.emojiType);
      // node.attr("height", function(d) {
      //   return 100;
      // });
    });


    force.start();
    // console.log(d3);
}

let tweets = document.getElementById('divTweets');

function updateSidebar(emojiType){
  // {':grinning:': ['Hey buddy', 'Fun times'] }
  tweets.innerHTML = emojiType;
}

function tick(e) {
    node.attr("x", function(d) {
            if (d.x >= width - (d.size)) {
              return width - (d.size);
            } else if (d.x <= 0) {
              return 0;
            } else {return d.x;}
        })
        .attr("y", function(d) {
                if (d.y >= height - (d.size)) {
                  return height - (d.size);
                } else if (d.y <= 0) {
                  return 0;
                } else {return d.y;}
            });
        // .each(cluster(10 * e.alpha * e.alpha))
        // .each(collide(.5))
}

let padding = 15, // separation between same-color circles
    clusterPadding = 16, // separation between different-color circles
    maxRadius = 12;

  // Move d to be adjacent to the cluster node.
  // function cluster(alpha) {
  //   return function(d) {
  //     var cluster = clusters[d.cluster],
  //         k = 1;
  //
  //     // For cluster nodes, apply custom gravity.
  //     if (cluster === d) {
  //       cluster = {x: width / 2, y: height / 2, radius: -d.height};
  //       k = .1 * Math.sqrt(d.height);
  //     }
  //
  //     var x = d.x - cluster.x,
  //         y = d.y - cluster.y,
  //         l = Math.sqrt(x * x + y * y),
  //         r = d.height + cluster.radius;
  //     if (l != r) {
  //       l = (l - r) / l * alpha * k;
  //       d.x -= x *= l;
  //       d.y -= y *= l;
  //       cluster.x += x;
  //       cluster.y += y;
  //     }
  //   };
  // }
// Resolves collisions between d and all other circles.
// function collide(alpha) {
//   var quadtree = d3.geom.quadtree(nodes);
//   return function(d) {
//     var r = d.height + maxRadius + Math.max(padding, clusterPadding),
//         nx1 = d.x - r,
//         nx2 = d.x + r,
//         ny1 = d.y - r,
//         ny2 = d.y + r;
//     quadtree.visit(function(quad, x1, y1, x2, y2) {
//       if (quad.point && (quad.point !== d)) {
//         var x = d.x - quad.point.x,
//             y = d.y - quad.point.y,
//             l = Math.sqrt(x * x + y * y),
//             r = d.height + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
//         if (l < r) {
//           l = (l - r) / l * alpha;
//           d.x -= x *= l;
//           d.y -= y *= l;
//           quad.point.x += x;
//           quad.point.y += y;
//         }
//       }
//       return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
//     });
//   };
// }



function getInitialPosition() {
  var position = {};
  var dir = Math.floor(Math.random() * 4);
  if (dir === 1) {
    position.x = Math.random() * width;
    position.y = 0;
  } else if (dir === 2) {
    position.x = Math.random() * width;
    position.y = height;
  } else if (dir === 3) {
    position.x = 0;
    position.y = Math.random() * height;
  } else if (dir === 4) {
    position.x = width;
    position.y = Math.random() * height;
  }
  return position;
}

var delay = 100;
function addPerson() {


    var feeling = emojis.pop();

    var position = getInitialPosition();
    // feeling.x = width/2;
    // feeling.y = width/2;
    // feeling.x = position.x;
    // feeling.y = position.y;

    nodes.push(feeling);

    start();

    if (emojis.length > 0) {
      setTimeout(function () {
        addPerson();
      }, delay);
      if (delay > 100) {
        delay -= 100;
      }
    }
}

addPerson();
