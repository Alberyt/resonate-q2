"use client"

import Contact from "@/components/layout/contact";
import Contacts from "@/components/layout/contact-list";
import Favourites from "@/components/layout/favourite-list";
import Header from "@/components/ui/header";
import useContact from "@/hooks/useContact";

export default function Home() {
  const { contacts, contact, favourites } = useContact();
  return (
    <main className="h-screen w-full">
      <Header />
      <div className="flex">
        <section className="h-[calc(100vh-64px)] w-full md:w-[400px] md:p-6">
          <Contacts contacts={contacts}>
            <div className="block md:hidden bg-gray-300 rounded-3xl space-y-4">
              <Favourites favourites={favourites}/>
            </div>
          </Contacts>
        </section>
        <section className="hidden md:block w-[calc(100vw-400px)] h-full">
          <div className="bg-gray-300 my-6 mr-6 rounded-3xl p-6 space-y-4">
            <Favourites favourites={favourites}/>
          </div>
          {/* <Contact /> */}
        </section>
      </div>
    </main>
  );
}

// {/* Header */}
// {/* Contact List */}
//   {/* Utility Bar */}
//     {/* Search Bar */}
//     {/* Add Contact */}
//     {/* More Options  */}
//   {/* List */}
//     {/* Alphabet Border */}
      
//     {/* Contact */}
//       {/* Display Picture or Initials*/}
//       {/* Name */}
//       {/* * Clicked *  */}
//         {/* Mobile */}
//         {/* ------ */}
//         {/* Call */}
//           {/* Label */}
//         {/* Message */}
//           {/* Label */}
//         {/* Video */}
//           {/* Label */}
//         {/* More */}
// {/* Favorites  */}
//   {/* Favourites List */}
//     {/* Display Picture or Initials*/}
//     {/* Name */}
// {/* Contact Card */}
  