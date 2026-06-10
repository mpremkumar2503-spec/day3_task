import { useState } from 'react'

function EmployeeRegister() {
  const [employeeName, setEmployeeName] = useState("")
  const [department, setDepartment] = useState("")
  const [salary, setSalary] = useState("")
  const [employees, setEmployees] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEmployee = {
      id: Date.now(),
      employeeName,
      department,
      salary,
    }

    setEmployees((prev) => [...prev, newEmployee])
    setEmployeeName("")
    setDepartment("")
    setSalary("")
  }

  return (
    <div>
      <h2>Employee Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label>
          <input type='text' value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required />
        </div>
        <br/>
        <div>
          <label>Department:</label>
          <input type='text' value={department} onChange={(e) => setDepartment(e.target.value)} required />
        </div>
        <div>
          <label>Salary:</label>
          <input type='number' value={salary} onChange={(e) => setSalary(e.target.value)} required />
        </div>
        <button type='submit'>Add Employee</button>
      </form>

      <h3>Total Employees: {employees.length}</h3>
      {employees.length === 0 ? (
        <p>No Employees Added</p>
      ) : (
        employees.map((emp) => (
          <div key={emp.id}>
            <p><strong>Name:</strong> {emp.employeeName}</p>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Salary:</strong> {emp.salary}</p>
          </div>
        ))
      )}
    </div>
  )
}
export default EmployeeRegister;