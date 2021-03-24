import fetcher from "lib/fetcher";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

const getCalendar = (token: string) =>
  fetcher({
    method: "GET",
    url: "/calendars/adrianpilarczyk314@gmail.com/events",
    baseURL: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      timeMin: "2021-01-01T10:00:00-07:00",
    },
  });

export default async (req, res) => {
  try {
    const token = await getToken({ req, secret, encryption: true });
    const accessToken = token.accessToken as string;
    const response = await getCalendar(accessToken);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500);
  }
};
