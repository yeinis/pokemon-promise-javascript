/*
const promise = new Promise( function( resolve, reject ) {
    setInterval( function() {
        resolve( "Hola mundo" );
    }, 10000)
} );
​
promise.then( function( value ) {
    console.log(value);
} );
*/

const url = 'https://pokeapi.co/api/v2/'


fetch( `${ url}pokemon?limit=100` )
  .then( ( tipoDeDato ) => tipoDeDato.json() )
  .then( ( data ) => {
    console.log( '100 primeros', data );
  } );


fetch( `${ url}pokemon/bulbasaur` )
  .then( ( tipoDeDato ) => tipoDeDato.json() )
  .then( ( data ) => {
    console.log( 'Buscar por el nombre', data );
  } );