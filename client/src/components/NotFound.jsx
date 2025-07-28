import React from "react";

function NotFound() {
  useEffect(() => {
    document.title = "דף לא נמצא";
  }, []);

  return <div>NotFound</div>;
}

export default NotFound;
