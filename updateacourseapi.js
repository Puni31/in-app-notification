router.route('/api/courses/:courseid')
.put(authCrtl.requireSignin, courseCtrl.isInstructor,courseCtrl.update)

const update = (reg,res) =>{
let form = new formidable.IncomingForm()
form.parse(reg,async(err,fields,files) => {
if(err) {
return res.status(400).json({
error:"Photo Could not be uploaded"
})
}
let course = req.course
course = extend(course,fields)
if(fields.lessons){
course.lessons = JSON.parse(fields.lessons)
}
course.updated = Date.now()
if(files.image)
{
course.image.data = fs.readFileSync(files.image.path)
course.image.contentType = files.image.type
}
try{
await course.save()
res.join(course)
} catch(err){
return res.status(400).json({
error: errorHandler.getErrorMesssage(err)
})
}
})
}

