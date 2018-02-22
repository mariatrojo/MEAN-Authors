var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/myAngularApp/dist'));
app.use(express.static('./public'))

mongoose.connect('mongodb://localhost/authors');
mongoose.Promise = global.Promise;

var AuthorSchema = new mongoose.Schema ({
	name: { type: String },
});

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

//retrieve all authors
app.get('/authors', function(req, res) {
	Author.find({}, function(err, authors) {
		if(err){
			console.log("Returned error", err)
		} else {
			res.json({message: "Success", authors: authors})
		}
	})
})

app.post('/authors', function(req, res) {
	var author = new Author(req.body);
	author.save(function(err, authors) {
		if(err){
			console.log("New author error", err)
		} else {
			res.json({message: "Successfully added author", authors: authors})
		}
	})
})

app.delete('/authors/:id', function(req, res) {
	Author.remove({_id: req.params.id}, function(err, results) {
		if(err){
			console.log('Delete error', err)
		} else {
			res.json({message: 'Success delete'});
		}
	})
})

app.get('/authors/:id', function (req, res) {
    Author.findOne({_id: req.params.id}, function (err, results) {
        if (err) {
            res.json({
                message: 'something is wrong with the ID',
                error: err
            })
        } else {
            res.json({message: 'Success', data: results})
        }
    })
})

app.put('/authors/:id', function (req, res) {
    Author.update({_id:req.params.id}, {$set: {name: req.body.name }}, {multi: false}, function(err, data){
        if(err){
            res.json({message: 'Error', error:err})
        }else{
            res.json({message: 'Success', success:data})
        }
    })
})

app.all("*", (req, res, next) => {
	res.sendFile(path.resolve("./myAngularApp/dist/index.html"))
})

app.listen(8000, function() {
	console.log("Author app listening on port 8000");
})