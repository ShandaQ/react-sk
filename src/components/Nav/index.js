import React from "react";

function Nav(){
    // create objects that contain each category's name and a short description. 
    const categories = [
        {
            name: "commercail",
            description: "Photos of grocery stores, food trucks and other commerical projects",
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    // onClick function when a category is selected
    function categorySelected(name){
        // log to console name
        console.log(`${name} clicked`)
    }
    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">📸</span>
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* Map over the arrary .map() */}
                    {categories.map((category) =>(
                        <li className="mx-1" key={category.name}>
                            {/* <span onClick={categorySelected}> */}

                            {/* using an anonymous arrow function */}
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Nav;