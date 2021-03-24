import { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from "./axios";

const fetcher = <T>(config: AxiosRequestConfig): AxiosPromise<T> =>
  axios({ ...config });

export default fetcher;
