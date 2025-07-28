import React, { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "דף לא נמצא";
  }, []);

  return <div>Page Not Found</div>;
}

export default NotFound;
