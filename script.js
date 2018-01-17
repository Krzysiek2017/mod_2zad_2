var movies = [{
	id: 1,
	title: 'Harry Potter',
	desc: 'Film o czarodzieju',
	img: './images/1.jpg'
}, {
	id: 2,
	title: 'Król Lew',
	desc: 'Film o królu sawanny',
	img: './images/2.jpg'
}, {
	id: 3,
	title: 'Transformers',
	desc: 'Film o robotach',
	img: './images/3.jpg'
}, {
	id: 4,
	title: 'Incepcja',
	desc: 'Film o spaniu',
	img: './images/4.jpg'
}];
var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (React.createElement('li', {
			key: this.props.movie.id
		}, React.createElement(MovieTitle, {
			title: this.props.movie.title
		}), React.createElement(MovieDescription, {
			desc: this.props.movie.desc
		}), React.createElement('img', {
			src: this.props.movie.img
		})))
	},
});
var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	},
});
var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc)
	},
});
var MoviesList = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired,
	},
	render: function() {
		var movies = this.props.data.map(function(movie) {
			return React.createElement(Movie, {
				movie: movie,
				key: movie.id
			});
		});
		return (React.createElement('div', {}, React.createElement('h1', {}, 'Lista filmów'), React.createElement('ul', {}, movies)))
	},
});
var element = React.createElement(MoviesList, {
	data: movies
});
ReactDOM.render(element, document.getElementById('app'));