
const http = require('http');
const fs = require('fs');
const path = require('path');

const talks = [
    {
        "title": "The Art of Modern JavaScript",
        "speakers": ["John Doe"],
        "category": ["JavaScript", "Web Development"],
        "duration": 60,
        "description": "A deep dive into the new features of ES2025 and how to use them effectively."
    },
    {
        "title": "Building Scalable APIs with Node.js",
        "speakers": ["Jane Smith"],
        "category": ["Node.js", "Backend"],
        "duration": 60,
        "description": "Learn how to build robust and scalable APIs using Node.js and best practices."
    },
    {
        "title": "CSS Grids and Flexbox: A Love Story",
        "speakers": ["Emily White", "Chris Green"],
        "category": ["CSS", "Frontend"],
        "duration": 60,
        "description": "Master the art of layout in CSS with Grid and Flexbox."
    },
    {
        "title": "Introduction to Machine Learning with Python",
        "speakers": ["Michael Black"],
        "category": ["Python", "Machine Learning"],
        "duration": 60,
        "description": "An introductory session on the basics of machine learning using Python and popular libraries."
    },
    {
        "title": "The Future of Frontend: WebAssembly",
        "speakers": ["Sarah Brown"],
        "category": ["WebAssembly", "Frontend"],
        "duration": 60,
        "description": "Explore the potential of WebAssembly and how it's changing the landscape of web development."
    },
    {
        "title": "Cybersecurity in the Modern Age",
        "speakers": ["David Clark"],
        "category": ["Cybersecurity"],
        "duration": 60,
        "description": "An overview of the current cybersecurity threats and how to protect your applications."
    }
];

const server = http.createServer((req, res) => {
    if (req.url === '/api/talks') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(talks));
    } else {
        let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
        const extname = path.extname(filePath);
        let contentType = 'text/html';

        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    res.writeHead(404);
                    res.end('404 Not Found');
                } else {
                    res.writeHead(500);
                    res.end('500 Internal Server Error');
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
