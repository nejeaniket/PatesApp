import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";

const Home = () => {
  const [Tital, setTital] = useState("");
  const [value, setvalue] = useState("");

  const [searchParams, setsearchParams] = useSearchParams();

  const allPastes = useSelector((state) => state.pastes.pastes);
  console.log(allPastes);
  

  const pasteID = searchParams.get("pasteid");

  const dispatch = useDispatch();

  function createPastes() {
    const paste = {
      tital: Tital,
      content: value,
      _ID: pasteID || Date.now().toString(11),
      createAt: new Date().toISOString(),
    };
    if (pasteID) {
      // Update
      dispatch(updateToPastes(paste));
    } else {
      // Create
      dispatch(addToPastes(paste));
    }
    setTital("");
    setvalue("");
    setsearchParams({});
  }

  useEffect(() => {
    if (pasteID) {
      let paste = allPastes.find((p) => p._id == pasteID);
      console.log(paste);
      setTital(paste.tital);
      setvalue(paste.content);
    }
  }, [pasteID]);

  return (
    <div>
      <div>
        <input
          className="border-white"
          type="text"
          placeholder="Enter Tital Hare"
          value={Tital}
          onChange={(e) => setTital(e.target.value)}
        />
        <button onClick={createPastes}>
          {pasteID ? "Update Pastes" : "Create Pastes"}
        </button>
      </div>
      <div className="mt-8 background-black">
        <textarea
          className="rounded-2xl mt-4  min-w-[500px] p-4 min-h-[500px]"
          value={value}
          placeholder="Enter content hare"
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
