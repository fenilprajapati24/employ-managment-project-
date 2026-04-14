// import { useSelector } from "react-redux";

// const Show = () => {

//   const { joblist } = useSelector((store) => store.jobs);

//   console.log("data from show", joblist);

//   return (
//     <div className="p-6">
      
//       {joblist.length === 0 ? (
//         <h2 className="text-center text-xl">No Data Found</h2>
//       ) : (
//         joblist.map((job, index) => (
//           <div
//             key={index}
//             className="bg-gray-200 p-4 mb-3 rounded shadow"
//           >
//             <p>
//               <b>Name:</b> {job.firstName || job.firstname}{" "}
//               {job.lastName || job.lastname}
//             </p>
//             <p>
//               <b>Title:</b> {job.jobTitle || job.job_title}
//             </p>
//             <p>
//               <b>Role:</b> {job.jobRole || job.job_role}
//             </p>
//             <p>
//               <b>Description:</b> {job.jobDescription || job.job_desc}
//             </p>
//           </div>
//         ))
//       )}

//     </div>
//   );
// };

// export default Show;



import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { jobactioins } from "../store/Jobslice";

const Show = () => {

  const { joblist } = useSelector((store) => store.jobs);
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (index, job) => {
    setEditIndex(index);
    setEditData(job);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(
      jobactioins.updatejob({
        index: editIndex,
        updatedData: editData,
      })
    );

    setEditIndex(null);
  };

  return (
    <div className="p-6">

      {joblist.length === 0 ? (
        <h2 className="text-center text-xl">No Data Found</h2>
      ) : (
        joblist.map((job, index) => (

          <div key={index} className="bg-gray-200 p-4 mb-3 rounded shadow">

            {editIndex === index ? (
              <>
                {/* EDIT MODE */}
                <input
                  name="firstName"
                  value={editData.firstName || ""}
                  onChange={handleChange}
                  className="border p-1 mb-1 w-full"
                  placeholder="First Name"
                />

                <input
                  name="lastName"
                  value={editData.lastName || ""}
                  onChange={handleChange}
                  className="border p-1 mb-1 w-full"
                  placeholder="Last Name"
                />

                <input
                  name="jobTitle"
                  value={editData.jobTitle || ""}
                  onChange={handleChange}
                  className="border p-1 mb-1 w-full"
                  placeholder="Job Title"
                />

                <input
                  name="jobRole"
                  value={editData.jobRole || ""}
                  onChange={handleChange}
                  className="border p-1 mb-1 w-full"
                  placeholder="Job Role"
                />

                <textarea
                  name="jobDescription"
                  value={editData.jobDescription || ""}
                  onChange={handleChange}
                  className="border p-1 mb-1 w-full"
                  placeholder="Description"
                />

                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>

              </>
            ) : (
              <>
                {/* VIEW MODE */}
                <p><b>Name:</b> {job.firstName || job.firstname} {job.lastName || job.lastname}</p>
                <p><b>Title:</b> {job.jobTitle || job.job_title}</p>
                <p><b>Role:</b> {job.jobRole || job.job_role}</p>
                <p><b>Description:</b> {job.jobDescription || job.job_desc}</p>

                <button
                  onClick={() => handleEdit(index, job)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                >
                  Edit
                </button>
              </>
            )}

          </div>
        ))
      )}

    </div>
  );
};

export default Show;