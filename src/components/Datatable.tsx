import { PillGreen, PillGrey, Table, Td1, Td3 } from "../controls";
import Utils from "../utils/utils";
import { Record } from "../types";
import { STATUS_TYPE } from "../utils/enums";

type Props = {
  data: Record[];
};

function Datatable({ data }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          {/* <th>Username</th> */}
          <th>Date & Time</th>
          <th>Status</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((record: Record, idx: number) => (
          <tr key={idx}>
            {/* <Td1>{record?.username}</Td1> */}
            <Td1>{Utils.formatDateime(record?.dateAndTime)}</Td1>
            <td>
              {record?.status === STATUS_TYPE.PENDING ? (
                <PillGrey>{record?.status}</PillGrey>
              ) : (
                <PillGreen>Paid</PillGreen>
              )}
            </td>
            <Td3>${Utils.formatToCurrency(record?.value)}</Td3>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Datatable;
