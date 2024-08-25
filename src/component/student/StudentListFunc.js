import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import * as studentService from "../../service/StudentService"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import {toast} from "react-toastify";


function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");




    useEffect(() => {
        getAllStudents();
    }, [name, startDate, endDate]);

    const getAllStudents = async () => {
        let res = await studentService.getAllStudents({ name, startDate, endDate });
        setStudents(res);
    };

    // useEffect (() => {
    // //     Call API search name
    //    getAllStudents(name)
    // }, [name])

    useEffect(() => {
        return () => {
            //clean up <=> componentWillUnmount
        }
    }, [])

    // const getAllStudents = async (name) => {
    //     let res = await studentService.getAllStudents(name);
    //     setStudents(res)
    // }



    const handleDelete = async () => {
        if (selectedStudentId) {
            try {
                await studentService.deleteStudent(selectedStudentId);
                // Sau khi xóa thành công, cập nhật lại danh sách sinh viên
                setStudents(students.filter(student => student.id !== selectedStudentId));
                setShowModal(false);// Đóng modal sau khi xóa
                toast.success("Tác vụ thành công!!!")
            } catch (error) {
                console.error("Tác vụ thất bại", error);
                alert("tác vụ thất bại");
            }
        }
    };

    const openModal = (id) => {
        setSelectedStudentId(id);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedStudentId(null);
        setShowModal(false);
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <div className="mb-3">
                <Link to="/create" className="btn btn-primary">Thêm mới</Link>
            </div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-3"
                placeholder="Search by name"
            />
            <div className="mb-3">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="form-control mb-2"
                    placeholder="Start Date"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="form-control"
                    placeholder="End Date"
                />
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                    <th>Date of Birth</th>
                    <th>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                            <td>{formatDate(item.dob)}</td>
                            <td>
                                <Link to={`/edit/${item.id}`} type="button"
                                      className="btn btn-warning"><span>Edit</span></Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => openModal(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác Nhận Xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa sinh viên này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StudentListFunc;