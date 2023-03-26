const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
]

let c=users.map(function(blue){
	return(blue.first_name + " lives in " + blue.location);
})
console.log(c);
