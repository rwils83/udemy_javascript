const blogs = [
	{title: 'Make your own damn sandwhich', likes: 30 },
	{title: 'User not in sudoers file', likes: 100}

]

blogs.forEach(function(blog){console.log(blog)});



let user = {
	name: 'Crystal',
	age: 30,
	email: 'crystal@example.net',
	location: 'berlin',
	blogs: ['Make your own damn sandwhich', 'User not in sudoers file'],
	login: function(){console.log('The user logged in')},
	logout: function(){
		console.log('The user logged out')},
//	listBlogs: function(blogs){blogs.forEach(function(blog){console.log(blog)})} paused video, my solution
	// class solution (much cleaner)
	listBlogs: function(){
		this.blogs.forEach(function(blog){console.log(blog)})}  // quick note, the this keyword will not work properly if arrow function is used as object method
};

console.log(user);

console.log(user.name); // access via .notation

console.log(user.age);

user.age = 35; // update via .notation

console.log(user.age);


console.log(user['name']); // access via bracket notation

user['name'] = 'Shit'; // update via bracket notation

console.log(user['name']);


console.log(typeof user);

user.login();
user.logout();
user.listBlogs();

