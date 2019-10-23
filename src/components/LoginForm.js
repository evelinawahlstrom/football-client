// TODO
import React from "react";

export default props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Email</label>
      <input
        name="email"
        value={props.values.email}
        onChange={props.onChange}
      />
      <label>Password</label>
      <input
        name="password"
        value={props.values.password}
        type="password"
        onChange={props.onChange}
      />
      <input type="submit" />
    </form>
  );
};
