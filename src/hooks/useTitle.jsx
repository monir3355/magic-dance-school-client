import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Magic Dance School | ${title}`;
  }, [title]);
};
export default useTitle;
