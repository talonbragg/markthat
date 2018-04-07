module.exports = {
    markthat: function(mark) {
        return mark.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>') // links
            .replace(/\*\*(.*?)\*\*/ig, '<strong>$1</strong>') // bold
            .replace(/__(.*?)__/ig, "<strong>$1</strong>") //bold
            .replace(/\*(.*?)\*/ig, '<em>$1</em>') // italics
            .replace(/_(.*?)_/ig, "<em>$1</em>") // italics
            .replace(/^\s*#\s+(.*?$)/ig, "<h1>$1</h1>") // h1
            .replace(/^\s*##\s+(.*?$)/ig, "<h2>$1</h2>") // h2
            .replace(/^\s*###\s+(.*?$)/ig, "<h3>$1</h3>") // h3
            .replace(/^\s*####\s+(.*?$)/ig, "<h4>$1</h4>") // h4
            .replace(/^\s*#####\s+(.*?$)/ig, "<h5>$1</h5>") // h5
            .replace(/^\s*######\s+(.*?$)/ig, "<h6>$1</h6>") // h6
            .replace(/\~\~(.*?)\~\~/ig, "<del>$1</del>") // Strike-through
            .replace(/\=\=(.*?)\=\=/ig, "<mark>$1</mark>") // Highlight
            .replace(/\![(.*?)]\((.*?)\)/ig, "<img alt=\'$1\' src=\'$2\'>") // Images
            .replace(/^\s*-\s+(.*?$)/ig, "<li>$1</li>") // List Element
            .replace(/\`(.*?)\`/ig, "<code>$1</code>") // Code
            .replace(/\`\`\`(.*?)\`\`\`/ig, "<pre><code></code></pre>"); // Code Blocks
    },

    markthatFile: function(file) {
        var realData;
        const fs = require('fs');
        return new Promise(function(resolve, reject) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) throw err;
                realData = data.toString();
                // console.log(realData);
                resolve(realData.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>') // links
                    .replace(/\*\*(.*?)\*\*/ig, '<strong>$1</strong>') // bold
                    .replace(/__(.*?)__/ig, "<strong>$1</strong>") //bold
                    .replace(/\*(.*?)\*/ig, '<em>$1</em>') // italics
                    .replace(/_(.*?)_/ig, "<em>$1</em>") // italics
                    .replace(/^\s*#\s+(.*?$)/ig, "<h1>$1</h1>") // h1
                    .replace(/^\s*##\s+(.*?$)/ig, "<h2>$1</h2>") // h2
                    .replace(/^\s*###\s+(.*?$)/ig, "<h3>$1</h3>") // h3
                    .replace(/^\s*####\s+(.*?$)/ig, "<h4>$1</h4>") // h4
                    .replace(/^\s*#####\s+(.*?$)/ig, "<h5>$1</h5>") // h5
                    .replace(/^\s*######\s+(.*?$)/ig, "<h6>$1</h6>") // h6
                    .replace(/\~\~(.*?)\~\~/ig, "<del>$1</del>") // Strike-through
                    .replace(/\=\=(.*?)\=\=/ig, "<mark>$1</mark>") // Highlight
                    .replace(/\![(.*?)]\((.*?)\)/ig, "<img alt=\'$1\' src=\'$2\'>") // Images
                    .replace(/^\s*-\s+(.*?$)/ig, "<li>$1</li>") // List Element
                    .replace(/\`(.*?)\`/ig, "<code>$1</code>") // Code
                    .replace(/\`\`\`(.*?)\`\`\`/ig, "<pre><code></code></pre>") // Code Blocks
                );
            });
        });
    }
};