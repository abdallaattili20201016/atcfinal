import { useCallback, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/config";
import { toast } from "react-toastify";

const useFetch = (
  options = {
    endpoint: "",
    method: "GET",
    body: null,
    params: null,
    onFinish: () => {},
  },
  deps = []
) => {
  const { endpoint, method, body, params, onFinish } = options;
  const access_token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const request = useCallback(() => {
    setLoading(true);
    setData(null);
    setError(null);
    return axios
      .request({
        method,
        baseURL: API_URL,
        url: `${endpoint}${params ? params : ""}`,
        headers: {
          "Content-Type": "application/json",
          ...(access_token && {
            Authorization: `Bearer ${access_token}`,
          }),
        },
        ...(method === "POST" &&
          body && {
            data: body,
          }),
      })
      .then((response) => {
        console.log("response useFetch", response);
        setData(response?.data);

        return onFinish({
          data: response?.data?.data,
          status: response?.status,
          message: response?.data?.message,
        });
      })
      .catch((err) => {
        // toast.error("Error: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [method, endpoint, params, body]);

  return [{ data, error, loading }, request];
};

export default useFetch;
