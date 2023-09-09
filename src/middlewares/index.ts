import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyAdmin } from "./verifyAdmin.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { verifyEmailExists } from "./verifyNameExists.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyUserPermission } from "./verifyUserPermission.middleware";

export default {
  handleErrors,
  validateBody,
  verifyIdExists,
  verifyEmailExists,
  verifyAdmin,
  verifyToken,
  verifyUserPermission,
};
