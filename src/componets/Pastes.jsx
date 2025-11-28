  // import React, {  useState } from "react";
  // import { useDispatch, useSelector } from "react-redux";
  // import { removeToPastes, updateToPastes } from "../redux/PasteSlice";
  // import toast from "react-hot-toast";
  // import { Link, NavLink } from "react-router-dom";

  // const Pastes = () => {
  //   const pastes = useSelector((state) => state.pastes.pastes);
  //   console.log(pastes);

  //   const [search, setSearch] = useState("");

  //   const dispatch = useDispatch();

  //   const filterdata = pastes.filter((paste) =>
  //     paste?.tital?.toLowerCase().includes(search.toLowerCase())
  //   );

  //   function handleDelete(pastesID) {
  //     dispatch(removeToPastes(pastesID))
  //   }

  //   function EditPage(pasteID) {
  //     dispatch(updateToPastes(pasteID))
  //   }

    

  //   return (
  //     <div>
  //       <input
  //         className="bg-white text-black"
  //         type="search"
  //         placeholder="Search hare"
  //         value={search}
  //         onChange={(e) => setSearch(e.target.value)}
  //       />
  //       <div>
  //         {filterdata.map((item) => {
  //           return(
  //           <div className="border" key={item._ID}>
  //             <div>
  //               Tital : {item.tital}
  //             </div>
  //             <div>
  //               Content : {item.content != "" ? item.content : "Content Not Found"}
  //             </div>
  //             <div className="g-4">
  //               <button onClick={() => EditPage(item._ID)}>
  //                 <NavLink to={`/pastes/${item._ID}`}>
  //                   Edit
  //                 </NavLink>
  //               </button>
  //               <button >
  //                 <NavLink to={`/pastes/${item?._ID}`}>
  //                   View
  //                 </NavLink>
  //               </button>
  //               <button onClick={() => handleDelete(item._ID)}>Delete</button>
  //               <button onClick={() => {navigator.clipboard.writeText(item?.content), toast.success("Copied")}}>Copy</button>
  //               <button>Share</button>
  //             </div>
  //           </div>)
  //         })}
  //       </div>
  //     </div>
  //   );
  // };

  // export default Pastes;


  import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.pastes.pastes || []);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const filterdata = pastes.filter((paste) =>
    (paste?.tital || "").toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(pasteID) {
    dispatch(removeToPastes(pasteID));
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-6 flex items-center justify-between">
        <input
          className="w-full max-w-sm rounded-md border border-slate-200 p-2 focus:ring-2 focus:ring-sky-300"
          type="search"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="grid gap-4">
        {filterdata.length === 0 ? (
          <div className="text-center text-slate-500 py-10 bg-white rounded shadow">
            No pastes found.
          </div>
        ) : (
          filterdata.map((item) => (
            <article
              key={item._ID}
              className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.tital || "Untitled"}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {item.content || "Content Not Found"}
                </p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-end">
                <div className="flex gap-2">
                  <NavLink to={`/?pasteid=${item._ID}`}>
                    <button className="px-3 py-1 rounded-md border text-sky-700 border-sky-700 hover:bg-sky-50">
                      Edit
                    </button>
                  </NavLink>

                  <NavLink to={`/pastes/${item._ID}`}>
                    <button className="px-3 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
                      View
                    </button>
                  </NavLink>

                  <button
                    onClick={() => handleDelete(item._ID)}
                    className="px-3 py-1 rounded-md border border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item?.content || "");
                      toast.success("Copied");
                    }}
                    className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200"
                  >
                    Copy
                  </button>

                  <button className="px-3 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
                    Share
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
};

export default Pastes;

