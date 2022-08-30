import { renderHook } from '@testing-library/react-hooks';
import { setPlantsData } from '../actions';
import { Plant } from './../types/plants';
import { usePlantByInstCode } from './usePlants';

describe('usePlantByInstCode()', () => {
    const mockedPlants: Partial<Plant>[] = [
        {
            instCode: 'BAR',
            sapPlantId: 'BARRACUDA'
        },
        {
            instCode: 'FOG',
            sapPlantId: 'FOGGY_FROG'
        },
        {
            instCode: 'SUN',
            sapPlantId: 'SUNSHINE_COAST'
        }
    ];

    it('should return with a plant if it`s present', () => {
        // given
        setPlantsData({
            plants: mockedPlants as Plant[]
        });

        // when
        const { result } = renderHook(() => usePlantByInstCode({ instCode: 'SUN' }));

        // then
        expect(result.current).toEqual({
            instCode: 'SUN',
            sapPlantId: 'SUNSHINE_COAST'
        });
    });

    it('should return with `undefined` if plant is not found by instCode', () => {
        // given
        setPlantsData({
            plants: mockedPlants as Plant[]
        });

        // when
        const { result } = renderHook(() => usePlantByInstCode({ instCode: 'XOR' }));

        // then
        expect(result.current).not.toBeDefined();
    });
});
