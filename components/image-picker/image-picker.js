'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

const ImagePicker = (props) => {
    const { name, label } = props;

    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    const handlePickClick = () => {
        imageInput.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage ? (
                        <p>No image picked yet.</p>
                    ) : (
                        <Image
                            src={pickedImage}
                            alt="The image selected by user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    ref={imageInput}
                    // multiple
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
