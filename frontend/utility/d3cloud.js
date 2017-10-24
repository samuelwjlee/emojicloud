let emojis, svg, node;
let width = 500;
let height = 500;
let links = [];
let nodes = [];
let force = d3.layout.force()
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
  svg = d3.select("#cloud");
  node = svg.selectAll(".node");
  let apiAddress = '/api/' + place + '_emojis' + '/1'

  d3.json(apiAddress, function(data) {
    svg.selectAll("*").remove();
    while (nodes.length > 0) {nodes.pop();}
    emojis = getEmojis(data.emojis);
    addEmoji();
  })
}

function addEmoji() {
  let delay = 0;
  let emoji = emojis.pop();
  emoji.x = width/2;
  emoji.y = height/2;
  nodes.push(emoji);
  start();
  if (emojis.length > 0) {
    setTimeout(function () {
      addEmoji();
    }, delay);
      delay -= 1;
  }
}

function getEmojis(emojis) {
  let totalVolume = 0;
  let totalCount = 0;
  let minCount, maxCount;

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

  return Object.keys(emojis).map(function(emoji) {
    return {
      emojiData: emojis[emoji],
      emojiFrequency: (emojis[emoji][0] * 100 / totalCount).toFixed(2),
      imageUrl: emojione.unicodeToImage(emoji).match(/src="(.*)"/) ? emojione.unicodeToImage(emoji).match(/src="(.*)"/)[1] :  "https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7",
      count: (1 + Math.log(emojis[emoji][0])) * getScalingFactor(totalVolume, minCount, maxCount)
    };
  });
}

function getScalingFactor(total, min, max) {
  return (Math.sqrt(width * height / total))/2;
}


function start() {
    node = node.data(force.nodes(), function(d) {return d.index;});
    node.enter()
        .append("svg:image")
        .attr("xlink:href", function (d) {return d.imageUrl;})
        .attr("height", function (d) {return d.count;})
        .attr("class", function(d) {return "node";})
        .attr("emojiData", function(d) {return d.emojiData;})
        .attr("emojiFrequency", function(d) {return d.emojiFrequency;})
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
