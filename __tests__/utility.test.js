import { comparePassword, validatePassword } from "../src/utility";
import { describe, it, expect } from 'vitest';


describe("Password Validation Tests", () => {

    it('Password & Compare Password are equal', () => {
        let val = comparePassword("yoll123@Code", "yoll123@Code");
        expect(val).toBe(true);
    })

    it('Password & Compare Password are different', () => {
        let val = comparePassword("yoll123@Code", "yoll123@Code123");
        expect(val).toBe(false);
    })

    it('Password has less than 8 characters', () => {
        let val = validatePassword("abc");
        expect(val).toBe(false);
    })

    it('Password has no upper case alphabet', () => {
        let val = validatePassword("abcxyz@123");
        expect(val).toBe(false);
    })

    it('Password has no lower case alphabet', () => {
        let val = validatePassword("ABCXYZ@123");
        expect(val).toBe(false);
    })

    it('Password has no digit', () => {
        let val = validatePassword("ABCXYZabc@");
        expect(val).toBe(false);
    })

    it('Password has no special character', () => {
        let val = validatePassword("ABCXYZabc123");
        expect(val).toBe(false);
    })

    it('Password is valid', () => {
        let val = validatePassword("ABCXYZabc@123");
        expect(val).toBe(true);
    })

})