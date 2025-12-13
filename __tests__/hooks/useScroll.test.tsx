import { useScroll } from "@/app/hooks/useScroll";
import { renderHook, act } from "@testing-library/react";

describe("useScroll", () => {
    it("should respond to scroll events", () => {
        const { result } = renderHook(() => useScroll());

        act(() => {
            global.scrollY = 100;
            global.dispatchEvent(new Event("scroll"));
        });

        expect(result.current).toBe(true);

        act(() => {
            global.scrollY = 0;
            global.dispatchEvent(new Event("scroll"));
        });

        expect(result.current).toBe(false);
    });
});