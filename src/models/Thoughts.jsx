import { Schema, model, models } from "mongoose"

const ThoughtSchema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true }
})

ThoughtSchema.set("toJSON", { getters: true })

const Thought = models.Thought || model("Thought", ThoughtSchema)

export default Thought