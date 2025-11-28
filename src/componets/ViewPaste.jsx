// import React from "react";
// import toast from "react-hot-toast";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// const ViewPaste = () => {

//   const { id } = useParams()

//     const allPastes = useSelector((state) => state.pastes.pastes);


//     const pastes = allPastes.filter((p) => (p._ID === id))

//     console.log(pastes);
    
    

//   return (
//     <div>
//       <div>
//         <input
//           className="border-white"
//           type="text"
//           placeholder="Enter Tital Hare"
//           disabled
//           value={pastes[0]?.tital}
//           // onChange={(e) => setTital(e.target.value)}
//         />
//         {/* <button onClick={createPastes}>
//           {pasteID ? "Update Pastes" : "Create Pastes"}
//         </button> */}
//         <button
//           onClick={() => {
//             navigator.clipboard.writeText(pastes?.content),
//               toast.success("Copied");
//           }}
//         >
//           Copy
//         </button>
//       </div>
//       <div className="mt-8 background-black">
//         <textarea
//           className="rounded-2xl mt-4  min-w-[500px] p-4 min-h-[500px]"
//           value={pastes[0]?.content}
//           placeholder="Enter content hare"
//           disabled
//           // onChange={(e) => setvalue(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ViewPaste;


import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.pastes.pastes || []);
  const paste = allPastes.find((p) => p._ID === id);

  if (!paste) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded shadow p-6 text-center">
          <p className="mb-4 text-slate-700">Paste not found.</p>
          <Link to="/" className="text-sky-600 underline">
            Go back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between gap-4">
          <input
            className="flex-1 rounded-md border border-slate-200 p-2 bg-slate-50"
            type="text"
            disabled
            value={paste.tital || ""}
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste?.content || "");
                toast.success("Copied");
              }}
              className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700"
            >
              Copy
            </button>
            <Link to="/" className="px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center">
              Back
            </Link>
          </div>
        </div>

        <textarea
          className="mt-4 w-full rounded-lg border border-slate-200 p-4 min-h-[300px] resize-vertical bg-slate-50"
          value={paste.content}
          disabled
        />
      </div>
    </main>
  );
};

export default ViewPaste;
