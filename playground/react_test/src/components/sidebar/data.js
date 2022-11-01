export const data  = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            name: "index.html",
                            isFolder: false,
                        },
                        {
                            name: "index.css",
                            isFolder: false,
                        }
                    ]
                },
                {
                    name: "public nested 2",
                    isFolder: false,
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "App.js",
                    isFolder: false,
                },
                {
                    name: "index.js",
                    isFolder: false,
                },
                {
                    name: "style.css",
                    isFolder: false,
                },
                {
                    name: "component",
                    isFolder: true,
                    items: [
                        {
                            name: "comp1.js",
                            isFolder: false,
                        },      
                        {
                            name: "comp2.js",
                            isFolder: false,
                        },      
                        {
                            name: "comp3.js",
                            isFolder: false,
                        },      
                    ]
                },
            ]
        },
        {
            name: "package.json",
            isFolder: false,
        }
    ]
}