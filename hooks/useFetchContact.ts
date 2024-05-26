"use client"

import { create } from "zustand";

import { IContact } from "@/models";

export interface ContactView {
  contact: IContact | null;
  loading: boolean;
  handleContact: (id: number) => void;
  removeContact: () => void;
}

const useFetchContact = create<ContactView>()((set, get) => ({
  contact: null,
  loading: false,
  handleContact: (id: number) => {
    set({ loading: true});
    fetch(`https://my-json-server.typicode.com/alberyt/resonate-q2-server/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        set({ contact: data });
      })
    set({ loading: false });
  },
  removeContact: () => {
    set({ contact: null })
  }
}))

export default useFetchContact
