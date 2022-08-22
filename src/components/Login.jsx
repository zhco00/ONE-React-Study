import { useState } from "react";
export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>ID : </label>
        <input type="text" />
      </div>
      <div>
        <label>PW : </label>
        <input type="password" />
      </div>
      <div>
        <button type="button">Login</button>
      </div>
    </div>
  );
}
