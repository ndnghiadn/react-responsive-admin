import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";

function InputFormPassword() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowpassWord = () => {
      setShowPassword((pre) => !pre);
    };
  return (
    <>
    <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                          <div
                          className="input-group-text"
                          data-password="false"
                          onClick={handleShowpassWord}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </div>
                        </div>
    </>
  );
}

export default InputFormPassword;
