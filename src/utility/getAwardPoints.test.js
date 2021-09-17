import getAwardPoints from './getAwardPoints';

describe('getAwardPoints', () => {
    test('should return 0 points for invalid input', () => {
        expect(getAwardPoints(null)).toBe(0);
    });

    test('should return 0 points for 0 dollars', () => {
        expect(getAwardPoints(0)).toBe(0);
    });
    
    test('should return 0 points for 50 dollars', () => {
        expect(getAwardPoints(50)).toBe(0);
    });
    
    test('should return 1 point for 51 dollars', () => {
        expect(getAwardPoints(51)).toBe(1);
    });
    
    test('should return 25 point for 76 dollars', () => {
        expect(getAwardPoints(76)).toBe(26);
    });
    
    test('should return 50 points for 100 dollars', () => {
        expect(getAwardPoints(100)).toBe(50);
    });
    
    test('should return 52 points for 101 dollars', () => {
        expect(getAwardPoints(101)).toBe(52);
    });
});
