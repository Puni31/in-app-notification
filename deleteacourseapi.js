const remove = async (req,res) ->{
try{
let course = req.course
let deleteCourse = await course.remove()
res.json(deleteCourse)
}
catch(err){
return res.status(400).json({
error: errorHandler.getErrorMessage(err)
})
}
}