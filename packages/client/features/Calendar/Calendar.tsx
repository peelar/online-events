import fetcher from "lib/fetcher";
import React from "react";
import useSWR from "swr";
import Event from "templates/Event/Event";
import { Box, Fade, SimpleGrid } from "ui-lib";

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

  return (
    <Box py={4}>
      {error && <Box>Error</Box>}
      <Fade in={Boolean(data)}>
        <SimpleGrid minChildWidth="150px" spacing={4}>
          {data?.data?.items?.splice(5, 5).map((item, index) => {
            const date = new Date(Date.parse(item.start.dateTime));
            const textDate = `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`;

            return (
              <Event
                key={`event-${index}`}
                heading={textDate}
                subheading={item.summary}
              />
            );
          })}
        </SimpleGrid>
      </Fade>
    </Box>
  );
};

export default Calendar;
