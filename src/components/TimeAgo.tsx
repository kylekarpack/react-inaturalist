import { FunctionComponent, useMemo } from "react";

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

const timeAgo = (timestamp: Date) => {
  let value;
  const diff = (new Date().getTime() - timestamp.getTime()) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    value = rtf.format(0 - years, "year");
  } else if (months > 0) {
    value = rtf.format(0 - months, "month");
  } else if (days > 0) {
    value = rtf.format(0 - days, "day");
  } else if (hours > 0) {
    value = rtf.format(0 - hours, "hour");
  } else if (minutes > 0) {
    value = rtf.format(0 - minutes, "minute");
  } else {
    value = rtf.format(0 - diff, "second");
  }
  return value;
};

export const TimeAgo: FunctionComponent<{ date: Date }> = ({ date }) => {
  const time = useMemo(() => timeAgo(new Date(date)), [date]);
  return <>{time}</>;
};
