import React from 'react'
import { CONTACT } from "../utils/index.utils"

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Get in Touch </h1>
        <div className="text-center tracking-tighter">
            <p className="my-4 ">{CONTACT.address}</p>
            <p className="my-4 ">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
            <p className="pt-5 font-semibold">&copy;2024, Bikram Rai</p>
        </div>
    </div>
  )
}
