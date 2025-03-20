export function formatDate(dateExeption) {
    const date = new Date(dateExeption);
    if (!(date instanceof Date) || isNaN(date)) return "תאריך לא תקין";
  
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  