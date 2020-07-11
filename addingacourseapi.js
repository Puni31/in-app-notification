const isinstructor = (req, res,next) => {
const isInstructor = req.course && req.auth && req.course.instructor._id == req.auth._id
if(!isInstructor){
return res.status('403').json({
error:"User is not authorized"
})
}
next()
}
const newLesson = async (req,res) =>
{
try{
let lesson = req.body.lesson
let result = await Course.findByIdAndUpdate(req.course._id,{$push:{lessons:updated:Date.now()},{new:true}).populate('instructor','_id name')
.exec()
res.json(result)
} catch(err){
return res.status(400).json({
error:errorHandler.getErrorMessage(err)
})
}
}
}