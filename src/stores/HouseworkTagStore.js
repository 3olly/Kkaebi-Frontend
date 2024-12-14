import { create } from "zustand";

const houseworkTag = {
  1: "빨래",
  2: "설거지",
  3: "청소",
  4: "생필품 구매",
  5: "쓰레기 버리기",
  6: "분리수거",
  7: "요리",
  8: "식물 관리",
  9: "반려동물 관리",
};

const useHouseworkTagStore = create((set) => ({
  houseworkTag,
}));

export default useHouseworkTagStore;
