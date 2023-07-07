import 'dotenv/config';
import express from 'express';
import * as jobs from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post ('/log', (req,res) => { 
    jobs.createApp(
        req.body.company, 
        req.body.date, 
        req.body.responded,
        req.body.number
        )
        .then(job => {
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'User input error.' });
        });
});

// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    jobs.retrieveJobApp()
        .then(job => { 
            if (job !== null) {
                res.json(job);
            } else {
                res.status(404).json({ Error: 'Document does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve document.' });
        });
});

// RETRIEVE by ID controller
app.get('/log/:id', (req, res) => {
    jobs.retrieveJobAppByID(req.params.id)
    .then(job => { 
        if (job !== null) {
            res.json(job);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});



// UPDATE controller ************************************
app.put('/log/job.id', (req, res) => {
    jobs.updateJobApp(
        req.params.id,
        req.body.company, 
        req.body.date, 
        req.body.responded,
        req.body.number
    )
    .then(job => {
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Failed to update job.' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:id', (req, res) => {
    jobs.deleteJobAppById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document does not seem to exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Failed to delete document.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});