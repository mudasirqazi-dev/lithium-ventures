import React, { useState } from "react";
import { PillGreen, PillGrey, Table, Td1, Td3 } from "../controls";
import Utils from "../utils/utils";

type Record = {
  dateAndTime: string;
  status: "Pending" | "Completed";
  username: string;
  value: string;
};

const STATUS_TYPE = {
  PENDING: "Pending",
  COMPLETED: "Completed",
};

function Datatable({ data }: any) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Date & Time</th>
          <th>Status</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((record: Record, idx: number) => (
          <tr key={idx}>
            <Td1>{Utils.formatDateime(record?.dateAndTime)}</Td1>
            <td>
              {record?.status === STATUS_TYPE.PENDING ? (
                <PillGrey>{record?.status}</PillGrey>
              ) : (
                <PillGreen>Paid</PillGreen>
              )}
            </td>
            <Td3>${Utils.formatToCurrency("234987")}</Td3>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Datatable;
