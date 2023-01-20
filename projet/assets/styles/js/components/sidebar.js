import { NavList } from "./navlist.js";

let SideBar = {
    data() {
        return {
            lists: [
                {
                    title: "Utilisateurs",
                    links: [
                        "Liste des utilisateurs",
                        "Ajouter un utilisateur",
                        "Statistiques des utilisateurs"
                    ]
                },
                {
                    title: "Produits",
                    links: [
                        "Liste des produits",
                        "Ajouter un produit",
                        "Statistiques des produits"
                    ]
                },
                {
                    title: "Catégories",
                    links: [
                        "Liste des catégories de produits",
                        "Ajouter une catégorie de produits"
                    ]
                },
            ]
        }
    },
    components: {
        NavList
    },
    template: `
    <NavList v-for="list in lists" :title="list.title" :links="list.links"/>
    `
};

export { SideBar };