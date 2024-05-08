const { StudentRepository } = require("../repository/index");

const studentRepository = new StudentRepository();

class StudentService {
  async createStudent({firstName,lastName,age,schoolName}) {
    try {
      const student = await studentRepository.createStudent({firstName,lastName,age,schoolName});
      return student;
    } catch (error) {
      console.log("something went wrong on service level");
      throw error;
    }
  }
}

module.exports=StudentService;

