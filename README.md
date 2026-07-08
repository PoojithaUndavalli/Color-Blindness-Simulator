# Color Blindness Simulator

## Overview

The Color Blindness Simulator is a web application that allows users to upload an image and preview how it appears to individuals with different types of color vision deficiencies. The application provides side-by-side comparison of the original image and the simulated image, helping users understand how visual content is perceived by people with color blindness.

The project is built entirely with HTML, CSS, and JavaScript and performs all image processing directly in the browser without requiring a backend server.

---

## Features

* Upload images (PNG, JPG, JPEG, etc.)
* View the original image alongside the simulated image
* Simulate multiple types of color vision deficiencies:

  * Protanopia (Red-blind)
  * Deuteranopia (Green-blind)
  * Tritanopia (Blue-blind)
  * Achromatopsia (Complete color blindness)
* Instantly switch between simulation modes
* Responsive user interface
* No server or database required
* Fully client-side image processing

---

## Project Structure

```
colorblindness-simulator/
│── index.html
│── style.css
└── script.js
```

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* HTML5 Canvas API
* FileReader API

---

## How It Works

1. Open the application in a web browser.
2. Click the **Upload Image** button and select an image.
3. The uploaded image is displayed on the **Original** canvas.
4. Select one of the available simulation modes from the dropdown menu.
5. The application processes each pixel using the Canvas API and displays the simulated image on the second canvas.
6. Users can switch between simulation modes at any time without uploading the image again.

---

## Implementation Details

The application uses the HTML5 Canvas API to manipulate image pixels directly in the browser. After an image is uploaded using the FileReader API, it is drawn onto a canvas. JavaScript reads the pixel data using `getImageData()`, applies the appropriate color transformation algorithm based on the selected simulation mode, and writes the modified pixels back using `putImageData()`.

Each simulation uses predefined color transformation formulas to approximate how different types of color vision deficiencies affect the perception of colors. For Achromatopsia, the application converts the image to grayscale using a standard luminance calculation.

---

## Supported Simulations

| Simulation    | Description                                       |
| ------------- | ------------------------------------------------- |
| Original      | Displays the uploaded image without modifications |
| Protanopia    | Simulates red color deficiency                    |
| Deuteranopia  | Simulates green color deficiency                  |
| Tritanopia    | Simulates blue color deficiency                   |
| Achromatopsia | Simulates complete color blindness (grayscale)    |

---

## Installation

1. Download or clone the repository.

2. Open the project folder.

3. Open `index.html` in any modern web browser.

No additional installation or dependencies are required.

---

## Browser Compatibility

The application works on modern browsers including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## Future Enhancements

* Side-by-side slider comparison
* Multiple image uploads
* Download simulated images
* Zoom and pan functionality
* Additional color vision deficiency models
* Drag-and-drop image upload
* Accessibility improvements

---

## Author

Developed as a front-end web application using HTML, CSS, and JavaScript for educational purposes.
