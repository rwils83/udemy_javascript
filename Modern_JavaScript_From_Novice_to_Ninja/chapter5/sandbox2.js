let user = {
	name: 'Crystal',
	age: 30,
	email: 'crystal@example.net',
	location: 'berlin',
	blogs: ['Make your own damn sandwhich', 'User not in sudoers file']
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
