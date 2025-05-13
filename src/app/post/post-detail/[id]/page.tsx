"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function Post() {
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState<string>("");
  const handleClickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is a post page.</p>
      <input
        type="text"
        value={name}
        onChange={handleClickInput}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </Link>
    </div>
  );
}
