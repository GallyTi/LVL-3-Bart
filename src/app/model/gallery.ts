//getting rest api data
export interface GETCategoryFiles{
    path: string,
    name: string,
    image?: GETImagesFiles
}

//inside into object of galleries
export interface GETGallery {
    galleries: GETCategoryFiles[]
}

//properties of images
export interface GETImagesFiles{
    path: string,
    fullpath: string,
    name: string,
    modified: string,
}

//inside into object with help of getimagesofgallery
export interface GETImagesOfGallery{
    images: GETImagesFiles[]
}

export interface AddCategory{
    name:string
}
export interface AddImage{
    path:string,
    file:File
}

// {
//     "gallery": {
//       "path": "Animals",
//       "name": "Animals"
//     },
//     "images": [
//       {
//         "path": "elephant.jpg",
//         "fullpath": "Animals/elephant.jpg",
//         "name": "Elephant",
//         "modified": "2017-04-19T08:11:00.0+0200"
//       },
//       {
//         "path": "lion.jpg",
//         "fullpath": "Animals/lion.jpg",
//         "name": "Lion",
//         "modified": "2017-04-19T08:11:32.0+0200"
//       }
//     ]
//   }