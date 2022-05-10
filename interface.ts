// interfaces are used to structure modules 

interface chocarate {
    name:string,
    expirlyDate:Date
}

// we can extend the chocrate interface to a pecific chocrate

interface vanillaChocrate extends chocarate{
    ingrdient:string
}