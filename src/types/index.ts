export type Metadata = {
  page: number;
  limit: number;
  totalCount: number;
};

export type Record = {
  dateAndTime: string;
  status: "Pending" | "Completed";
  username: string;
  value: string;
};
