let ruleValidationMapper = {
  isPhone: ValidatePhone,
  isMinChars: isMinCharacters,
};

function ValidatePhone(inputValue) {
  if (inputValue.length !== 11) {
    return false;
  }

  return /^[0-9]+$/.test(inputValue);
}

function isMinCharacters(inputValue, maxLength) {
  if (inputValue.length !== maxLength) {
    return;
  }
  return /^[0-9]+$/.test(inputValue);
}

export function ValidateInputs(inputValue, rules) {
  let isValid = true;

  for (let rule of rules) {
    isValid =
      isValid && ruleValidationMapper[rule.key](inputValue, rule.minChars);
  }
  return isValid;
}
