import moment from "moment";

export const getFormattedPublishedDate = (dateInput: string): string => {
  if (!dateInput) return dateInput;
  const date = moment(dateInput, moment.ISO_8601, true).isValid()
    ? moment(dateInput)
    : moment(dateInput, "ddd MMM DD HH:mm:ss [UTC] YYYY");
  return date.format("MMMM D, YYYY");
};
