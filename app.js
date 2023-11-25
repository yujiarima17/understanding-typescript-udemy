var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    age: 20,
    name: 'yuji',
    hobbies: ['Sports', 'Gaming'],
    role: Role.ADMIN
};
if (person.role == Role.AUTHOR) {
    console.log('is author');
}
