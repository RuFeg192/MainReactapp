import './button.css'
const Button = ({ onClick, children }) => (
    <button onClick={onClick} className='button'>{children}</button>
);
export default Button;

import React, { useEffect, useState } from "react";
import Button from "../common/button/button";