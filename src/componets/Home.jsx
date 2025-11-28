// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { addToPastes, updateToPastes } from "../redux/PasteSlice";

// const Home = () => {
//   const [Tital, setTital] = useState("");
//   const [value, setvalue] = useState("");

//   const [searchParams, setsearchParams] = useSearchParams();

//   const allPastes = useSelector((state) => state.pastes.pastes);
//   console.log(allPastes);
  

//   const pasteID = searchParams.get("pasteid");

//   const dispatch = useDispatch();

//   function createPastes() {
//     const paste = {
//       tital: Tital,
//       content: value,
//       _ID: pasteID || Date.now().toString(11),
//       createAt: new Date().toISOString(),
//     };
//     if (pasteID) {
//       // Update
//       dispatch(updateToPastes(paste));
//     } else {
//       // Create
//       dispatch(addToPastes(paste));
//     }
//     setTital("");
//     setvalue("");
//     setsearchParams({});
//   }

//   useEffect(() => {
//     if (pasteID) {
//       let paste = allPastes.find((p) => p._id == pasteID);
//       console.log(paste);
//       setTital(paste.tital);
//       setvalue(paste.content);
//     }
//   }, [pasteID]);

//   return (
//     <div>
//       <div>
//         <input
//           className="border-white"
//           type="text"
//           placeholder="Enter Tital Hare"
//           value={Tital}
//           onChange={(e) => setTital(e.target.value)}
//         />
//         <button onClick={createPastes}>
//           {pasteID ? "Update Pastes" : "Create Pastes"}
//         </button>
//       </div>
//       <div className="mt-8 background-black">
//         <textarea
//           className="rounded-2xl mt-4  min-w-[500px] p-4 min-h-[500px]"
//           value={value}
//           placeholder="Enter content hare"
//           onChange={(e) => setvalue(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteID = searchParams.get("pasteid");

  const allPastes = useSelector((state) => state.pastes.pastes || []);
  const dispatch = useDispatch();

  function createPastes() {
    const paste = {
      tital: title,
      content: value,
      _ID: pasteID || Date.now().toString(),
      createAt: new Date().toISOString(),
    };
    if (pasteID) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  useEffect(() => {
    if (pasteID) {
      const paste = allPastes.find((p) => p._ID === pasteID);
      if (paste) {
        setTitle(paste.tital || "");
        setValue(paste.content || "");
      } else {
        setTitle("");
        setValue("");
      }
    }
  }, [pasteID, allPastes]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          {pasteID ? "Edit Paste" : "Create New Paste"}
        </h2>

        <label className="block mb-3">
          <span className="text-sm font-medium text-slate-700">Title</span>
          <input
            className="mt-1 block w-full rounded-md border border-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium text-slate-700">Content</span>
          <textarea
            className="mt-1 block w-full rounded-lg border border-slate-200 p-4 min-h-[240px] resize-vertical focus:outline-none focus:ring-2 focus:ring-sky-300"
            value={value}
            placeholder="Enter paste content..."
            onChange={(e) => setValue(e.target.value)}
          />
        </label>

        <div className="flex gap-3">
          <button
            onClick={createPastes}
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
          >
            {pasteID ? "Update Paste" : "Create Paste"}
          </button>

          <button
            onClick={() => {
              setTitle("");
              setValue("");
              setSearchParams({});
            }}
            className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-md hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
