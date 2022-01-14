module.exports = (date) => {
    var today = new Date();
    const dateArr = date.split("/");
    const dateOfBirth = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

    var age = today.getFullYear() - dateOfBirth.getFullYear();
    var m = today.getMonth() - dateOfBirth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    console.log(age)
    return age;
}