export const fetchIlNumbers = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/il-numbers`
    );
    const data = await response.json();
    return { success: true, data: data || [] };
  } catch (error) {
    return { success: false, message: "Error fetching IL numbers" };
  }
};
