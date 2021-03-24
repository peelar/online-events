import fetcher from "lib/fetcher";
import React from "react";
import useSWR from "swr";
import { Box, CircularProgress } from "ui-lib";

type GoogleCalendarResponse = any;

const useGoogleCalendar = (endpoint: string) => {
  const { data, error } = useSWR<GoogleCalendarResponse>(endpoint, () =>
    fetcher({
      method: "GET",
      url: endpoint,
      baseURL: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API,
      withCredentials: true,
    })
  );

  return { data, error };
};

const Calendar: React.FC = () => {
  const { data, error } = useGoogleCalendar("/users/me/calendarList");
  console.log(data);
  console.log(error);

  if (error) return <Box>Error</Box>;
  if (!data)
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  return <Box>hello {data.name}!</Box>;
};

export default Calendar;
