export function generatePaymentReference(length = 20) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let reference = 'R'; // Start with 'R' as per your example
  for (let i = 0; i < length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    reference += characters[randomIndex];
  }
  return reference;
}

export const openSmallTab = (link : string , refetch: () => void) => {
  const url = link;
  const width = 400;
  const height = 500;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  const newWindow =  window.open(
    url,
    '_blank',
    `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars`,
  );
  if (newWindow) {
    const interval = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(interval);
        refetch()
        window.location.reload()
      }
    }, 500);
  } else {
    console.error("Failed to open popup window.");
  }
};
