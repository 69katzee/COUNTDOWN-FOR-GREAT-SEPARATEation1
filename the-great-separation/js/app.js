// ==========================================
// Website Initializer
// ==========================================

// If the website has already reached Memory Mode,
// always redirect to memories.html

if(localStorage.getItem("websiteMode")==="memory"){

    window.location.href="pages/memories.html";

}
