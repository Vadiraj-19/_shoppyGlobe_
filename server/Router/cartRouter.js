// Router/cartRouter.js
import express from "express";
import {
  addToCart,
  getCart,
  deleteCartItem,
  updateCartItem,
} from "../controller/cartController.js";

const router = express.Router();

router.post("/", addToCart);         // POST /cart       ⇢ add or update
router.get("/", getCart);            // GET  /cart       ⇢ list all
router.delete("/:id", deleteCartItem); // DELETE /cart/:id ⇒ remove one
router.put("/:id", updateCartItem);    // PUT    /cart/:id ⇒ change quantity

export default router;
