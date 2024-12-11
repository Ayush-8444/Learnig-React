const mainElement = document.getElementById("root")

function render(element, mainElement) {
    mainElement.appendChild(element)
}

function createElement(elementObj) {
    const htmlElement = document.createElement(elementObj.type)
    for (const prop in elementObj.props) {
            htmlElement.setAttribute(prop,elementObj.props[prop])      
    }
    htmlElement.innerHTML = elementObj.innerHTML
    render(htmlElement, mainElement)
}

function declareElement(type, attributes=null, html= null) {
    const elementObj = {
        'type': type,
        'props': attributes,
        'innerHTML': html
    }
    createElement(elementObj)
}

declareElement(
    'div',
    {
        class: "ayush",
        id : "name"
    },
    'this is a very good div'
)
declareElement('a', { href: "https://google.com" }, 'go to google')
declareElement("br")
declareElement("img", { src: "img_girl.jpg",alt: "Image of girl" });