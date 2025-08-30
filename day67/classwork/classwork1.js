function userOperations() {
    let answer = confirm("do u learn math?")
    let answer1 = confirm("do live in tbilisi")

    console.log(answer && answer1)
    console.log(answer || answer1)

}


userOperations()