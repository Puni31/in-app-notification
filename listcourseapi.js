mern-classroom/server/routes/course.routes.js:

     router,route('/api/course/by/:userId')
	 .get(authCtrl.requireSignin,authCtrl.hasAuthorization,courseCtrl.listByInstructor)
	 
mern-classroom/server/controllers/course.controller.js:

     const listByInstructor = (req, res)=> {
	 Course.find({instructor: req.profile._id},(err, courses) => {
	 if(err){
	    return res.status(400).json({
		  error: errorHandler.getErrorMessage(err)
		  })
		  }
		  res.json(courses)
		  }).populate('instructor', '_id name')
		  }