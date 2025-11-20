import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToPastes, updateToPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.pastes.pastes);
  console.log(pastes);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const filterdata = pastes.filter((paste) =>
    paste?.tital?.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(pastesID) {
    dispatch(removeToPastes(pastesID))
  }

  function EditPage(pasteID) {
    dispatch(updateToPastes(pasteID))
  }

  

  return (
    <div>
      <input
        className="bg-white text-black"
        type="search"
        placeholder="Search hare"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filterdata.map((item) => {
          return(
          <div className="border" key={item._ID}>
            <div>
              Tital : {item.tital}
            </div>
            <div>
              Content : {item.content != "" ? item.content : "Content Not Found"}
            </div>
            <div className="g-4">
              <button>
                <NavLink to={`/?pasteid=${item._ID}`}>
                  Edit
                </NavLink>
              </button>
              <button >
                <NavLink to={`/pastes/${item?._ID}`}>
                  View
                </NavLink>
              </button>
              <button onClick={() => handleDelete(item._ID)}>Delete</button>
              <button onClick={() => {navigator.clipboard.writeText(item?.content), toast.success("Copied")}}>Copy</button>
              <button>Share</button>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Pastes;
