import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../css/archive.module.css";
import { ConfigProvider, Table } from "antd";
import he_IL from "antd/lib/locale/he_IL";
import { CircularProgress } from "@mui/material";
import { formatDate } from "../../services/formatDate";
import searchProps from "../../services/searchANT";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteRent, getArchiveRents } from "../Servides-fetch/RentActions";

function Archive() {
  const navigate = useNavigate();
  const [archive, setArchive] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const handleExpand = (expanded, record) => {
    if (expanded) {
      setExpandedRowKeys([record.id]); // מאפשר רק לשורה אחת להיפתח בכל רגע
    } else {
      setExpandedRowKeys([]); // סוגר את כל השורות
    }
  };

  const handleEdit = (rent) => {
    navigate("/rentals/edit", { state: { rent } });
  };

  const columns = [
    {
      title: "מס' השכרה",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "descend",
    },
    {
      title: "שם הלקוח",
      dataIndex: "customer_name",
      key: "customer_name",
      ...searchProps("customer_name", "לקוח"),
    },
    {
      title: "מדינה",
      dataIndex: "country",
      key: "country",
      ...searchProps("country", "מדינה"),
    },
    {
      title: "מס' מכשיר",
      dataIndex: "device_id",
      key: "device_id",
      ...searchProps("device_id", "מכשיר"),
    },
    {
      title: "מתאריך",
      dataIndex: "from_date",
      key: "from_date",
      render: (date) => formatDate(new Date(date)), // עיצוב התאריך
    },
    {
      title: "עד תאריך",
      dataIndex: "to_date",
      key: "to_date",
      render: (date) => formatDate(new Date(date)), // עיצוב התאריך
    },
    {
      title: "מחיר",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price} ₪`,
      onFilter: (value, record) => record.title === value,
    },
    {
      title: "פעולות",
      key: "actions",
      render: (_, record) => (
        <>
          <EditOutlined
            style={{
              color: "blue",
              marginRight: 8,
              cursor: "pointer",
            }}
            onClick={() => handleEdit(record)}
          />
          <DeleteOutlined
            style={{
              marginRight: 8,
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => deleteRent(record.id)}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    getArchiveRents(setArchive);
    setLoading(false);
  }, []);

  return (
    <div className={classes.archiveContainer}>
      <button
        className={classes.addButton}
        onClick={() => navigate("/archive/new")}
      >
        הוסף
      </button>

      <div className={classes.archiveList}>
        <ConfigProvider locale={he_IL} diraction="rtl">
          <Table
            columns={columns}
            pagination={{ pageSize: 10 }}
            dataSource={archive}
            bordered
            className={classes.archiveTable}
            rowKey={(record) => record.id}
            locale={{
              emptyText: loading ? <CircularProgress /> : "לא קיימים תיעודים",
            }}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0, color: "gray" }}>
                  {record.notes && record.notes.trim() !== ""
                    ? record.notes
                    : "*** אין הערות להשכרה זו ***"}
                </p>
              ),
              rowExpandable: (record) =>
                record.notes && record.notes.trim() !== "", // מציג את ה- "+" רק אם יש הערות
              expandedRowKeys, // ניהול השורות שנפתחות
              onExpand: handleExpand, // שליטה על פתיחת שורות
            }}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Archive;
