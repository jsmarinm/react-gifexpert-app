import { getGifs } from "../../helpers/getGifts";

describe('Pruebas con getGifs Fetch',() => {

    test('Debe traer 10 elementos', async() => { 
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
     });

     test('Debe mandar la categoria', async() => { 
        const gifs = await getGifs('');
        
        console.log(gifs);
        expect(gifs.length).toBe(0);
     })



});