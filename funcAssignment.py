# Generator Function

function* GenerateId(){
    let id = 1

    while(true) {
        yield id
        id++
    }
}

const generator_obj = GenerateId();

console.log(generator_obj.next())
console.log(generator_obj.next())
console.log(generator_obj.next())
console.log(generator_obj.next())
console.log(generator_obj.next())
console.log(generator_obj.next())

# First Class Function

const me = function(){
    console.log("me called")
  }
  
  me()
