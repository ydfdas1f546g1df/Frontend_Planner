let URI = "http://127.0.0.1:8080"

export async function getPosts() {
    console.log("Fetching posts")
    let response = await fetch(URI + "/posts")
    console.log(response)
    let data = await response.json()
    console.log(data)
    data = data.posts
    return data
}