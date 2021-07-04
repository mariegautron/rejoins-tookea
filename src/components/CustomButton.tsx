import { Button } from "@material-ui/core";
import React from "react";

export default function CustomButton({ children, ...props }: any) {
  return (
    <Button
      {...props}
      style={{
        borderRadius: 20,
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 15,
      }}
    >
      {children}
    </Button>
  );
}
