import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createPersonSlice, PersonSlice } from "./person.slice.ts";
import { createGuestSlice, GuestSlice } from "./guest.slice.ts";
import { createDateSlice, DateSlice } from "./date.slice.ts";
import {
  ConfirmationSlice,
  createConfirmationSlice,
} from "./confirmation.slice.ts";

type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
    ...createDateSlice(...a),
    ...createConfirmationSlice(...a),
  })),
);
