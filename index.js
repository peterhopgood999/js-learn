// Import stylesheets
import './style.css';

var base = {
  name: 'Peter',
  displayName: function(){
    console.log(this.name);
  }
}

var child = {
  nickName: 'Hoppy',
  __proto__: base
}

var baby = {
  sound: 'Gaga',
  __proto__: child
}

console.log(child.nickName);
console.log(child.name);
console.log(baby.name);
console.log(baby.nickName);
console.log(baby.sound);