Angular Responsive Carousel (ngx-tcarousel)
=========================================

**Super Light, Easy-to-Use Angular Carousel with RTL Support**

The **Angular Responsive Carousel** (ngx-tcarousel) is a lightweight and flexible carousel component for Angular applications. It’s designed to be simple to integrate, responsive, and compatible with right-to-left (RTL) languages.

Features
--------

*   **Lightweight**: Minimal footprint for faster loading times.
*   **Responsive**: Adjusts to different screen sizes and orientations.
*   **RTL Support**: Works seamlessly with RTL languages.
*   **Easy Integration**: Simple API for adding a carousel to your project.
*   **Customizable**: Customize styles, navigation, and behavior.

Demo
----
[Demo](https://tyeety.github.io/ngx-components/)

Installation
------------

1.  Install the package via npm:
    
    npm install @tyeety/ngx-tcarousel
    
    Replace `@tyeety` with your GitHub username or organization.
    
2.  Import the `NgxCarouselComponent` in your Angular module or standalone component:
    
        import { Component } from '@angular/core';
        import { NgxCarouselComponent } from '@tyeety/ngx-tcarousel';
        
        @Component({
          selector: 'app-carousel-demo',
          template: `
            <ngx-carousel [itemCount]="carouselItems.length">
              <!-- Add your custom content here -->
              <div *ngFor="let item of carouselItems" class="custom-class">
                Title: {{item.title}}
                <img [src]="item.imageUrl" />
              </div>
            </ngx-carousel>
          `,
        })
        export class CarouselDemoComponent {
          carouselItems = [
            { imageUrl: 'assets/slide1.jpg', title: 'Welcome to ngx-tcarousel!' },
            { imageUrl: 'assets/slide2.jpg', title: 'Easy to use and customize.' },
            // Add more items as needed
          ];
        }
    
3.  Customize the carousel by adjusting styles, navigation, and other options.
    

Inputs
------

*   `itemCount`: **Mandatory**. The total number of items in the carousel.
*   `itemsPerPage`: Optional (default: 1). Number of items displayed per page.
*   `interval`: Optional (default: 0). Time between each item for auto slide (set to 0 to disable auto slide).
*   `gap`: Optional (default: 0). Used in CSS flex to set the gap between items.
*   `freezePeriod`: Optional (default: 5000). If the user changes a slide, auto slide freezes for this period (in milliseconds).
*   `showHandles`: Optional (default: false). Visibility of next and previous buttons.
*   `showIndicators`: Optional (default: false). Visibility of indicators.
*   `mainColor`: Optional (default: '#C7A867'). Color of **active indicator**, **timer** and **nav buttons borders**.
*   `secondColor`: Optional (default: 'black'). Color of **inactive indicators borders**.
*   `shadowMode`: Optional (default: false). Enable it, if you want to view inactive slides partialy.
*   `shadowDivisor`: Optional (default: 2). Divide scroll movement.
*   `startIndex`: Optional (default: 0). Start index!

Styling
-------

You can style the carousel using CSS or SCSS. Customize the appearance to match your project’s design.

Version
-------

Each version of this component exactly matches with same angular major version number.

License
-------

This project is licensed under the MIT License. Feel free to use, modify, and contribute!
