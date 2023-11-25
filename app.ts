enum Role{
    ADMIN,READ_ONLY,AUTHOR
}
const person ={
    age:20,
    name:'yuji',
    hobbies :['Sports','Gaming'],
    role : Role.ADMIN
}
if(person.role == Role.AUTHOR){
    console.log('is author')
}