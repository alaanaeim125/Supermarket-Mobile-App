import React, {useState} from 'react';
import {ValidateInputs} from '../utils/ValidateInputs';
export function useInput(initialValue, rules) {
  const [input, setInputValue] = useState({
    value: initialValue || '',
    isValid: false,
    touched: false,
  });

  const updateInputValue = (inputValue) => {
    setInputValue({
      value: inputValue,
      touched: true,
      isValid: ValidateInputs(inputValue, rules),
    });
  };

  return [input, updateInputValue];
}
