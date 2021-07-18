import { reRenderEntireTree } from "../render"

export let state = {
    posts: [
        { post: 'How are You?' },
        { post: 'Hi, my name is Bond, James Bond!' },
        { post: 'Hi, my name is Bond, James Bond!' },
        { post: 'Hi, my name is Bond, James Bond!' },
        { post: 'Hi, my name is Bond, James Bond!' },
        { post: 'Hi, my name is Bond, James Bond!' },
      ],
      dialogsData: [
        { id: 1, name: 'James' },
        { id: 2, name: 'Bond' },
        { id: 1, name: 'James Bond' },
      ],
      messages: [
        { id: 1, message: 'Hello from James' },
        { id: 2, message: 'Hello from Bond' },
        { id: 3, message: 'Hello from James Bond' }
      ],
}

export const addPost  = (postText) =>{
  let newPost = {
    post: postText
  }
  state.posts.push(newPost)
  reRenderEntireTree(state)
}