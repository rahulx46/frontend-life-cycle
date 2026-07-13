import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("App", () => {
    it("render the button", async () => {
        window.alert = jest.fn();
        render(<App />);
        const button = screen.getByRole("button");
        await userEvent.click(button);
        expect(window.alert).toHaveBeenCalled();
    });
})
