import React from "react";





const Table = ({
  columns,data,renderRow
}: {
  columns: { header: string; accessor: string; className?: string }[],
  data:any,
  renderRow:(item:any)=>React.ReactNode
}) => {
  return (
    <table className="w-full mt-5">
      <thead>
        <tr>
          {columns.map(
            (
              val: { header: string; accessor: string; className?: string },
              index: number
            ) => (
              <th key={val.accessor} className={`${val.className}  text-left text-gray-500 text-sm`}>
                {val.header}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((item:any)=>renderRow(item))}

      </tbody>

    </table>
  );
};

export default Table;
