export default function bookmarkInsert() {
    // Get all of the headers (h1-h6)
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    console.log(headers);
    // give each header a unique id
    const ids = new Set();
    headers.forEach(h=>{
        function addLink() {
            const link = document.createElement("a");
            link.className = "bookmark-link";
            link.href = "#" + h.id;
            link.innerHTML = "#";
            h.appendChild(link);
        }
        console.log("id: " + h.id);
        if (h.id && !ids.has(h.id))
        {
            addLink();
            return;
        }
        else 
        {
            // generate an id based on textContent 
            // and add it to the header
            h.id = h.textContent
                // get the first three words
                .split(/\s+/)
                .slice(0,3)
                // join them with a dash
                .join("-")
                // make it lowercase
                .toLowerCase()
                // remove any non-alphanumeric characters
                .replace(/[^a-z0-9-]+/g, "");
            if (ids.has(h.id))
            {
                let i = 1;
                while (ids.has(h.id + "-" + i))
                {
                    i++;
                }
                h.id += "-" + i;
            }
            ids.add(h.id);
            addLink();

        }
        ids.has()
    })
    // scroll to the bookmark in the url
    const hash = window.location.hash;
    if (hash) {
        window.setTimeout(() => {
            const element = document.querySelector(hash);
            console.log(element, hash);
            if (element) {
                element.scrollIntoView(true, {
                    behavior: "smooth"
                });
            }
        }, 0);
    }
}