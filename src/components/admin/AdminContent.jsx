import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { useTable } from "react-table";
import Button from "@components/common/Button";
import useReadApplyList from "@hooks/admin/useReadApplyList";
import useReadDrawList from "@hooks/admin/useReadDrawList";
import useTogglePayment from "@hooks/admin/useTogglePayment";
import useRandomDraw from "@hooks/admin/useRandomDraw";

function ApplyTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function DrawTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const AdminContent = () => {
  const { applyList, applyListLoading } = useReadApplyList();
  const { drawList, drawListLoading } = useReadDrawList();
  const { onTogglePayment } = useTogglePayment();
  const { onRandomDraw } = useRandomDraw();
  const applyColumns = React.useMemo(
    () => [
      {
        Header: "index",
        accessor: "id",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "닉네임",
        accessor: "nick",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "핸드폰번호",
        accessor: "phone",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "성별",
        accessor: "gender",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value === "M" ? "남자" : "여자"}
            </span>
          );
        },
      },
      {
        Header: "번호팅 종류",
        columns: [
          {
            Header: "번호팅",
            accessor: "numberting",
            align: "center",
            Cell: (props) => {
              const { cell } = props;
              return (
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: cell.column.align,
                  }}
                >
                  {cell.value ? "O" : "X"}
                </span>
              );
            },
          },
          {
            Header: "베프팅",
            accessor: "friendting",
            align: "center",
            Cell: (props) => {
              const { cell } = props;
              return (
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: cell.column.align,
                  }}
                >
                  {cell.value ? "O" : "X"}
                </span>
              );
            },
          },
        ],
      },
    ],
    []
  );
  const drawColumns = React.useMemo(
    () => [
      {
        Header: "index",
        accessor: "id",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "이름",
        accessor: "name",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "핸드폰번호",
        accessor: "phone",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "성별",
        accessor: "gender",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <span
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
            >
              {cell.value === "M" ? "남자" : "여자"}
            </span>
          );
        },
      },
      {
        Header: "뽑기 개수",
        columns: [
          {
            Header: "번호팅",
            accessor: "numbertingNo",
            align: "center",
            Cell: (props) => {
              const { cell } = props;
              return (
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: cell.column.align,
                  }}
                >
                  {cell.value}
                </span>
              );
            },
          },
          {
            Header: "베프팅",
            accessor: "friendtingNo",
            align: "center",
            Cell: (props) => {
              const { cell } = props;
              return (
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: cell.column.align,
                  }}
                >
                  {cell.value}
                </span>
              );
            },
          },
        ],
      },
      {
        Header: "입금내역",
        accessor: "payment",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <PaymentButton
              toggle={cell.value}
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
              onClick={() => onTogglePayment(cell.row.cells[0].value)}
            >
              {cell.value ? "입금확인" : "입금대기"}
            </PaymentButton>
          );
        },
      },
      {
        Header: "뽑기",
        align: "center",
        Cell: (props) => {
          const { cell } = props;
          return (
            <DrawButton
              style={{
                display: "block",
                width: "100%",
                textAlign: cell.column.align,
              }}
              onClick={() => onRandomDraw(cell.row.cells[0].value)}
            >
              뽑기
            </DrawButton>
          );
        },
      },
    ],
    []
  );
  return (
    <AdminContentWrap>
      <ApplyTableWrap>
        <h2>신청 리스트</h2>
        {!applyListLoading && applyList && (
          <ApplyTable columns={applyColumns} data={applyList} />
        )}
      </ApplyTableWrap>
      <DrawTableWrap>
        <h2>뽑기 리스트</h2>
        {!drawListLoading && drawList && (
          <DrawTable columns={drawColumns} data={drawList} />
        )}
      </DrawTableWrap>
    </AdminContentWrap>
  );
};

const AdminContentWrap = styled.div`
  font-family: "Noto Sans KR";
  margin: 0 3rem;
  margin-top: 1.5rem;
`;

const ApplyTableWrap = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const DrawTableWrap = styled(ApplyTableWrap)``;

const PaymentButton = styled(Button)`
  border: 0;
  font-size: 16px;
  font-weight: 700;
  padding: 1rem;
  background: ${(props) => (props.toggle ? `${oc.green[5]}` : `${oc.red[5]}`)};
  color: white;
`;

const DrawButton = styled(Button)`
  border: 0;
  font-size: 16px;
  font-weight: 700;
  padding: 1rem;
  background: ${oc.orange[4]};
  color: white;
`;

export default AdminContent;
