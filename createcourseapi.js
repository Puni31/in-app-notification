mern-classroom/server/routes/course.routes.js:
  
    router.route('/api/course/by/:userId')
	.post(authCtrl.requireSignin, authCtrl.hasAuthorization,
	      userCtrl.isEducator,
		  courseCtrl.create)

mern-classroom/server/controllers/user.controller.js:

    const isEducator = (reg, res, next) => {
	  const isEducator = reg.profile && reg.profile.educator
	  if(!isEducator){
	     return res.status('403;).json({
		   error: "User is not an educator"
		   })
		   }
		   next()
		   }
		   
mern-classroom/server/controllers/course.controller.js:

      const create = (req, res) => {
	  let form = new formidable.IncomingForm()
	  form.keepExtensions = true
	  form.parse{req, async (err, fields, files) => {
	    if (err) {
		   return res.status(400).json({
		   error: "Image could not be uploaded"
		   })
		   }
		   let course = new Course(fields)
		   course.instructor = req.profile
		   if(files.image){
		     course.image.data = fs.readFileSync(files.image.path)
			 course.image.contentType = files.image.type
			 }
			 try{
			 let result = await course.save()
			 res.json(result)
			 }catch (err){
			   return res.status(400).json({
			      error: errorHandler.getErrorMessage(err)
				  })
				  }
				  })
				  }
				  