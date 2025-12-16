export async function Data(apiUrl) {
    try{
        const response = await fetch(apiUrl);
        if (!response.ok){
            throw new Error("HTTP error! Status: ${response.status}");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
}