const newman = require("newman")

newman.run({
    collection: "json-collection/faiz.postman_collection.json",
    environment: "json-env/faiz.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
