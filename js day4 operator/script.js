let obj = {
    name: "hello",
    age: 23,
    addresses : {
        city: "chennai",
        pincode: 600000
    }
}


let obj2 = JSON.parse(JSON.stringify(obj))