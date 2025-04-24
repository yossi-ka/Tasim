export const deleteAccessNumber = async (accNumId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/rentals/delete/${accNumId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data.message);
  
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const editAccessNumber = async (newAccNum, accNumId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/rentals/update/${accNumId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newAccNum),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };