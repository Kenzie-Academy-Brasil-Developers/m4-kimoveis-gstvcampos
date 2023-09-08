import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { verifyEmailExists } from "./verifyNameExists.middleware";


export default {
  handleErrors,
  validateBody,
  verifyIdExists,
  verifyEmailExists,
};
