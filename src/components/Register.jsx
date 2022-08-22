import { useState } from "react";
export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>ID : </label>
        <input type="text" required />
      </div>
      <div>
        <label>PW : </label>
        <input type="password" />
      </div>
      <div>
        <label>PWC : </label>
        <input type="password" />
      </div>
      <div>
        <label>NAME : </label>
        <input type="text" />
      </div>
      <div>
        <button>Register</button>
      </div>
    </div>
  );
}
