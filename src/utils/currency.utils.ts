export const formatPrice = (price: number = 0, currency: string = 'USD'): string => {
  const options = {
    style: 'currency',
    currency,
  };

  return new Intl.NumberFormat('en-US', options).format(price / 100);
};
