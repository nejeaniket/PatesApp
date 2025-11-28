// import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// const initialState = {
//   pastes: localStorage.getItem("pastes")
//     ? JSON.parse(localStorage.getItem("pastes"))
//     : [],
// };

// export const pasteSlice = createSlice({
//   name: "pastes",
//   initialState,
//   reducers: {
//     addToPastes: (state, action) => {
//       const paste = action.payload;
//       state.pastes.push(paste);
//       localStorage.setItem("pastes", JSON.stringify(state.pastes));
//       toast.success("Pastes Created");
//     },
//     updateToPastes: (state, action) => {
//       const paste = action.payload;
//       const index = state.pastes.findIndex((item) => item._id === paste._id);
//       if (index >= 0) {
//         state.pastes[index] = paste;
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
//         toast.success("Paste Updated");
//       }
//     },
//     resetAllPastes: (state, action) => {
//       state.pastes = [];
//       localStorage.removeItem("pastes");
//     },
//     removeToPastes: (state, action) => {
//       const pasteID = action.payload;
//       const index = state.pastes.findIndex((item) => item._id === pasteID._id);
//       if (index >= 0) {
//         state.pastes.splice(index, 1);
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
//         toast.success("Paste Deleted");
//       }
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addToPastes, updateToPastes, resetAllPastes, removeToPastes } =
//   pasteSlice.actions;

// export default pasteSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created");
    },

    // paste payload = whole paste object with _ID
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._ID === paste._ID);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated");
      }
    },

    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },

    // payload = string ID ( _ID )
    removeToPastes: (state, action) => {
      const pasteID = action.payload;
      const index = state.pastes.findIndex((item) => item._ID === pasteID);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Deleted");
      }
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeToPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
