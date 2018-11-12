import React from 'react';

import arrowIcon from '../icons/icon-arrow-left.png'

export const ImageInfo = () =>
    <div className="image-info-container ib">
        <h1>!מעולה</h1>
        <h1>הוספת שלט מורשת</h1>
        <h3>האם כותרת השלט היא</h3>
        // TODO add name of location
        <h3>טעינו ? ספר לנו איזו כותרת רשומה</h3>
        <button><img src={arrowIcon} alt="arrow image" /></button>
    // TODO add onclick
    </div>

const ChooseBetterImage = () =>
    <div className="choose-better-image ib ">
        <h3>בחר את התמונה הטובה ביותר</h3>
    // TODO add here images from firebase same sign and current image
    </div>


const Finish = () =>
    <div className="finish">
        <button>סיימתי</button>
    // TODO add onclick
    // add disabled if not chose one image
    </div>
const ImageInfoPage = () =>
    <div>
        <ImageInfo />
        < ChooseBetterImage />
        <Finish />

    </div>

export default ImageInfoPage;