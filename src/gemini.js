import { GoogleGenerativeAI } from "@google/generative-ai";

function getApiKey() {
    let apiKey = localStorage.getItem("gemini_api_key");
    if (!apiKey) {
        apiKey = prompt("Please enter your Gemini API key:");
        if (apiKey) {
            localStorage.setItem("gemini_api_key", apiKey);
        }
    }
    return apiKey;
}

export async function getGroceryList(userInput) {
    const apiKey = getApiKey();
    if (!apiKey) {
        return { items: [] };
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `Generate a grocery list based on the following input: "${userInput}". The output should be a JSON object with an "items" array. Each item in the array should be an object with "name" and "quantity" properties.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        // The response may contain markdown, so we need to extract the JSON part.
        const jsonText = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
        return JSON.parse(jsonText);
    } catch (error) {
        console.error("Error generating grocery list:", error);
        return { items: [] };
    }
}
