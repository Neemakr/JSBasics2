var a1=[
    {
        name: 'Neema',
        id: 10,
        place: 'Chickballapur'
    },
    {
        name: 'Cindrella',
        id: 20,
        place: 'Bengaluru'
    }
]
console.log(a1)

//length- is used to find out how many elements or objects are present in an array
console.log(a1.length)

//Push- It is used to add the elements at the end of the array
a1.push({
    name: 'Barbie',
    id: 30,
    place: 'Hyd'
})
console.log(a1)

//For a simple array-
a2=['Mon','Tue','Wed']
a2.push('Thur')
console.log(a2)

//Unshift is same as Push but adds the element at the beginning of the array
a2.unshift('Sun')
console.log(a2)

//pop is used to remove an element at the last index whereas shift at the beginning
a2.pop()
console.log(a2)