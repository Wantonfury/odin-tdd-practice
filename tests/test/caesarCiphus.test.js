import caesarCiphus from "../caesarCiphus";

it("test ciphus", () => {
    expect(caesarCiphus('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

it("test ciphus alphabet", () => {
    expect(caesarCiphus('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});