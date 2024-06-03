import SvgIcon from '@mui/joy/SvgIcon';
import React from 'react';

export default function SpeakerNotesIcon(props) {
  return (
    <SvgIcon {...props} style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
      >
        <rect x="0" y="0" width="48" height="48" fill="none" stroke="none" />
        <path
          fill="none"
          stroke="var(--joy-palette-text-icon)" 
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M32.755 34.842H8.167a2.795 2.795 0 0 1-2.794-2.795V8.294A2.794 2.794 0 0 1 8.167 5.5h14.364Z"
        />
        <path
          fill="none"
          stroke="var(--joy-palette-text-icon)" 
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M25.2 13.159h14.633a2.795 2.795 0 0 1 2.794 2.794v23.753a2.794 2.794 0 0 1-2.794 2.794H25.469L22.8 34.841m9.955.001L25.469 42.5m-9.425-31.43h0a3.96 3.96 0 0 1 3.96 3.96v4.896a3.96 3.96 0 0 1-3.96 3.96h0a3.96 3.96 0 0 1-3.96-3.96h0v-4.895a3.96 3.96 0 0 1 3.96-3.96Z"
        />
        <path
          fill="none"
          stroke="var(--joy-palette-text-icon)" 
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.402 21.105a6.764 6.764 0 0 0 13.285 0m-6.643 5.484v3.336m11.925-8.82h11.25m-7.835 9.799h7.835m-9.488-4.899h9.488"
        />
      </svg>
    </SvgIcon>
  );
}
