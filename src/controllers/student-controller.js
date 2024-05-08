const { StudentService } = require("../services/index");

const studentService = new StudentService();
const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);

    return res.status(201).json({
      data: student,
      success: true,
      message: "Student successfully created",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};


module.exports={
    createStudent,
}
