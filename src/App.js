
import React from 'react'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    <Dashboard />
  )
}

export default App

// import { Field, Form, Formik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout } from "./store/user";

// function App() {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.user);
//   if (user) {
//     return (
//       <div>
//         Hi, {user.username}!
//         <button onClick={() => dispatch(logout())}>Logout</button>
//       </div>
//     );
//   }
//   return (
//     <div className="App">
//       <Formik
//         initialValues={{ username: "", password: "" }}
//         onSubmit={(values) => {
//           dispatch(login(values));
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="username" />
//             <Field type="password" name="password" />
//             <button type="submit" disabled={isSubmitting}>
//               Login
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default App;
