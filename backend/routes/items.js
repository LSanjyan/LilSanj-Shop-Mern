const express = require("express");
const router = express.Router();
const Item = require(".models/Item");

//a new item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    req.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// get item by ID
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.statys(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//update item by ID
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
// delete item by ID
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndRemove(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
