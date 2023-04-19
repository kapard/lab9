const svg = d3.select("#scatterplot")
	.append("svg")
	.attr("width", 500)
	.attr("height", 500);


const data = d3.range(100).map(function() {
	return {
		x: Math.random() * 500,
		y: Math.random() * 500
	};
});


svg.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; })
	.attr("r", 5)
	.attr("fill", "steelblue");


    d3.csv("titanic.csv", { mode: 'no-cors'}).then(function(data) {
        console.log(data);
    }).catch(function(error) {
       console.log(error);
    });


d3.csv("titanic.csv", { mode: 'no-cors'}).then(function(data) {
	const ageData = data.filter(function(d) {
		return d.age !== "";
	});

	const ageGroups = d3.group(ageData, function(d) {
		const age = parseFloat(d.age);
		if (age < 18) {
			return "0-17";
		} else if (age < 30) {
			return "18-29";
		} else if (age < 50) {
			return "30-49";
		} else {
			return "50+";
		}
	});

	
	const ageArray = Array.from(ageGroups, function([key, value]) {
		return { age: key, count: value.length };
	});

	
	const width = 500;
	const height = 500;
	const radius = Math.min(width, height) / 2;
	const svg = d3.select("#piechart")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
})

	
