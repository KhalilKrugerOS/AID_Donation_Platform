import { Document, Schema, model, models } from "mongoose";
//import Category from '../database/models/category.model';

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;

const seedCategories = async () => {
  const categories = ['health', 'pets', 'education'];
  for (const categoryName of categories) {
      await Category.findOneAndUpdate(
          { name: categoryName },
          { name: categoryName },
          { upsert: true, new: true, setDefaultsOnInsert: true }
      );
  }
};

seedCategories();3