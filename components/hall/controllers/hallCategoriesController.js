const HallCategory = require('../models/HallCategories');

const createHallCategory = async (req, res) => {
    try {
        const { hall_category } = req.body;
        const hallCategoryExists = await HallCategory.findOne({ hall_category });
        if (hallCategoryExists) {
            return res.status(400).json({ success: false, message: 'hall category already exists' });
        }
        const hallCategory = new HallCategory();
        hallCategory.hall_category = hall_category;
        await hallCategory.save();
        return res.status(201).json({ success: true, message: 'hall category created' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const updateHallCategory = async (req, res) => {
    try {
        const { hall_category } = req.body;
        const { hall_category_id } = req.params;
        const hallCategory = await HallCategory.findById(hall_category_id);
        if (!hallCategory) {
            return res.status(404).json({ success: false, message: 'hall category not found' });
        }
        hallCategory.hall_category = hall_category ? hall_category : hallCategory.hall_category;
        await hallCategory.save();
        return res.status(200).json({ success: true, message: 'hall cateogry updated' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const viewHallCategories = async (req, res) => {
    try {
        const hallCategories = await HallCategory.find().sort({ hall_category: 'asc' });
        return res.status(200).json({ success: true, hallCategories });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createHallCategory,
    updateHallCategory,
    viewHallCategories,
};
