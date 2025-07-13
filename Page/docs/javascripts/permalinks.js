document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(header => {
        const permalink = header.querySelector("a.headerlink");
        if (permalink) {
            // Buscar el siguiente párrafo después del header
            let next = header.nextElementSibling;
            while (next && next.tagName !== "P") {
                next = next.nextElementSibling;
            }
            if (next) {
                // Limitar longitud del resumen si es necesario
                let summary = next.textContent.trim();

                if (summary.length > 200) {
                    summary = summary.substring(0, 197) + "...";
                }
                
                permalink.title = summary;
            }
        }
    });
});
