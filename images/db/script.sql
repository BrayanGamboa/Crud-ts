db.createUser(
    { user: 'brayan',
    pwd: '0419',
    roles: ['readWrite', 'dbAdmin'] }
);

-- Crear colecciones: 
db.usuarios.insert(
    [{ name_artist: "Alan Walker",
    name_album: "World of Walker",
    year: "2021",
    },
    { name_artist: "Alan Walker",
    name_album: "Walker Racing League",
    year: "2021",
    }]
);

-- Colecciones en array de objetos(Insertar varios datos): db.usuarios.insert(
--     [
--     {name: 'Estefania', lastname: 'Restrepo', age: '19'},
--     {name: 'Estefania', lastname: 'Garces', age: '18'},
--     {name: 'Estefania', lastname: 'Salazar', age: '17'},
-- ]
-- );

Ver los datos ingresados: bd.usuarios.find();

Ver los datos ingresados mas organizados: db.usuarios.find().pretty;

Llamar datos por su ID: db.usuarios.find({ _id :ObjectId("627a8d7f4f9cb042c55f4367") });

Actualizar datos: db.usuarios.update(
    { _id :ObjectId("627a8d7f4f9cb042c55f4367") },
    { name: 'Mariana',
    lastname: 'Mesa',
    age: '24' }
);

Agregarle otro dato: db.usuarios.update(
    { _id :ObjectId("627a8d7f4f9cb042c55f4367") },
    { $
    set
: { sexo: 'F' } }
);

db.usuarios.update(
    { _id :ObjectId("627a8d7f4f9cb042c55f4367") },
    { $
    set
: { edad: 20 } }
);

Eliminar un dato: db.usuarios.update(
    { _id :ObjectId("627a8d7f4f9cb042c55f4367") },
    { $ unset: { edad: 1 } }
);