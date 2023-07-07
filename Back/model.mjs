// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500 Connection Failed!' });
    } else  {
        console.log('Successfully connected to MongoDB!');
    }
});

// SCHEMA: Define the collection's schema.
const jobAppSchema = mongoose.Schema({
	company:    { type: String, required: true },
	date:     { type: Date, required: true, default: Date.now },
	responded: { type: String, required: true },
    number:   { type: Number, required: true}
});

// Compile the model from the schema.
const jobApp = mongoose.model('job', jobAppSchema);

// CREATE model *****************************************
const createApp = async (company, date, responded, number) => {
    const job = new jobApp({ 
        company: company, 
        date: date, 
        responded: responded,
        number: number
    });
    return job.save();
}

// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveJobApp = async () => {
    const query = jobApp.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobAppByID = async (id) => {
    const query = jobApp.findById({_id: id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteJobAppById = async (id) => {
    const result = await jobApp.deleteOne({_id: id});
    return result.deletedCount;
};

// UPDATE model *****************************************************
const updateJobApp = async (id, company, date, responded, number) => {
    const result = await jobApp.replaceOne({_id: id }, {
        company: company,
        date: date,
        responded: responded,
        number: number
    });
    return { 
        _id: id, 
        company: company,
        date: date,
        responded: responded,
        number: number 
    }
}

export { createApp, retrieveJobApp, retrieveJobAppByID, updateJobApp, deleteJobAppById }



