"use client"

import { useState } from "react";

export default function Header() {
  const [username, setUsername] = useState<String>("")
  const [islLogged, setIsLogged] = useState<boolean>(false)

  const handleLoginButtonClick = () => {
    setUsername("MockUser")
    setIsLogged(true)
  }

  return (
    <div className="header">
      <div>
        Navigation
      </div>
      <div>
        Room Booking Service
      </div>
      {islLogged ? (
        <div>
          Hello {username}
        </div>
      ) : (
        <button onClick={handleLoginButtonClick}>
          Login
        </button>
      )}
    </div>
  );
}
