export const schemaUser = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "price", "category"],
        additionalProperties: false,
        properties: {
            _id: {},
            name_artist: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            name_album: {
                bsonType: "string",
                description: "'price' is required and is a string",
            },
            year: {
                bsonType: "string",
                description: "'category' is required and is a string",
            },
        },
    },
};