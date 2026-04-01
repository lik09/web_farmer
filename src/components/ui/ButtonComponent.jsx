import { Button } from 'antd';
import React from 'react'
const ButtonComponent = ({ text = "Defult text", onClick }) => {
  return (
    <Button
      type="primary"
      size="large"
      onClick={onClick}
      style={{
        backgroundColor: "#174143",
        fontSize: 14,
        fontWeight: "normal",
        padding:"0px 40px"
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;