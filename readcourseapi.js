mern-classroom/server/routes/course.routes.js:

   router.route('/api/course/:courseId')
      .get(courseCtrl.read)
   router.param('courseId', courseCtrl.courseById)
   
mern-classroom/server/controllers/course.controller.js:

      const courseByID = async (req, res, next, id) => {
	  try {
	    let course = await Course.findById(id).populate('instructor', '_id name,)
		
       if(!course)
	     return res.status('400).json({
		   error: "Course not found"
		 })
		 req.course = course
		 next()
		 } catch (err) {
		   return res.status('400').json({
		      error: "Could not retrieve course"
		})
		}
		}

mern-classroom/server/controllers/course.controller.js:

    const read = (req,res) => {
	   req.course.image = undefined
	   return res.json(req.course)
	   }