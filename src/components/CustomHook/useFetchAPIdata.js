import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchAPIdata = (url) => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(url);
      const items = await response.data.data.product;
      console.log(items);
      if (items) {
        setData(items);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return data;
};

export default useFetchAPIdata;
