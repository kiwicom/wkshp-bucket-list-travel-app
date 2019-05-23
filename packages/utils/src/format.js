// @flow

import { format, addMinutes } from 'date-fns';

const DEFAULT_FORMAT = 'EEE d MMM, H:mm a';

export const formatDate = (dateTIme: ?number, dateFormat: ?string) => {
  if (dateTIme == null) {
    return null;
  }
  const date = new Date(dateTIme);
  return format(
    addMinutes(date, date.getTimezoneOffset()),
    dateFormat ?? DEFAULT_FORMAT,
  );
};

export const formatMinutesDuration = (minutes: ?number) => {
  if (minutes == null) {
    return null;
  }
  if (minutes < 60) {
    return `${minutes}m`;
  }
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

const msToDays = ms => {
  return Math.floor(ms / (1000 * 60 * 60 * 24));
};

export const getDurationInNights = (start: ?number, end: ?number) => {
  if (start == null || end == null) {
    return null;
  }
  return msToDays(end) - msToDays(start);
};
