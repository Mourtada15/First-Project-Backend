import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true })


export default mongoose.model('Team',teamSchema)
