import React from 'react'
import './Table.scss';
import { Button, Checkbox, Select, Space, Table, Tag, Modal } from 'antd';
import moment from 'moment';

const { Option } = Select;

const userJSON = [
    {
        id: 1,
        fullname: 'Nguyen Dinh Nghia',
        tags: ['developer']
    },
    {
        id: 2,
        fullname: 'Phan Le Thai Duy',
        tags: ['developer']
    },
    {
        id: 3,
        fullname: 'novasquare',
        tags: ['developer']
    },

]

const infoJSON = [
    {
        key: '1',
        date: "06/07/2022",
        userId: 1,
        username: "Nguyen Dinh Nghia",
        totalHours: 120,
        tags: ['developer'],
        comment: 'Update ui/ux',
    },
    {
        key: '2',
        date: "07/07/2022",
        userId: 1,
        username: "Nguyen Dinh Nghia",
        totalHours: 240,
        tags: ['nice'],
        comment: 'Update ui/ux',
    },
    {
        key: '3',
        date: "08/07/2022",
        userId: 1,
        username: "Nguyen Dinh Nghia",
        totalHours: 256,
        tags: ['nice'],
        comment: 'Update ui/ux',
    },
    {
        key: '4',
        date: "06/09/2022",
        userId: 1,
        username: "Nguyen Dinh Nghia",
        totalHours: 256,
        tags: ['nice'],
        comment: 'Update ui/ux',
    },
    {
        key: '8',
        date: "06/07/2022",
        userId: 3,
        username: "Novasquare",
        totalHours: 256,
        tags: ['nice'],
        comment: 'Update ui/ux',
    },
    {
        key: '9',
        date: "11/07/2022",
        userId: 2,
        username: "Phan Le Thai Duy",
        totalHours: 256,
        tags: ['nice'],
        comment: 'Update ui/ux',
    },
    {
        key: '11',
        date: "06/09/2023",
        userId: 2,
        username: "Phan Le Thai Duy",
        totalHours: 256,
        tags: ['nice'],
        comment: 'Update ui/ux',
    },
]

const timeSelectItems = [
    {
        name: 'today',
        value: 'today'
    },
    {
        name: 'this month',
        value: 'this_month'
    },
    {
        name: 'last month',
        value: 'last_month'
    },
    {
        name: 'this year',
        value: 'this_year'
    },
    {
        name: 'any',
        value: 'any'
    },
]

const MainTable = () => {
    const [filterOptions, setFilterOptions] = React.useState({});
    const [isDateFiltered, setIsDateFiltered] = React.useState();
    const [isUserFiltered, setIsUserFiltered] = React.useState();
    const [dataModal, setDataModal] = React.useState({});
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [dataSource, setDataSource] = React.useState();

    // handle change options boolean
    React.useEffect(() => {
        setFilterOptions({
            ...filterOptions,
            time: isDateFiltered ? filterOptions.time : null,
            userId: isUserFiltered ? filterOptions.userId : null,
        })
    }, [isDateFiltered, isUserFiltered])

    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'User',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
      
                if (tag === 'loser') {
                  color = 'volcano';
                }
      
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
            title: 'Total Hours',
            dataIndex: 'totalHours',
            key: 'totalHours',
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
            render: (comment) => <span>{comment}</span>,
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button className="buttons" onClick={() => handleClickView(record)}>View</Button>
            </Space>
          ),
        },
    ];

    const handleChangeOptions = (value, option) => {
        switch (option) {
            case 'date':
                setFilterOptions({
                    ...filterOptions,
                    time: value,
                })
                break;

            case 'user':
                setFilterOptions({
                    ...filterOptions,
                    userId: value,
                })

                break;

            default:
                break;
        }
    }

    // const handleLoadData = ({ filters }) => {
    //     const temp = infoJSON;
    //     setDataSource(temp);

    //     if (isDateFiltered) {
    //         switch (filters.time) {
    //             case 'today':
    //                 const date = moment().format('DD/MM/YYYY');
    //                 const filteredRes = isUserFiltered ? temp.filter((info) => info.date === date && info.userId === filters.userId) : temp.filter((info) => info.date === date);
    //                 if (filteredRes) {
    //                     setDataSource(filteredRes);
    //                     console.log(filteredRes);
    //                     console.log(' im set done')
    //                 }
    //                 break;

    //             default:
    //                 setDataSource([]);
    //                 break;
    //         }
    //     }

    //     if (isUserFiltered) {
    //         switch(filters.userId) {
    //             case filters.userId:
    //                 const filteredRes = isDateFiltered ? temp.filter((info) => info.userId === filters.userId && info.date === filters.time) : temp.filter((info) => info.userId === filters.userId);
    //                 if (filteredRes) {
    //                     setDataSource(filteredRes);
    //                 }
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }
    // }

    const handleClickView = (item) => {
        showModal();
        setDataModal(item);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    React.useEffect(() => {
        console.log(filterOptions);
        // handleLoadData({ filters: filterOptions });
    }, [filterOptions])

  return (
    <>
        <div className="container">
            <span>Filter by: </span><br></br>
            <div className="select-container">
                <Checkbox onChange={(e) => setIsDateFiltered(e.target.checked)}>Date: </Checkbox>
                {
                    isDateFiltered && (
                        <Select
                            defaultValue={timeSelectItems[timeSelectItems.length - 1].value}
                            className="select"
                            name="date"
                            onChange={(value) => handleChangeOptions(value, 'date')}
                            >
                            {
                                timeSelectItems.map((item, index) => (
                                    <Option key={index} value={item.value}>{ item.name }</Option>
                                ))
                            }
                        </Select>
                    )
                }
            </div>
            <div className="select-container">
                <Checkbox onChange={(e) => setIsUserFiltered(e.target.checked)}>User: </Checkbox>
                {
                    isUserFiltered && (
                        <Select
                            defaultValue={timeSelectItems[timeSelectItems.length - 1].value}
                            className="select"
                            name="user"
                            onChange={(value) => handleChangeOptions(value, 'user')}
                            >
                            {
                                userJSON.map((item, index) => (
                                    <Option key={index} value={item.id}>{ item.fullname }</Option>
                                ))
                            }
                        </Select>
                    )
                }
            </div>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Details: </span>
                <span>Hours: <span className="font-bold">512.00</span></span>
            </div>
            <div className="table-container">
                <Table columns={columns} dataSource={dataSource} className="table" />
            </div>
        </div>

        <Modal title={dataModal.username} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <ul>
                <li><span className="font-bold">Comment: </span>{dataModal.comment}</li>
                <li><span className="font-bold">Spent time: </span>{dataModal.totalHours} hours</li>
            </ul>
        </Modal>
    </>
  )
}

export default MainTable