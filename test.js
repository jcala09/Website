//alert('How are you doing today');
//arrays
//let arrays=['Jerome', 'Gabriel'];
//console.log(arrays[1]);

// you can make an array of objects <33
const object31 = [
    {title: 'huh', likes: 12},
    {title: 'bruh', likes:69420}
]
console.log(object31);
const ul= document.querySelector('.names');
const names= ['George', 'Elvis', 'Nikolas', 'Bellabean'];
let html = '';
names.forEach(function(dogs)
{
// create html
 html += '<li style="color: brown">' + dogs + '</li>';
});
console.log(html);
ul.innerHTML= html;

let user= {
    name: 'Jerome',
    age: 20,
    email: 'b.cala@ttu.edu',
    location: 'Lubbock Texas',
    blogs: ['why is Jerome so cute', 'How did he get so smart'],
    login: function(){
        console.log('The user has logged in');
    },
    logout: function(){
        console.log('The user has logged out');
    },
    logBlogs: function(){
        console.log('Following user has these blogs:');
        this.blogs.forEach(blog=> {console.log(blog);})
    }
}

user.logBlogs();
console.log(user.name); //output
console.log(user.age); // dot notation
console.log(user['email']); //square bracket notation
//methods
