export function formatDate(dateObject: Date, style: 'long' | 'short') {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: style,
  };

  const dateString = dateObject.toLocaleDateString('en-US', options);

  return dateString;
}
