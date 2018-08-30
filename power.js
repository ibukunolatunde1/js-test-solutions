let power = (base, exponent) => {
    if (exponent == 0)
      return 1;
    if (base == 0)
      return 0;
    else
      return base * power(base, exponent - 1);
  }