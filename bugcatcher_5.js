/**
With user preferences coming from the database, we need the list to be dynamic. 
This functionality is supposed to support adding preferences via code. 
It also includes some test logging. It should print:

Data: private
Username: John Doe
Checking Username: {title: "Username", value: "John Doe"}
**/

var preferences = [];

var addPreference = function(title, value){
  preferences = [];
  preferences.push({
    title: title,
    value: value
  });
}

var getPreferenceByTitle = function(title){
  for(var pref in preferences){
    if(pref.title == title){
      return pref;
    }
  };
}


//add the preferences
addPreference('Data', 'private');
addPreference('Username', 'John Doe');

//print out the preferences
var i = 0;
while( i < preferences.length){
  console.log(preferences[i].title + ': ' + preferences[i].value);
  i++;
}


//check that the 'Username' preference is set
console.log('Checking Username: ' + getPreferenceByTitle('Username'));