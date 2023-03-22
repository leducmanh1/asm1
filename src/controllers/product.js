import Products from "../models/product";
import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required()
})

export const createProduct = async (req, res) => {
    try {
        const {error} = productSchema.validate(req.body)
            if(error){
                return res.status(400).json({
                    message: error.details[0].message
                })
            }
        const products = await Products.create(req.body)
        return res.status(200).json({
            message: "Tạo thành công",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const getAll = async (req,res) =>{
    try {
        const products = await Products.find();
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const getById = async (req,res) =>{
    try {
        const products = await Products.findById({_id:req.params.id});
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const updateProduct = async (req,res)=>{
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const products = await Products.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true});
        return res.status(200).json({
            message: "Cập nhật thành công",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const removeProduct = async (req, res) => {
    try {
        const products = await Products.findByIdAndRemove({_id:req.params.id})
        return res.status(200).json({
            message: "Đã xóa thành công",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}