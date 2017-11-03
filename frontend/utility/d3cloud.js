var emojis, svg, node;
var width = 500;
var height = 500;
var delay = 0;
var links = [];
var nodes = [];
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

export function fetchEmojis(place) {
  let apiAddress = '/api/' + place + '_emojis' + '/1'
  svg = d3.select("#cloud");
  node = svg.selectAll(".node");
  d3.json(apiAddress, function(data) {
    svg.selectAll("*").remove();
    while (nodes.length > 0) {nodes.pop();}
    emojis = getEmojis(data.emojis);
    addEmoji();
  })
}

function addEmoji() {
  let emoji = emojis.pop();
  if (emoji) {
    emoji.x = width/2;
    emoji.y = width/2;
    nodes.push(emoji);
    start();
  }

  if (emojis.length > 0) {
    setTimeout(function () {addEmoji()}, delay);
    delay -= 1;
  }
}

function getEmojis(emojis) {
  let totalVolume = 0;
  let minCount, maxCount;

  Object.keys(emojis).forEach((emoji) => {
    let count = emojis[emoji];
    if (emoji !== 'top' && emoji !== 'total') {
      totalVolume += ((1 + Math.log(count)) * (1 + Math.log(count)));
      count < minCount ? minCount = count : maxCount = count;
    }
  })

  return Object.keys(emojis).map(function(emoji) {
    if (emoji !== 'top' && emoji !== 'total') {
      return {
        emojiData: emoji,
        imageUrl: emojione.unicodeToImage(emoji).match(/src="(.*)"/) ? emojione.unicodeToImage(emoji).match(/src="(.*)"/)[1] :  "https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7",
        count: (1 + Math.log(emojis[emoji])) * getScalingFactor(totalVolume)
      }
    }
  })
}

function getScalingFactor(totalVolume) {
  return (Math.sqrt(width * height / totalVolume))/2;
}

function start() {
  node = node.data(force.nodes(), function(d) {return d.index;});
  node.enter()
      .append("svg:image")
      .attr("xlink:href", function (d) {return d.imageUrl;})
      .attr("height", function (d) {return d.count;})
      .attr("class", function(d) {return "node";})
      .attr("emojiData", function(d) {return d.emojiData;})
  node.exit().remove();
  node.call(force.drag)
  force.start();
}

function tick(e) {
  node.attr("x", function(d) {
          if (d.x >= width - (d.count)) {
            return width - (d.count);
          } else if (d.x <= 0) {
            return 0;
          } else {return d.x;}
        }
      )
      .attr("y", function(d) {
          if (d.y >= height - (d.count)) {
            return height - (d.count);
          } else if (d.y <= 0) {
            return 0;
          } else {return d.y;}
        }
      )
}
