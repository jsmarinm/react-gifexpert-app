import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifts } from "../../hooks/useFetchGifs";

describe('Pruebas en el Hook useFetchGifts', () => {
    test('debe retornar el estado inicial', async() => { 

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifts('one punch'));
        const {data, loading} = result.current;
        // const { data, loading } = useFetchGifts('one punch');
        // console.log(data, loading);
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);



     });

     test('debe retornar un arreglo de imagenes y loading = false', async() => { 

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifts('one punch'));
        
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

      });
});

