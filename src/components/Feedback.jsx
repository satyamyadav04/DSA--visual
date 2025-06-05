// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const Feedback = () => {
//   const [feedback, setFeedback] = useState("");
//   const [gmail, setGmail] = useState("");

//   const handleGmailChange = (e) => {
//     setGmail(e.target.value);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedBack = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/feedback",
//         {
//           feedback,
//           email: gmail,
//         }
//       );

//       if (response.status === 201 || response.status === 200) {
//         alert("Feedback submitted successfully");
//         setFeedback("");
//         setGmail("");
//       } else {
//         alert("Failed to submit feedback");
//       }
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       alert("An error occurred while submitting feedback");
//     }
//   };

//   return (
//     <div className="w-full md:w-1/2 mt-7 md:mt-22">
//       <motion.div
//         initial={{ opacity: 0, y: 200 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{ duration: 0.7 }}
//         className="relative rounded-2xl shadow-lg border border-gray-200 p-6 bg-white"
//       >
//         <form
//           onSubmit={handleSubmitFeedBack}
//           className="flex flex-col gap-5 items-center w-full"
//         >
//           <textarea
//             name="email"
//             value={gmail}
//             onChange={handleGmailChange}
//             cols="20"
//             rows="3"
//             placeholder="Your Gmail"
//             className="w-full text-gray-500 p-4 outline-none shadow shadow-pink-800 rounded-md"
//             required
//           ></textarea>

//           <textarea
//             name="feedback"
//             value={feedback}
//             onChange={handleFeedbackChange}
//             cols="20"
//             rows="5"
//             placeholder="Your Feedback"
//             className="w-full text-gray-500 p-4 outline-none shadow shadow-pink-800 rounded-md"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className="cursor-pointer p-2 rounded-2xl text-white text-xl w-[50%] md:w-[30%] bg-pink-700 hover:bg-pink-600 shadow-amber-100 shadow"
//           >
//             Submit
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Feedback;



import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [gmail, setGmail] = useState("");

  const handleGmailChange = (e) => {
    setGmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedBack = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/feedback",
        {
          feedback,
          email: gmail,
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert("Feedback submitted successfully");
        setFeedback("");
        setGmail("");
      } else {
        alert("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback");
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8"
      >
        <h2 className="text-2xl font-semibold text-center text-pink-700 dark:text-pink-400 mb-6">
          Share Your Feedback
        </h2>
        <form
          onSubmit={handleSubmitFeedBack}
          className="flex flex-col gap-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Gmail</label>
            <textarea
              name="email"
              value={gmail}
              onChange={handleGmailChange}
              rows="2"
              placeholder="example@gmail.com"
              className="w-full text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm transition duration-200 resize-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Feedback</label>
            <textarea
              name="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              rows="5"
              placeholder="Write your feedback here..."
              className="w-full text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm transition duration-200 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-500 text-white text-lg font-medium py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            Submit Feedback
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Feedback;

