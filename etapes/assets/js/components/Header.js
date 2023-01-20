import { Nav } from "./Nav.js";

let Header = {
    data() {
        return {
            titles: ["Accueil", "A propos", "Contact"]
        }
    },
    components: {
        Nav
    },
    template: `
    <header><Nav :liTitle="this.titles" /></header>
    `
};

export { Header };