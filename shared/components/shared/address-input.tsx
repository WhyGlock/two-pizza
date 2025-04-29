'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="1bce01e779701b5d9cd281b9d548bcfad51a913b"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
