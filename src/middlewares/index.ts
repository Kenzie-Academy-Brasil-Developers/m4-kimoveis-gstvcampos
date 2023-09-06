import { handleErrors } from "./handleErrors.middleware";
import { pagination } from "./pagination.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyNameExists } from "./verifyNameExists.middleware";

export default {
  handleErrors,
  validateBody,
  pagination,
  verifyNameExists,
};
