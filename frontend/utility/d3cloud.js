var emojis;
var links = [];
var nodes = [];
var node = d3.select("#cloud").selectAll(".node");
var force = d3.layout.force()
.nodes(nodes)
.links(links)
.size([500, 500])
.on("tick", tick)
.linkStrength(1)
.friction(0.9)
.linkDistance(2)
.charge(-100)
.gravity(.1)
.theta(0.8)
.alpha(4.1);

export function fetchEmojis(place) {
  let streamPath = '/api/' + place + '_emojis';
  let staticPath = streamPath + '/1'

  d3.json(staticPath, function(data) {
    console.log(data);
    d3.select("#cloud").selectAll("*").remove();
    console.log(d3.select("#cloud"));
    while (nodes.length > 0) {
      nodes.pop();
    }
    emojis = getEmojis(data.emojis);
    addEmoji();
  })
  console.log(d3);
}

function getEmojis(emojis) {
  let totalVolume = 0;
  let totalCount = 0;
  let minCount;
  let maxCount;
  Object.values(emojis).forEach((arr, idx) => {
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
  let factor = Math.sqrt(500 * 500 / total);
  return factor/2
}


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

    node.on("mouseover", function(d) {
      d3.select(this).transition()
          .ease("quad")
          .duration("100")
          .attr("height", d.count * 1.5);
    });

    node.on("mouseout", function(d) {
      d3.select(this).transition()
          .ease("quad")
          .delay('100')
          .duration("100")
          .attr("height", d.count);
    });

    force.start();
}

function tick(e) {
    node.attr("x", function(d) {
            if (d.x >= 500 - (d.count)) {
              return 500 - (d.count);
            } else if (d.x <= 0) {
              return 0;
            } else {return d.x;}
        })
        .attr("y", function(d) {
                if (d.y >= 500 - (d.count)) {
                  return 500 - (d.count);
                } else if (d.y <= 0) {
                  return 0;
                } else {return d.y;}
            });
}

function addEmoji() {
  var delay = 0;
  var emoji = emojis.pop();
  emoji.x = 500/2;
  emoji.y = 500/2;
  nodes.push(emoji);
  start();
  if (emojis.length > 0) {
    setTimeout(function () {
      addEmoji();
    }, delay);
      delay -= 1;
  }
}