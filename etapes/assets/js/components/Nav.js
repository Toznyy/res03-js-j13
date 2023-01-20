let Nav = {
    props : ["liTitle"],  
    
    template : `
    <nav>
        <ul>
            <li v-for="title in liTitle">{{ title }}</li
        </ul>
    </nav>
    `
};
  
export { Nav };