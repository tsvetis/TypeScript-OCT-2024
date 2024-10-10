const getParamNumber = (param) => {
    return `Your parameter is of type ${typeof param}!`;
};
const getParamString = (param) => {
    return `Your parameter is of type ${typeof param}!`;
};
const getParamObj = (param) => {
    return `Your parameter is of type ${typeof param}!`;
};
function getFullNameFromAnyObject(obj) {
    return `${obj.fName} ${obj.lName}`;
}
const fullName = getFullNameFromAnyObject({
    a: 213,
    pesho: "Kiro",
    fName: "Pesho",
    lName: "Stoyanov",
});
console.log(fullName);
