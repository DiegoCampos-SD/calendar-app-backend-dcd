/*
Event Routes / Event
host + /api/events
*/
const { Router } = require("express");
const { validateJWT } = require("../middlewares/token-validator");
const { check } = require("express-validator");
const { inputsValidation } = require("../middlewares/inputs-validator");
const { isDate } = require("../helpers/isDate");

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

router.use(validateJWT);

router.get(
  "/",

  getEvents
);

router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date required").custom(isDate),
    check("end", "End date required").custom(isDate),
    inputsValidation,
  ],
  createEvent
);

router.put(
  "/:id",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date required").custom(isDate),
    check("end", "End date required").custom(isDate),
    inputsValidation,
  ],
  updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;
