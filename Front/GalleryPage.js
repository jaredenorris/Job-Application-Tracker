import React from "react"

import ImageGallery from "react-image-gallery"

    const images = [
        {
        original: "images/cnc-lathe-dualspindle.jpg",
        thumbnail: "images/cnc-lathe-dualspindle.jpg",
        description: "CNC lathe set for turning in previous career",
        originalHeight: "450px",
        },
        {
        original: "images/cnc-lathe-livetool.jpg",
        thumbnail: "images/cnc-lathe-livetool.jpg",
        description: "CNC lathe set for live tool operations in previous career",
        originalHeight: "450px",
        },
        {
        original: "images/finishedproduct-machined.jpg",
        thumbnail: "images/finishedproduct-machined.jpg",
        description: "CNC lathe finished product",
        originalHeight: "450px",
        },
        {
        original: "images/countsort-datastructure.png",
        thumbnail: "images/countsort-datastructure.png",
        description: "Python code snippet from CS degree",
        originalHeight: "450px",
        },
        {
        original: "images/oregoncoast-mountain.JPG",
        thumbnail: "images/oregoncoast-mountain.JPG",
        description: "Mountain on Oregon coast",
        originalHeight: "450px",
        },
        {
        original: "images/oregoncoast-ocean.JPG",
        thumbnail: "images/oregoncoast-ocean.JPG",
        description: "Oregon coast ocean view",
        originalHeight: "450px",
        },
        {
        original: "images/oregoncoast-shoreline.JPG",
        thumbnail: "images/oregoncoast-shoreline.JPG",
        description: "Oregon coast shoreline",
        originalHeight: "450px"
        },
        {
        original: "images/pnw-bridge-columbiariver.JPG",
        thumbnail: "images/pnw-bridge-columbiariver.JPG",
        description: "Bridge of the Gods",
        originalHeight: "450px",
        },
        {
        original: "images/pnw-lake-oregon.JPG",
        thumbnail: "images/pnw-lake-oregon.JPG",
        description: "Elkhorn Lake",
        originalHeight: "450px",
        },
        {
        original: "images/python-generator-count_seq.png",
        thumbnail: "images/python-generator-count_seq.png",
        description: "Python generator from CS degree",
        originalHeight: "450px",
        }
    ]
function GalleryPage() {
    return (
        <>

        <h2>Gallery</h2>
        <article class="gallery">
            <ImageGallery items={images}/>
        </article>
        </>
    );
}
export default GalleryPage;