import { create } from "zustand";

const useDateStore = create((set) => ({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: null, // 초기값 null

  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  setDay: (day) => set({ day }),
}));

export default useDateStore;
