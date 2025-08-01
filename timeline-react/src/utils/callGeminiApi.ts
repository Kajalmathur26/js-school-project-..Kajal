// src/utils/callGeminiApi.ts

export const callGeminiApi = async (prompt: string, configOptions: object | null = null) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY is not set. Please add it to your .env file and restart the server.");
  }

  const API_MODEL = "gemini-1.5-flash-latest";
  const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
  const url = `${API_BASE_URL}${API_MODEL}:generateContent?key=${apiKey}`;

  // ✅ CORRECTED: This structure is now correct.
  // The 'generationConfig' key is a top-level property in the payload.
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    ...(configOptions && { generationConfig: configOptions })
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("API Error Response:", data);
      throw new Error(`API request failed: ${data?.error?.message || res.status}`);
    }

    // ✅ CORRECTED: This logic now reliably extracts and parses the JSON response.
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (typeof text !== 'string') {
        console.error("Invalid API response structure:", data);
        throw new Error("Could not find text in API response.");
    }
    
    // If the response is expected to be JSON, parse it.
    if (configOptions && (configOptions as any).response_mime_type === 'application/json') {
        return JSON.parse(text);
    }
    
    // Otherwise, return the plain text (for summaries).
    return text;

  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Re-throw the error for the component to handle.
  }
};