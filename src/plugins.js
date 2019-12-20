
// import CategoryTreeItem from "./components/CategoryTreeItem";

const GlobalPlugins = {
    install(Vue) {    
        // Vue.component('category-tree-item', CategoryTreeItem);
        Vue.mixin({
            data: function() { return {} },
            methods: { },
        });
    }
}; 

export default GlobalPlugins;