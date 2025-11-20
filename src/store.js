import { configureStore } from '@reduxjs/toolkit'
import pasteReduce from './redux/PasteSlice'

export const store = configureStore({
  reducer: {
    pastes : pasteReduce
  },
})