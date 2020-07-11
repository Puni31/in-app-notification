mern-classroom/client/course/api-course.js

   const listByInstructor = async (params, credentials, signal)
     try{
	   let response = await fetch('api/courses/api/courses/by/'+params.userId, {
	   method: 'GET',
	   signal: signal,
	   headers: {
	     'Accept': 'application/json',
		 'Authorization': 'Bearer ' + credentials.t
		 }
		 })
		 return response.json()
		 }catch(err) {
		  console.log(err)
		  }
}