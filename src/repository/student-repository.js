const { StudenTable } = require("../models/index");

class StudentRepository {
  async createStudent({firstName,lastName,age,schoolName}) {
    try {
      // console.log(d);
      const student = await StudenTable.create({firstName,lastName,age,schoolName});
      return student;
    } catch (error) {
        console.log("Respository level error");
        throw error;
    }
  }
}

module.exports = StudentRepository;
