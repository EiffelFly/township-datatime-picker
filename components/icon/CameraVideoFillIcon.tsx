import * as React from "react";

interface Props {
  className: string;
}

export const CameraVideoFillIcon: React.FC<Props> = ({ className }) => {
  const iconStyle = `fill-current ${className}` 
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={ iconStyle }
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
    </svg>
  )
};