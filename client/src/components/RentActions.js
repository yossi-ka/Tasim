export const deleteRent = async (rentId) => {
  try {
    const response = await fetch(`http://localhost:3001/rentals/delete/${rentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data.message);
    
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editRent = async (rentId) => {
  try {
    const response = await fetch(`http://localhost:3001/rentals/${rentId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};