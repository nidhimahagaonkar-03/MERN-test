import React, { useState, useEffect } from "react";
import "../Styles/CreateEmployee.css";

const CreateEmployee = ({ employee, onSave, onDelete, onCancel }) => {
    const [name, setName] = useState(employee ? employee.name : "");
    const [email, setEmail] = useState(employee ? employee.email : "");
    const [phone, setPhone] = useState(employee ? employee.phone : "");
    const [department, setDepartment] = useState(employee ? employee.department : "HR");
    const [gender, setGender] = useState(employee ? employee.gender : "M");
    const [course, setCourse] = useState(employee ? employee.course : []);
    const [img, setImg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            name,
            email,
            phone,
            department,
            gender,
            course,
            img,
        };
        onSave(newEmployee); // Save the employee (add or update)
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            onDelete(employee.id); // Delete the employee
        }
    };

    const handleCourseChange = (e) => {
        const selectedCourse = e.target.value;
        if (course.includes(selectedCourse)) {
            setCourse(course.filter((item) => item !== selectedCourse)); // Remove course if unchecked
        } else {
            setCourse([...course, selectedCourse]); // Add course if checked
        }
    };

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setEmail(employee.email);
            setPhone(employee.phone);
            setDepartment(employee.department);
            setGender(employee.gender);
            setCourse(employee.course);
        }
    }, [employee]);

    return (
        <div className="create-employee-container">
            <h2>{employee ? "Edit Employee" : "Create Employee"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Department:</label>
                    <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            value="M"
                            checked={gender === "M"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="F"
                            checked={gender === "F"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>
                </div>

                <div className="form-group">
                    <label>Course:</label>
                    <label>
                        <input
                            type="checkbox"
                            value="MCA"
                            checked={course.includes("MCA")}
                            onChange={handleCourseChange}
                        />
                        MCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="BCA"
                            checked={course.includes("BCA")}
                            onChange={handleCourseChange}
                        />
                        BCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="BSC"
                            checked={course.includes("BSC")}
                            onChange={handleCourseChange}
                        />
                        BSC
                    </label>
                </div>

                <div className="form-group">
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImg(e.target.files[0])}
                        accept="image/*"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit">{employee ? "Update" : "Create"} Employee</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                    {employee && <button type="button" onClick={handleDelete} className="delete-btn">Delete</button>}
                </div>
            </form>
        </div>
    );
};

export default CreateEmployee;
