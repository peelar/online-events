import fetcher from "lib/fetcher";
import React from "react";
import useSWR from "swr";
import { Box, CircularProgress, Grid, Text } from "ui-lib";

type GoogleCalendarResponse = any;

const useGoogleCalendar = (endpoint: string) => {
  const { data, error } = useSWR<GoogleCalendarResponse>(endpoint, () =>
    fetcher({
      method: "GET",
      url: endpoint,
      baseURL: "/api",
      withCredentials: true,
    })
  );

  return { data, error };
};

const Calendar: React.FC = () => {
  const { data, error } = useGoogleCalendar("/calendar");

  if (error) return <Box>Error</Box>;
  if (!data)
    return (
      <Box>
        <CircularProgress />
      </Box>
    );

  return (
    <Box py={4}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {data?.data?.items?.splice(5, 5).map((item, index) => {
          const date = new Date(Date.parse(item.start.dateTime));
          const textDate = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`;

          return (
            <Box
              p={2}
              borderRadius="lg"
              borderWidth="1px"
              color="gray.500"
              fontSize="md"
              key={`event-${index}`}
            >
              <Text color="black">{textDate}</Text>
              <Text>{item.summary}</Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Calendar;
