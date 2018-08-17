// Imports the Google Cloud client library
const BigQuery = require('@google-cloud/bigquery');

// Your Google Cloud Platform project ID
const projectId = 'pubsub-gf';

// Creates a client
const bigquery = new BigQuery({
  projectId: projectId,
  keyFilename: './api/credential/key.json'
});

// The name for the new dataset
let query = "SELECT * FROM `pubsub-gf.github_source_data.github_contributors` LIMIT 10";
// Creates the new dataset
exports.queryBigQuery = (req, res) => {
    bigquery.query(query, function(err, rows) {
        if (!err) {
            res.json(rows);
        }else {
            console.log(err) 
        }   
    });
}
