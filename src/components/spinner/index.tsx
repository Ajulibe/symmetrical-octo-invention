import React from "react";
import { LoadingSpinner } from "./styles";

interface IProps {
  name?: string;
}

export const Spinner: React.FC<IProps> = () => {
  return (
    <LoadingSpinner>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingSpinner>
  );
};
