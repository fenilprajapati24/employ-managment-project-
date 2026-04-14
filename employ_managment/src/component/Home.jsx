import { useRef } from "react";
import { useDispatch } from "react-redux";
import { data } from "react-router-dom";
import { jobactioins } from "../store/Jobslice";


const Home=()=>{


  const dispatch=useDispatch();

    const firstname=useRef();
    const lastname=useRef();
    const job_title=useRef();
    const job_desc=useRef();
    const job_role=useRef();

    const handlesubmit=(e)=>{

      e.preventDefault();

      const data={

        firstname:firstname.current.value,
        lastname:lastname.current.value,
        job_title:job_title.current.value,
        job_desc:job_desc.current.value,
        job_role:job_role.current.value,

          
      }
         console.log(data)
        dispatch(jobactioins.addjob(data));
        
      alert("form submited");

      firstname.current.value="";
      lastname.current.value="";
      job_title.current.value="";
      job_desc.current.value="";
      job_role.current.value="";

    }


  return (
          
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-gray-400">
  
  <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-lg">
    
    <h2 className="text-3xl font-bold text-center text-white mb-6">
      Job Application Form
    </h2>

    <div className="space-y-4">

      {/* First Name */}
      <div>
        <label className="block text-white mb-1">First Name</label>
        <input
          type="text"
          name="firstName"
          ref={firstname}
          placeholder="Enter first name"
          className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-white mb-1">Last Name</label>
        <input
          type="text"
          name="lastName"
          ref={lastname}
          placeholder="Enter last name"
          className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
      </div>

      {/* Job Title */}
      <div>
        <label className="block text-white mb-1">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          ref={job_title}
          placeholder="Enter job title"
          className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Job Role */}
      <div>
        <label className="block text-white mb-1">Job Role</label>
       <input
          type="text"
          name="jobrole"
          ref={job_role}
          placeholder="Enter job role"
          className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block text-white mb-1">Job Description</label>
        <textarea
          name="jobDescription"
          rows="4"
          ref={job_desc}
          placeholder="Enter job description"
          className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"   onClick={handlesubmit}
        className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
      >
        Submit
      </button>

    </div>
  </div>
</div>
  )
}

export default Home;