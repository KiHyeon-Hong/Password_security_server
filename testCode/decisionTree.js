var DecisionTree = require('decision-tree');

var training_data = [
	{"color":"blue", "shape":"square", "liked":false},
	{"color":"red", "shape":"square", "liked":false},
	{"color":"blue", "shape":"circle", "liked":true},
	{"color":"red", "shape":"circle", "liked":true},
	{"color":"blue", "shape":"hexagon", "liked":false},
	{"color":"red", "shape":"hexagon", "liked":false},
	{"color":"yellow", "shape":"hexagon", "liked":true},
	{"color":"yellow", "shape":"circle", "liked":true}
];

var test_data = [
	{"color":"blue", "shape":"hexagon", "liked":false},
	{"color":"red", "shape":"hexagon", "liked":false},
	{"color":"yellow", "shape":"hexagon", "liked":true},
	{"color":"yellow", "shape":"circle", "liked":true},
    {"color":"yellow", "shape":"circle", "liked":false}
];

var class_name = "liked";

var features = ["color", "shape"];

var dt = new DecisionTree(class_name, features);
dt.train(training_data);

var dt = new DecisionTree(training_data, class_name, features);

var predicted_class = dt.predict({
	color: "yellow",
	shape: "hexagon"
});

console.log(predicted_class);

var accuracy = dt.evaluate(test_data);

console.log(accuracy);