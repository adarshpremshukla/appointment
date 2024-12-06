// // AppointmentList.js

// import React, { useState } from "react";

// const AppointmentList = ({
//     appointments,
//     deleteAppointment,
//     editAppointment,
//     clearAppointments,
// }) => {
//     const [editedIndex, setEditedIndex] = useState(null);
//     const [editedName, setEditedName] = useState("");
//     const [editedDate, setEditedDate] = useState("");

//     const handleEdit = (index) => {
//         setEditedIndex(index);
//         setEditedName(appointments[index].name);
//         setEditedDate(appointments[index].date);
//     };

//     const handleSaveEdit = (index) => {
//         editAppointment(index, editedName, editedDate);
//         setEditedIndex(null);
//         setEditedName("");
//     };

//     const handleCancelEdit = () => {
//         setEditedIndex(null);
//         setEditedName("");
//     };

//     return (
//         <div className="container">
//             <h1>Appointment List</h1>
//             <table id="list">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Date</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {appointments.map((appointment, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>
//                                 {editedIndex === index ? (
//                                     <input
//                                         type="text"
//                                         value={editedName}
//                                         onChange={(e) =>
//                                             setEditedName(e.target.value)
//                                         }
//                                     />
//                                 ) : (
//                                     appointment.name
//                                 )}
//                             </td>
//                             <td>
//                                 {editedIndex === index ? (
//                                     <input
//                                         type="date"
//                                         value={editedDate}
//                                         onChange={(e) =>
//                                             setEditedDate(e.target.value)
//                                         }
//                                     />
//                                 ) : (
//                                     appointment.date
//                                 )}
//                             </td>
//                             <td>
//                                 {editedIndex === index ? (
//                                     <>
//                                         <button
//                                             onClick={() =>
//                                                 handleSaveEdit(index)
//                                             }
//                                         >
//                                             Save
//                                         </button>
//                                         <button onClick={handleCancelEdit}>
//                                             Cancel
//                                         </button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <button
//                                             onClick={() => handleEdit(index)}
//                                         >
//                                             Edit
//                                         </button>
//                                         <button
//                                             onClick={() =>
//                                                 deleteAppointment(index)
//                                             }
//                                         >
//                                             Delete
//                                         </button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={clearAppointments}>Clear All Appointments</button>
//         </div>
//     );
// };

// export default AppointmentList;

import React, { useState } from "react";

const AppointmentList = ({
  appointments,
  deleteAppointment,
  editAppointment,
  clearAppointments,
}) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedName(appointments[index].name);
    setEditedDate(appointments[index].date);
  };

  const handleSaveEdit = (index) => {
    editAppointment(index, editedName, editedDate);
    setEditedIndex(null);
    setEditedName("");
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedName("");
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Appointment List</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editedIndex === index ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    appointment.name
                  )}
                </td>
                <td>
                  {editedIndex === index ? (
                    <input
                      type="date"
                      className="form-control"
                      value={editedDate}
                      onChange={(e) => setEditedDate(e.target.value)}
                    />
                  ) : (
                    appointment.date
                  )}
                </td>
                <td>
                  {editedIndex === index ? (
                    <>
                      <button
                        className="btn-sm"
                        onClick={() => handleSaveEdit(index)}
                      >
                        Save
                      </button>
                      <button
                        className=" btn-sm ms-0 ms-sm-4"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn-sm"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-sm ms-0 ms-sm-4"
                        onClick={() => deleteAppointment(index)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end">
        <button onClick={clearAppointments}>
          Clear All Appointments
        </button>
      </div>
    </div>
  );
};

export default AppointmentList;
