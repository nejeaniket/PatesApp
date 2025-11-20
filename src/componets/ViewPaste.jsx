import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

  const { id } = useParams()

    const allPastes = useSelector((state) => state.pastes.pastes);


    const pastes = allPastes.filter((p) => (p._ID === id))

    console.log(pastes);
    
    

  return (
    <div>
      <div>
        <input
          className="border-white"
          type="text"
          placeholder="Enter Tital Hare"
          disabled
          value={pastes[0]?.tital}
          // onChange={(e) => setTital(e.target.value)}
        />
        {/* <button onClick={createPastes}>
          {pasteID ? "Update Pastes" : "Create Pastes"}
        </button> */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(pastes?.content),
              toast.success("Copied");
          }}
        >
          Copy
        </button>
      </div>
      <div className="mt-8 background-black">
        <textarea
          className="rounded-2xl mt-4  min-w-[500px] p-4 min-h-[500px]"
          value={pastes[0]?.content}
          placeholder="Enter content hare"
          disabled
          // onChange={(e) => setvalue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
