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

export const getAccessNumbers = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/access-numbers`
    );
    const data = await response.json();
    return {
      success: data.success,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error fetching access numbers (Client side)",
    };
  }
};
