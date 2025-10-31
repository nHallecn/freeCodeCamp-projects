** start of index.html **

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Developer Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <nav id="navbar">
        <ul>
            <li><a href="#welcome-section">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a id="profile-link" href="https://github.com/your-username" target="_blank">GitHub Profile</a></li>
        </ul>
    </nav>

    <section id="welcome-section">
        <h1>Hello, I am HALLE</h1>
        <p>A Web Developer who loves to build things.</p>
    </section>

    <section id="project-section">
        <h2>My Projects</h2>
        <div id="projects-grid">
            <a href="https://example.com/project-one" target="_blank" class="project-tile">
                Project One: Survey Form
            </a>
            <a href="https://example.com/project-two" target="_blank" class="project-tile">
                Project Two: Tribute Page
            </a>
        </div>
    </section>
    
    </body>
</html>

** end of index.html **

** start of styles.css **

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

#navbar {
    
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 15px 0;
    z-index: 1000; 
    text-align: center;
}

#navbar ul {
    list-style: none;
}

#navbar ul li {
    display: inline;
    margin: 0 20px;
}

#navbar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

#navbar ul li a:hover {
    background-color: #555;
}

#welcome-section {

    height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f4f4f9;
    color: #333;
    padding-top: 60px; 
}

#welcome-section h1 {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 10px;
}

#project-section {
    padding: 80px 20px;
    background-color: #fff;
    text-align: center;
}

#project-section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
}

#projects-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

.project-tile {
    background-color: #e9ecef;
    color: #333;
    text-decoration: none;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    font-size: 1.1rem;
    font-weight: bold;
}

.project-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}


@media (max-width: 600px) {
 
    
    #navbar ul li {
        display: block; 
        margin: 5px 0;
    }

    #navbar {
        padding: 10px 0; 
    }

    #welcome-section h1 {
        font-size: 2rem; 
    }
}

** end of styles.css **

