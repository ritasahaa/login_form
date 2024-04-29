import React, { useState } from 'react'

const BasicForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Login</button>
      </form>

      <div>
        {
          allEntry.map((curElm) => {
            return (
              <div className='detail'>
                <div className="content">
                  <p>Email-{curElm.email}</p>
                  <p>password-{curElm.password}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default BasicForm