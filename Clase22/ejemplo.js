const { normalize , denormalize , schema } = require('normalizr');
const fs = require('fs');

// Definimos un esquema de usuarios (autores y comentadores)
const user = new schema.Entity('users');

// Definimos un esquema de comentadores
const comment = new schema.Entity('comments', {
    commenter: user
});

// Definimos un esquema de artículos
const article = new schema.Entity('articles', {
    autor: user,
    comments: [comment]
});

// Definimos un esquema de posts ( array de artículos)
const posts = new schema.Entity('posts', {
    posts: [article]
});

const util = require('util');

function print (objeto) {
    console.log(util.inspect(objeto,false, 12,true));
}
console.log('---------------- OBJETO ORIGINAL ----------------');

console.log(JSON.stringify(originalData).length);

console.log('---------------- OBJETO NORMALIZADO ----------------');

const normalizedData = normalize(originalData,posts);
print(normalizedData);
console.log(JSON.stringify(normalizedData).length);

console.log('---------------- OBJETO DENORMALIZADO ----------------');

const denormalizedData = denormalize(originalData,posts);   
print(denormalizedData);
console.log(JSON.stringify(denormalizedData).length);