const constant = {
  MONGO_URI: "mongodb://localhost:27017/class_manage",
  PORT: 4000,
  HTML_STATUS_CODE: {
    SUCCESS: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    INVALID_DATA: 406,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INVALID_CREDENTIAL: 405,
  },

  MODEL_NAME: {
    CLASS: "class",
    USER: "users",
    TEACHER_CLASS: "teacher-class",
    STUDENT_CLASS: "student-class",
    BATCH: "batches",
  },
  ROLE: ["STUDENT", "ADMIN", "INSTRUCTOR"],
  BATCH: ["MORNING", "AFTERNOON", "EVENING"],
  CLASS: ["python", "javascript", "java", "html", "css"],

  MESSAGE: {
    USER: {
      USER_ALREADY_REGISTERED:
        "It seems like user is already registered with the same email.",
      MESSAGE_UNAUTHORIZED_USER: "Unauthorized User",
      MESSAGE_INVALID_CREDENTIALS: "Invalid Credentials.",
      NOT_REGISTERED: "User not registered with the given UserName.",
      LOGIN_SECCESS: "User loggedin successfully",
      CREATED: "New user created. Please login to continue..",
    },
    CLASS: {
      ALREADY_EXIST: "Class is already exists",
      NOT_EXIST: "CLASS not exist",
      // NO_DATA: 'There are no class data in the given date range',
      CREATED: "New class created",
      DELETED: "Class deleted successfully",
    },
    BATCH: {
      ALREADY_EXIST: "Batch is already exists",
      NOT_EXIST: "Batch not exist",
      // NO_DATA: 'There are no class data in the given date range',
      CREATED: "New Batch created",
      DELETED: "Batch deleted successfully",
    },
    TEACHER_CLASS: {
      ALREADY_EXIST:
        "It seems like teacher is already occupied for the class with respective batch ",
      NOT_EXIST: "User not exist",
      NOT_EXIST_SYMBOL: "Symbol not exist",
      NO_DATA: "There are no  in the given date range",
      CREATED: "Instructor mapped with class.",
      DELETED: " deleted successfully",
    },
    STUDENT_CLASS: {
      ALREADY_EXIST:
        "It seems like student is already occupied for the class with respective batch for respective teacher ",
      NOT_EXIST: "User not exist",
      NOT_EXIST_SYMBOL: "Symbol not exist",
      NO_DATA: "There are no  in the given date range",
      CREATED: "Student mapped with class.",
      DELETED: " deleted successfully",
    },
    COMMON: {
      INTERNAL_ERROR: "Sorry! Something went wrong.",
      MESSAGE_INVALID_DATA: "Invalid payload.",
      MESSAGE_BAD_REQUEST: "Bad request/Unknown requested fields.",
      MESSAGE_DATA_NOT_FOUND: "Data not found.",
      MESSAGE_UNAUTHORIZED_ACCESS: "You are not authorized for this action.",
      DATA_FOUND: "Data found",
    },
  },
  JWT: {
    SECRET: "class@manage",
    TOKEN_TIMEOUT: "4h",
  },
};
module.exports = constant;
