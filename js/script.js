const inputs = document.querySelectorAll(".controls input"); //calls all the input sections on the site and turns them into a NodeList (similar to an array but has less available methods)

//function that updates changes in the input fields
function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // dataset calls everything in the HTML starting with data- and turns those values into an object. This || '' means OR NOTHING because the colour doesn't have a size
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//line above: select entire element and change the variables; this stands for inputs; so you set the property for the input name, the input value (i.e. size) and add the suffix, meaning px so the browser knows what it's displaying
};

//change event that listens to the changes in input fields
inputs.forEach(input => input.addEventListener("change", handleUpdate)); //listens for a change in input values
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate)); //reacts to the mouse moving over the input fields to change the values

