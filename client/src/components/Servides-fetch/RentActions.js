export const getArchiveRents = async (setArchive) => {
  try {
    const response = await fetch("http://localhost:3001/rentals/archive");
    const data = await response.json();
    setArchive(data.message);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getActiveRents = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/rentals/active`);
    const data = await response.json();
console.log("Active rents fetched:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const addRent = async (newRent) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/rentals/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRent),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const deleteRent = async (rentId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/rentals/delete/${rentId}`,
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

export const editRent = async (newRent, rentId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/rentals/update/${rentId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRent),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRcukRentals = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/rentals/rcuk-rentals`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}