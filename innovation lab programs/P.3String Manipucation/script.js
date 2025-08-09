function analyzeText() {
    const text = document.getElementById("paragraphinput").value;
    const totalchars = text.length;
    const words = text.match(/\b\w+\b/g) || [];
    const totalwords = words.length;
    const totalSentences = (text.match(/[.!?]/g) || []).length;
    const uniquewords = [...new Set(words.map(w => w.toLowerCase()))];

    const freq = {};
    words.forEach(word => {
        const w = word.toLowerCase();
        freq[w] = (freq[w] || 0) + 1;
    });

    const sortedFreq = Object.entries(freq).sort((a, b) => b[1] - a[1]);

    const output = `
Total Characters=${totalchars}
Total words=${totalwords}
Total sentence=${totalSentences}
Unique words=${uniquewords.join(",")}
words Frequency=
${sortedFreq.map(([word, count]) => word + ";" + count).join("\n")}
    `;

    document.getElementById("output").textContent = output;
}
